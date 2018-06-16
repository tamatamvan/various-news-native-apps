import React, { Component } from 'react';
import { FlatList, View, Text, Image,  Alert, StyleSheet } from 'react-native';

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

  renderItem = ({ item }) => (
    <View>
      <Image 
        style={{ width: '100%', height: 200 }}
        source={{ uri: item.urlToImage }}
      />
      <Text>{ item.title }</Text>
    </View>
  )

  componentDidMount() {
    this.loadArticles();
  }

  render() {
    return (
      <FlatList 
        data = { this.state.articles }
        renderItem = { this.renderItem }
      />
    );
  }
}


export default NewsList;