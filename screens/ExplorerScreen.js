import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Import icons

const categories = [
  { id: '1', name: 'Pizza', image: require('../assets/pizza.png') },
  { id: '2', name: 'Burgers', image: require('../assets/burger.png') },
  { id: '3', name: 'Steak', image: require('../assets/steak.png') },
];

const popularItems = [
  { id: '1', name: 'Food 1', price: '$1', image: require('../assets/food1.png') },
  { id: '2', name: 'Food 2', price: '$3', image: require('../assets/food2.png') },
];

const ExplorerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.header}>Explorer</Text>

      {/* Ô tìm kiếm */}
      <View style={styles.searchContainer}>
        <Ionicons name="location-outline" size={20} color="#888" />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for meals or area"
          keyboardType="default"
        />
        <Feather name="search" size={20} color="#888" />
      </View>

      {/* Danh mục phổ biến */}
      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Feather name="filter" size={18} color="#ff9900" />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Sản phẩm phổ biến */}
      <View style={styles.row}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    height: 40,
  },
  searchBar: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#ff9900',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  popularItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  popularImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  popularText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularPrice: {
    fontSize: 14,
    color: '#00aaff',
  },
});

export default ExplorerScreen;
