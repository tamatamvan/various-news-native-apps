<template>
  <StackLayout class="card-container">
    <!-- why load the image like this? -->
    <!-- https://github.com/nativescript-vue/nativescript-vue/issues/229#issuecomment-390330474 -->
    <Image
      :src="typeof article.urlToImage === 'string' ? 
      article.urlToImage : 
      ''" 
      style="height: 200" 
      stretch="aspectFill"
    />
    <Label :textWrap="true" :text="article.title" class="news-title" :editable="false" :borderBottomWidth="0"/>
    <Button text="Read More" @tap="openUrl"/>
  </StackLayout>
</template>

<script>
import * as utils from 'utils/utils';

export default {
  props: ['article'],
  methods: {
    openUrl () {
      utils.openUrl(this.article.url);
    },
  },
}
</script>

<style>
.card-container {
  padding: 8;
  background-color: #fff;
  border: solid 1px #2e2e2e;
}
.news-title {
  font-size: 18;
  font-weight: bold;
}
</style>

