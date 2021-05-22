import flask
import  os
import base64
from sys import path
path.append('E:\meizhuanghouduan\PSGAN')
import demo 

from flask import Flask,render_template,request,json
app=flask.Flask(__name__)


@app.route('/score',methods=['POST'])
def score():
    #print("请求已开始")
    #theimg1 = str(json.loads(request.values.get("theimg1")))
    #theimg2=str(json.loads(request.values.get("theimg2")))
    theimg1 = str(json.loads(request.values.get("temp1")))
    theimg2=str(json.loads(request.values.get("temp2")))
    img1=base64.b64decode(theimg1)
    img2=base64.b64decode(theimg2)
    f1=open('E:/meizhuanghouduan/PSGAN/assets/images/non-makeup/xfsy_0106.png','wb')
    f1.write(img1)
    f1.close()
    f2=open('E:/meizhuanghouduan/PSGAN/assets/images/makeup/makeup.png','wb')
    f2.write(img2)
    f2.close()
    demo.main()
    f=open('E:/meizhuanghouduan/transferred_image.png','rb')
    img=base64.b64encode(f.read()).decode('utf-8')
    f.close()
    #res='返回成功'
    print("文件已加载")
    return json.dumps(img)

@app.route('/background',methods=['POST'])
def backfround():
    n= str(json.loads(request.values.get("background")))
    f=open('E:/meizhuanghouduan/thebeauty2.png','rb')
    if n=='1' :
        f=open('E:/meizhuanghouduan/thebeauty1.png','rb')
    if n=='2' :
        f=open('E:/meizhuanghouduan/thebeauty2.png','rb')
    if n=='3' :
        f=open('E:/meizhuanghouduan/thebeauty3.png','rb')
    img=base64.b64encode(f.read()).decode('utf-8')
    f.close()
    return json.dumps(img)

   



if __name__=='__main__' :
    app.run()