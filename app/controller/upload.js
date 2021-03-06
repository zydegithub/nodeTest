'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
class UploadController extends Controller {
  // 查询
  async query() {
    const { ctx } = this;
    const file = ctx.request.files[0]; // file包含了文件名，文件类型，大小，路径等信息，可以自己打印下看看
    const file1 = fs.readFileSync(file.filepath); // files[0]表示获取第一个文件，若前端上传多个文件则可以遍历这个数组对象
    // 将文件存到指定位置
    if (fs.existsSync(path.join('./', 'app/public/' + ctx.request.files[0].filename))) {
      fs.unlinkSync(path.join('./', 'app/public/' + ctx.request.files[0].filename));
    }
    fs.writeFileSync(path.join('./', 'app/public/' + ctx.request.files[0].filename), file1);
    ctx.body = {
      code: 200,
      message: '',
      data: file.filename,
    };
  }
}

module.exports = UploadController;
