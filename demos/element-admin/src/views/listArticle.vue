<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column prop="body" label="内容" width="120"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
          <el-button @click="removeClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "listArticle",
  data() {
    return {
      articles: []
    };
  },
  created() {
    this.$http.get("articles").then(res => {
      this.articles = res.data;
      console.log(res);
    });
  },
  methods: {
    removeClick(article) {
      this.$http.post("delete", article).then(res => {
        console.log("!!!" + res);
        this.$message({
          message: '恭喜你，删除文章成功!',
          type: 'success'
        });
        this.fetch();
      });
    },
    fetch() {
      this.$http.get("articles").then(res => {
        this.articles = res.data;
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
</style>
