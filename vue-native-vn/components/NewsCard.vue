<template>
  <view class="card-outer">
    <image
      :source="{ uri: article.urlToImage }"
      :style="{ width: '100%', height: 200 }"
    />
    <text class="card-title">{{ article.title }}</text>
    <touchable-opacity class="card-button">
      <text class="card-button-txt">Read More</text>
    </touchable-opacity>
  </view>
</template>

<script>
export default {
  props: [ 'article' ]
}
</script>


<style>
.card-outer {
  background-color: #fff;
  margin-bottom: 8;
  elevation: 2;
}
.card-title {
  font-size: 18;
  font-weight: bold;
  padding: 4;
}
.card-button {
  padding: 8;
  background-color: #2962ff;
}
.card-button-txt {
  color: #fff;
  text-align: center;
}
</style>
