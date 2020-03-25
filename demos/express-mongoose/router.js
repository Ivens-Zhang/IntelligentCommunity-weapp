var express = require('express')

var router = express.Router()

var db = require('./db')

router.get('/', function (req, res) {  
  db.find(function (err, students) {  
    if (err) {
      console.log(err);
    }
    res.render('index.html', {
      fruits: ['苹果', '香蕉', '橘子', '菠萝'],
      students
    })
  })
})

router.get('/delete', function (req, res) {  
  db.delete(req.query.id, function (err) {  
    if (err) {
      console.log("删除失败");
    }
    console.log('删除成功');
  })
  res.redirect('/')
})

router.get('/new', function (req, res) {  
  res.render('new.html')
})

router.post('/new', function (req, res) {  
  console.log(req.body);
  db.add(req.body, function (err) {  
    if (err) {
      return console.log(err);
    }
    res.redirect('/')
  })
})

router.get('/edit', function (req, res) {  
  db.findById(req.query.id, function (err, student) {  
    if (err) {
      console.log(err);
    }
    res.render('edit.html', {
      student
    })
  })
})

router.post('/edit', function (req, res) {  
  db.edit(req.body, function (err) {  
    if (err) {  
      return console.log('修改错误');
    }
  })
  res.redirect('/')
})

module.exports = router