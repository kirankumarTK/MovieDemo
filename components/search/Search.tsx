import React, {Fragment, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from '../../styles/appStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {searchMovieTV} from '../../api_services/callAPI';
import MovieListItem from '../MovieListItem';

const Search = ({navigation}) => {
  const [value, onChangeText] = useState('');
  const [resultArray, setArray] = useState();

  const onSearch = (query: String) => {
      searchMovieTV(query, 'movie').then(response => {
      setArray(response);
    });
  };
  return (
    <Fragment>
      <SafeAreaView>
        <View style={[styles.row_container]}>
          <View style={styles.form}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={40}
              onChangeText={text => onChangeText(text)}
              placeholder="Search....."
              placeholderTextColor={'gray'}
              value={value}
              style={[styles.text_input, styles.app_text_color]}
            />
          </View>

          <TouchableOpacity
            onPress={() => onSearch(value)}
            style={styles.margin_style}>
            <Icon name="search" size={30} color={'gray'} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.listView}
          horizontal={false}
          numColumns={3}
          data={resultArray}
          renderItem={({item}) => (
            <MovieListItem navigation={navigation} movieList={item} />
          )}
        />
      </SafeAreaView>
    </Fragment>
  );
};

export default Search;
