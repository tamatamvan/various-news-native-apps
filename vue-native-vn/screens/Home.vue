<template>
  <view class="container">
    <news-list/>
  </view>
</template>

<script>
import NewsList from '../components/NewsList';
export default {
  components: {
    NewsList,
  },
}
</script>

<style>
.container {
  padding: 16;
}
</style>
