<template>
  <div class="article-page">
    <van-nav-bar
      left-arrow
      left-text="返回"
      right-text="按钮"
      title="标题"
    />
    <ArticleItem v-for="item in articleList" :key="item.id" :item="item"></ArticleItem>
    <div class="footerpadding">
    </div>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get

import { getArticles } from '@/api/article'

export default {
  name: 'ArticleList',
  created () {
    this.getArticleList()
  },
  mounted () {
    // 原生Js获取滚动位置
    // console.log(window)
    // window.addEventListener('scroll', function () {
    //   console.log('页面滚动事件触发了');
    //   console.log('滚动位置：', window.scrollY);
    //   localStorage.setItem('scrollY', window.scrollY)
    // })
    // if (localStorage.getItem('scrollY')) {
    //   window.scrollTo(0, localStorage.getItem('scrollY'))
    // }
  },
  data () {
    return {
      articleList: []
      // scrollY: 0
    }
  },
  methods: {
    async getArticleList () {
      const res = await getArticles()
      console.log(res)
      this.articleList = res.data.data.rows
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

.footerpadding {
  height: 50px;
}
</style>
