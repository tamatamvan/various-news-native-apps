<template>
  <view>
    <flat-list 
      :data="articles"
      :render-item="({item}) => renderListItem(item)"
    />
  </view>
</template>

<script>
import React from 'react';
import axios from 'axios';
import { Alert, Text } from 'react-native';

export default {
  data () {
    return {
      articles: [],
    }
  },
  methods: {
    fetchNews () {
      axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c88e08e6d1754a538e8e00ca712c81e0')
        .then(({data}) => {
          this.articles = data.articles;
        })
        .catch(() => Alert.alert('Failed to fetch data!'));
    },
    renderListItem (item) {
      return (<Text>{ item.title }</Text>)
    },
  },
  mounted () {
    this.fetchNews();
  },
}
</script>

