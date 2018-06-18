<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home - Various News"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World 123</Button>
    </StackLayout>
  </Page>
</template>

<script>
export default {
 data () {
   return {
     articles: [],
   }
 },
 methods: {
   fetchNews () {
     console.log('HAHAHA')
     this.$http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c88e08e6d1754a538e8e00ca712c81e0`)
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

