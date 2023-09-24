<template>
  <div class="article-page">
    <van-nav-bar
      title="喜欢的文章"
    />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem v-for="item in articleList" :key="item.id" :item="item"></ArticleItem>
    </van-list>

    <div class="footerpadding"></div>
  </div>
</template>

<script>
import { getLike } from '@/api/article'

export default {
  name: 'MyLike',
  data () {
    return {
      articleList: [],
      loading: false,
      finished: false,
      current: 1
    }
  },
  methods: {
    async onLoad () {
      // 异步请求数据
      // 获取文章列表
      const res = await getLike(this.current)
      console.log(res)
      this.articleList.push(...res.data.data.rows)
      this.loading = false
      this.current++
      // 如果当前页数大于总页数，就不再请求数据
      if (this.current > res.data.data.pageTotal) {
        this.finished = true
      }
    },
    toDetail (id) {
      this.$router.push({
        name: 'Detail',
        params: {
          id
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}

.article-header {
  background: #fff;
  padding: 10px 15px;
  font-size: 12px;
  color: #999;
  text-align: left;
  line-height: 1.5;

  .selected {
    color: #333;
  }
}

.footerpadding {
  height: 50px;
}
</style>
