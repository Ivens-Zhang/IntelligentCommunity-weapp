/*
 * @Author       : Ivens
 * @Date         : 2020-03-21 21:55:49
 * @LastEditTime : 2020-03-22 00:01:43
 * @LastEditors  : Ivens
 * @Description  : 演示 mongoose 简单的增删改查.
 * @FilePath     : \IntelligentCommunity-weapp\mongooseDemo\index.js
 */

// 引入 mongoose 模块
var mongoose = require('mongoose');

// 连接数据库, 注意: 现在连接的是服务器 139.196.54.132 的 MongoDB, 后面的值为 true 的那些参数我也不知道是什么意思.
mongoose.connect('mongodb://139.196.54.132:27017/school', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
})

// 创建 Schema
var Schema = mongoose.Schema;

// 规定 Schema 的规则, 多种规定的形式灵活使用
var studentSchema = new Schema({
  name: String, // 设定类型
  gender: {
    type: Number,
    default: 0 // 设定默认值
  },
  age: {
    type: Number,
    min: 18, // 设定最大最小值
    max: 65
  }
});

// 利用 Schema 创建一个 Model, 注意: model 的第一个参数就是你在数据库中创建的表名, 但是会自动做一些调整, 比如你用的是开头大写的名词, mongoose 会自动转换成名词复数作为表名, 如: Student => students
var studentModel = mongoose.model('Student', studentSchema)

// 创建两个符合 studentSchema 的对象
var jack = {
  name: "jack",
  gender: 0,
  age: 20
}

var nancy = {
  name: 'nancy',
  gender: 1,
  age: 22
}


// 向 students 集合中添加的两种方法:
// 1. 
studentModel.create(nancy, function (err) {
  if (err) {
    console.log('保存失败');
  }
  console.log('保存成功');
})

// 2. 
var jackEntity = new studentModel(jack)

jackEntity.save(function (err) {
  if (err) {
    console.log('保存失败');
  }
  console.log('保存成功');
})

// 根据条件删除, Model.remove(条件, 回调函数), 也可以使用 findOneAndRemove()
studentModel.remove({
  name: "jack"
}, function (err) {
  if (err) {
    console.log('删除错误');
  }
  console.log('删除成功');
})

// 修改, 与删除类似, 可以直接使用update(), 也可以使用 findOneAndUpdate()
studentModel.findOneAndUpdate({
  name: "nancy"
}, {
  name: "Lili"
}, function(err) {
  if(err) {
    console.log('更新错误');
  }
  console.log('更新成功');
})

// 查询表内全部数据
studentModel.find(null, function(error, result){
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
});

// 根据条件查询
var criteria = {age : 22}; // 查询条件
studentModel.find(criteria, function(error, result){
    if(error) {
        console.log(error);
    } else {
        console.log(result);
    }
});

/**
 * 总结:
 * 1. 引入 mongoose 模块
 * 2. 连接数据库
 * 3. 实例化 & 设计 Schema
 * 4. 实例化Model
 * 5. 增删查改
 */