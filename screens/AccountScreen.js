import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const AccountScreen = () => {
  const auth = useAuth();
  if (!auth) {
    return <Text>Loading...</Text>;
  }

  const { user, logout } = auth;

  return (
    <View style={styles.container}>
      {/* Header màu xanh */}
      <View style={styles.header} />

      {/* Ảnh đại diện */}
      <Image source={require('../assets/pizza.png')} style={styles.avatar} />

      {/* Thông tin tài khoản */}
      <View style={styles.profileContainer}>
        <Text style={styles.name}>{user?.username || 'Quang Nguyen'}</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.bio}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>

        {/* Nút Sign Out */}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    backgroundColor: '#00aaff',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Bo tròn ảnh
    borderWidth: 3,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: -50, // Kéo ảnh lên gần header
  },
  profileContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    color: '#00aaff',
    marginVertical: 5,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  logoutButton: {
    backgroundColor: '#ffa500', // Màu cam giống ảnh
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountScreen;
