<template>
  <div class="article-detail-page">
    <nav class="nav" @click="$router.back()"><span class="back">&lt;</span> 面经详情</nav>
    <header v-if="articleDetail.id" class="header">
      <h1>{{ articleDetail.stem }}</h1>
      <p>{{ articleDetail.createdAt }} | 浏览数 {{ articleDetail.views }} | 点赞数 {{ articleDetail.likeCount }}</p>
      <p>
        <img
          :src="articleDetail.avatar"
          alt=""
        />
        <span>{{ articleDetail.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="articleDetail.content">
    </main>
    <div class="footer-padding"></div>
    <div class="collect-like">
      <a :class="{
        'is-like': articleDetail.likeFlag
      }" href="javascript:" @click="likeOrCollectArticle(1)">点赞</a>
      <a :class="{
        'is-collect': articleDetail.collectFlag
      }" href="javascript:" @click="likeOrCollectArticle(2)">收藏</a>
    </div>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
import { getArticleDetail, likeOrCollect } from '@/api/article'
import like from '@/views/Like.vue'

export default {
  computed: {
    like () {
      return like
    }
  },
  created () {
    this.getArticleDetail(this.$route.params.id)
  },

  name: 'ArticleDetail',
  data () {
    return {
      articleDetail: []
    }
  },
  methods: {
    async getArticleDetail (id) {
      const res = await getArticleDetail(id)
      console.log(res)
      this.articleDetail = res.data.data
    },
    async likeOrCollectArticle (type) {
      console.log(type)
      const likeFlag = this.articleDetail.likeFlag
      const collectFlag = this.articleDetail.collectFlag
      // 1点赞 2收藏
      const res = await likeOrCollect({
        id: this.articleDetail.id,
        optType: type
      })
      console.log(res)
      if (res.status !== 200) {
        if (type === 1) return this.$toast.fail('点赞失败')
        this.$toast.fail('收藏失败')
      } else {
        if (type === 1) {
          this.$toast.success(likeFlag ? '取消点赞成功' : '点赞成功')
          this.articleDetail.likeFlag = !likeFlag
          this.articleDetail.likeCount = likeFlag ? +this.articleDetail.likeCount - 1 : +this.articleDetail.likeCount + 1
        } else {
          this.$toast.success(collectFlag ? '取消收藏成功' : '收藏成功')
          this.articleDetail.collectFlag = !collectFlag
        }
      }
      this.getArticleDetail(this.$route.params.id)
    }
  }
}
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;

    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }

  .header {
    padding: 0 15px;

    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .body {
    padding: 0 15px;
  }

  .collect-like {
    display: flex;
    width: 100px;
    height: 50px;
    background: palegreen;
    position: fixed;
    bottom: 30%;
    left: 60%;

    a {
      width: 50%;
      height: 100%;
      line-height: 50px;
      text-align: center;
      color: #666;
      font-size: 16px;
      text-decoration: none;
    }

    a.is-like {
      color: red;
    }

    a.is-collect {
      color: blue;
    }
  }
}

.footer-padding {
  height: 50px;
}
</style>
