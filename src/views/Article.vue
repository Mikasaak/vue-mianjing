<template>
  <div class="article-page">
    <div class="article-header">
      <a :class="{
        selected: sorter==='weight_desc'
      }" class="sorter" @click="changeSorter('weight_desc')">推荐</a>
      |
      <a :class="{
         selected: sorter!=='weight_desc'
      }" class="sorter" @click="changeSorter()">最新</a>
    </div>
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
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get

import { getArticles } from '@/api/article'

export default {
  name: 'ArticleList',
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
      articleList: [],
      loading: false,
      finished: false,
      current: 38,
      pageSize: 10,
      sorter: 'weight_desc'
      // scrollY: 0
    }
  },
  methods: {
    async onLoad () {
      // 异步请求数据
      // 获取文章列表
      const res = await getArticles({
        current: this.current,
        pageSize: this.pageSize,
        sorter: this.sorter
      })
      console.log(res)
      this.articleList.push(...res.data.data.rows)
      this.loading = false
      this.current++
      // 如果当前页数大于总页数，就不再请求数据
      if (this.current > res.data.data.pageTotal) {
        this.finished = true
      }
    },
    changeSorter (sorter) {
      this.sorter = sorter
      this.articleList = []
      this.current = 1
      this.finished = false
      this.loading = true
      this.onLoad()
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
