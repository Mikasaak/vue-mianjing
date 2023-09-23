<template>
  <div>
    <van-cell border class="article-item" is-link>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <div class="head">
          <img :src="item.avatar" alt=""/>
          <div class="con">
            <p class="title">{{ item.stem }}</p>
            <p class="other">{{ item.creator }} | {{ item.createdAt }}</p>
          </div>
        </div>
      </template>

      <template #label>
        <div class="body">
          {{ item.content }}
        </div>
        <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    item: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;

  .head {
    display: flex;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }

    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;

      p {
        margin: 0;
        line-height: 1.5;

        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }

        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }

  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
