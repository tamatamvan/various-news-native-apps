<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home - Various News">
      <ActionItem @tap="toAboutPage"
        ios.systemIcon="16" ios.position="right"
        text="About" android.position="popup">
      </ActionItem>
    </ActionBar>
    <StackLayout class ="main-container">
      <ListView for="article in articles" class="list-container">
        <v-template>
          <NewsCard :article="article"/>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import { API_KEY } from '../config';

import NewsCard from './NewsCard.vue';

export default {
  components: {
    NewsCard,
  },
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
          console.log('DONE');
          this.articles = data.articles;
        })
        .catch(err => console.log(err));
    },
    toAboutPage () {
      console.log('ke about')
      this.$router.push('/about');
    },
  },
  mounted () {
    this.fetchNews();
  },
}
</script>

<style>
.main-container {
  padding: 16;
}
.list-container {
  height: 100%;
}
</style>

