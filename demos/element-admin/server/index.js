/*
 * @Author       : Ivens
 * @Date         : 2020-03-25 22:30:07
 * @LastEditTime : 2020-03-25 22:34:12
 * @LastEditors  : Ivens
 * @Description  : 
 * @FilePath     : \IntelligentCommunity-weapp\demos\element-admin\server\index.js
 */
const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://139.196.54.132:27017/element-admin', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true
})

const Article = mongoose.model('Article', new mongoose.Schema({
  title: {
    type:String
  },
  body: {
    type: String
  }
}))

app.get('/', async(req, res) => {
  res.send('index')
})
app.post('/api/articles', async(req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
})
app.get('/api/articles', async(req, res) => {
  const article = await Article.find()
  res.send(article)
})
app.post('/api/delete', async(req, res) => {
  const deleteID = req.body._id
  console.log(deleteID);
  await Article.findByIdAndDelete(deleteID)
  res.send({
    status: true
  })
})


app.listen('3001', () => {
  console.log('http://localhost:3001/');
})