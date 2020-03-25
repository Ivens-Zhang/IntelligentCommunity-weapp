<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="form" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "createArticle",
  data() {
    return {
      article: {
        title: '',
        body: ''
      }
    };
  },
  methods: {
    saveArticle() {
      this.$http.post('articles', this.article).then(res => {
        console.log(res.data);
        this.$message({
          message: '恭喜你，新增文章成功!',
          type: 'success'
        });
        this.$router.push('/articles/index')
      }).catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style scoped>
</style>
