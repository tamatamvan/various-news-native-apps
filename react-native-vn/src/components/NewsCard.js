import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';

const NewsCard = ({ article }) => (
  <View style={ styles.container }> 
    <Image 
      style={ styles.image }
      source={{ uri: article.urlToImage }}
    />
    <Text style={ styles.title }>{ article.title }</Text>
    <TouchableOpacity style={ styles.readMoreBtn }
      onPress={ () => Linking.openURL(article.url) }
    >
      <Text style={ styles.readMoreTxt }>Read More</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 8,
    elevation: 2,
  },
  image: { 
    width: '100%', 
    height: 200, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
  },
  readMoreBtn: {
    backgroundColor: '#2962FF',
    padding: 8,
  },
  readMoreTxt: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default NewsCard;