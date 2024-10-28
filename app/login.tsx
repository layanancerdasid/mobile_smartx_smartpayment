import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import { Link } from 'expo-router';

// Mendapatkan dimensi layar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SCCIC</Text>
          <Text style={styles.subLogoText}>
            SMART CITY & COMMUNITY{'\n'}INNOVATION CENTER
          </Text>
        </View>

        {/* Login Form */}
        <Text style={styles.loginTitle}>Login to Your Account</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#666"
        />

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#666"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Text style={styles.eyeIconText}>👁</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <Link href={'/dashboard'} style={styles.loginButton}>
          <TouchableOpacity style={{ width: '100%', margin: 'auto' }}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </Link>

        {/* Forget Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget Password ?</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Login */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991147.png',
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
              }}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Link href={'/register'}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2230',
  },
  loginContainer: {
    flex: 1,
    padding: windowWidth * 0.05,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: windowHeight * 0.04,
  },
  logoText: {
    color: 'white',
    fontSize: windowWidth * 0.08,
    fontWeight: 'bold',
  },
  subLogoText: {
    color: 'white',
    fontSize: windowWidth * 0.025,
    textAlign: 'center',
    marginTop: 5,
  },
  loginTitle: {
    color: 'white',
    fontSize: windowWidth * 0.055,
    marginBottom: windowHeight * 0.03,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: windowHeight * 0.015,
    marginBottom: windowHeight * 0.015,
    fontSize: windowWidth * 0.04,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: windowHeight * 0.02,
  },
  passwordInput: {
    flex: 1,
    padding: windowHeight * 0.015,
    fontSize: windowWidth * 0.04,
  },
  eyeIcon: {
    padding: windowHeight * 0.015,
    justifyContent: 'center',
  },
  eyeIconText: {
    fontSize: windowWidth * 0.04,
  },
  loginButton: {
    backgroundColor: '#4169E1',
    borderRadius: 8,
    padding: windowHeight * 0.015,
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  loginButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    textAlign: 'center',
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#666',
    textAlign: 'center',
    fontSize: windowWidth * 0.035,
    marginBottom: windowHeight * 0.02,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: windowHeight * 0.02,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#666',
  },
  dividerText: {
    color: '#666',
    paddingHorizontal: 10,
    fontSize: windowWidth * 0.035,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: windowHeight * 0.03,
  },
  socialButton: {
    marginHorizontal: 10,
  },
  socialIcon: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: '#666',
    fontSize: windowWidth * 0.035,
  },
  signupLink: {
    color: '#4169E1',
    fontSize: windowWidth * 0.035,
  },
});

export default LoginScreen;
