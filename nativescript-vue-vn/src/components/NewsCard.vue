<template>
  <StackLayout>
    <!-- why load the image like this? -->
    <!-- https://github.com/nativescript-vue/nativescript-vue/issues/229#issuecomment-390330474 -->
    <Image
      :src="typeof article.urlToImage === 'string' ? 
      article.urlToImage : 
      ''" 
      style="height: 200" 
      stretch="aspectFill"
    />
    <Label :text="article.title"/>
  </StackLayout>
</template>

<script>
export default {
  props: ['article'],
}
</script>
