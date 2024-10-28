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

// Mendapatkan dimensi layar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

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
        <Text style={styles.loginTitle}>Create your Account</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
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

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            value={confPassword}
            onChangeText={setConfPassword}
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

        <View style={styles.termsContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() =>
              setFormData({
                ...formData,
                agreeToTerms: !formData.agreeToTerms,
              })
            }
          >
            <View
              style={[
                styles.checkboxInner,
                formData.agreeToTerms && styles.checkboxChecked,
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.termsText}>
            agree with <Text style={styles.termsLink}>Terms & Conditions</Text>
          </Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.regiterButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already Have Account? </Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign In</Text>
          </TouchableOpacity>
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
  regiterButton: {
    backgroundColor: '#4169E1',
    borderRadius: 8,
    padding: windowHeight * 0.015,
    alignItems: 'center',
    marginBottom: windowHeight * 0.015,
  },
  registerButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
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
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
  checkboxChecked: {
    backgroundColor: '#4285f4',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#4285f4',
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    color: '#fff',
  },
  termsLink: {
    color: '#4285f4',
  },
});

export default LoginScreen;
