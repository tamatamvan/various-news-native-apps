<template>
  <flat-list 
    :data="articles"
    :render-item="({item}) => renderListItem(item)"
    :key-extractor="(item, idx) => `article-${item.source.id}-${idx}`"
  />
</template>

<script>
import React from 'react';
import axios from 'axios';

import NewsCard from './NewsCard.vue';

import { Alert } from 'react-native';
import { API_KEY } from '../../config.js';

export default {
  data () {
    return {
      articles: [],
    }
  },
  methods: {
    fetchNews () {
      axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
        .then(({data}) => {
          this.articles = data.articles;
        })
        .catch(() => Alert.alert('Failed to fetch data!'));
    },
    renderListItem (item) {
      return (<NewsCard article={ item }/>)
    },
  },
  mounted () {
    this.fetchNews();
  },
}
</script>