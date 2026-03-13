import React from 'react';
import { View, TextInput, Image,  } from 'react-native';
import photos from '../assets/photos';
import { styles } from '../utils/Styles';
import Colors from '../utils/Colors';

export default function TopHeader({ searchQuery, setSearchQuery, onSearch }) {
  return (
    <View style={styles.searchBarContainer}>
      <Image
        source={photos.mealify_icon}
        style={styles.logo}
        resizeMode="cover"
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a recipe..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={onSearch}
        returnKeyType="search"
        placeholderTextColor={Colors.secondary_color}
      />
    </View>
  );
}

