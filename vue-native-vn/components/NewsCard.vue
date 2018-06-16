<template>
  <view>
    <image
      :source="{ uri: article.urlToImage }"
      :style="{ width: '100%', height: 200 }"
    />
    <text>{{ article.title }}</text>
  </view>
</template>

<script>
export default {
  props: [ 'article' ]
}
</script>
