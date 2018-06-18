<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home - Various News"/>
    <StackLayout>
      <ListView for="article in articles">
        <v-template>
          <Label :text="article.title"/>
        </v-template>
      </ListView>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World 123</Button>
    </StackLayout>
  </Page>
</template>

<script>
import { API_KEY } from '../config';
export default {
 data () {
   return {
     articles: [],
   }
 },
 methods: {
   fetchNews () {
     console.log('HAHAHA')
     this.$http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
      .then(({ data }) => {
        this.articles = data.articles;
      })
      .catch(err => console.log(err));
   },
 },
 mounted () {
   this.fetchNews();
 },
}
</script>

