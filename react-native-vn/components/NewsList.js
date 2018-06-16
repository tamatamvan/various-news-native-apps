import React, { Component } from 'react';
import {
  FlatList,
  Alert
} from 'react-native';

import NewsCard from './NewsCard';

import { API_KEY } from '../config';

import axios from 'axios';

class NewsList extends Component {
  state = {
    articles: [],
  }

  loadArticles = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`)
      .then(({data}) => {
        this.setState({
          articles: data.articles,
        });
      })
      .catch(err => {
        Alert.alert('Failed to fetch news!');
      });
  }

  renderItem = ({ item }) => <NewsCard article = { item }/>

  keyExtractor = (item, idx) => `news-${item.source.id}-${idx}`

  componentDidMount() {
    this.loadArticles();
  }

  render() {
    return (
      <FlatList 
        data = { this.state.articles }
        renderItem = { this.renderItem }
        keyExtractor = { this.keyExtractor } 
      />
    );
  }
}


export default NewsList;