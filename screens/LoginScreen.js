import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const { login } = useAuth(); // Sử dụng AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && password === '123456') {
      console.log('Đăng nhập thành công!');
      const userData = { username: 'Admin', email };
      login(userData); // Cập nhật trạng thái đăng nhập
    } else {
      alert('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password here!"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => console.log('Forgot Password?')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signupText}>
        Not yet a member?{' '}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#f39c12',
    marginBottom: 20,
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: '#aaa',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginHorizontal: 10,
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
  },
  signupLink: {
    color: '#f39c12',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
