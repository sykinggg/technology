# 具体使用

使用纯 HTML Form 上传文件：

name 属性是与后端约定的文件上传字段

```
<form action="http://localhost:3001/api/tools/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="fileToUpload">
    <button type="submit">Submit</button>
</form>
```

Node.js + express + multer 实现后端文件接收处理

```js
const express = require('express');
const router = express.Router();
const path = require('path')
const multer = require('multer') // 图片上传模块

var upload = multer({
  dest: path.join(__dirname, '../public/upload/'),
})// 定义图片上传的临时目录
router.post('/tools/upload', authLogin, upload.single('fileToUpload'), (req, res, next) ={
    let file = req.file
    // 处理文件
});
```

> 简单来说就是把文件转化成字节流，然后使用http进行传输，后端接受后在把二进制转化成原先的文件格式。
> 
> 在HTML表单中，可以上传文件的唯一控件就是`<input type="file">`。
当一个表单包含`<input type="file">`时，表单的enctype必须指定为multipart/form-data（表明表单需要上传二进制数据），method必须指定为> post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。multiple="multiple"说明可以同时上传多个文件
> 
> 也可以使用文件编码传输，可以把图片转化成base64格式然后进行传输，到了服务器之后直接解码base64，

# 原理

## HTTP报文

* 起始行                  - 对报文的描述，所有的HTTP报文都以一个起始行作为开始，即报文的第一行就是起始行

* 首部                     - 可以有0或多个首部字段，每个首部 字段都包含一个名字和一个值，首部字段后是\r\n，首部以一个空行\r\n结束

* 实体的主体部分   - 首部之后就是可选的报文实体，实体的主体是HTTP报文的负荷，传输的内容就在实体的主体中

## 实体



1. 首部中Content-Type定义了分隔符boundary，以4个破折号开头

2. 实体中分隔符 = "\r\n--" + 首部中分隔符boundary

3. 实体首部Content_Disposition中定义了filename表示上传文件名（name=“fileName”表示input域属性），由于这里是一个input框中上传两个Excel1. 文件，所以这里的2个实体首部中的Content_Disposition的name属性都为fileName

4. 实体首部Content-Type描述了上传文件的类型，这里表示Sheet工作表，即Excel

5. 实体首部中多行是以CRLF分隔的，即\r\n

6. 实体中可能存在多部分，每一部分之间以分隔符boundary分隔，每个部分的实体首部与主体之间以CRLFCRLF分隔，即\r\n\r\n

7. 符号 - 标志 - 十六进制 - 字节码 ， 回车： \r - CR - 0d - 13, 换行：\n - LF - oa - 10