import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Button, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          source={require('@/assets/images/bg-onboarding.png')}
          style={styles.image}
        />
        <Text
          style={{
            marginTop: '100%',
            marginLeft: '5%',
            color: 'whitesmoke',
            fontSize: 42,
            fontWeight: 100,
            letterSpacing: 3,
            fontFamily: 'Montserrat',
          }}
        >
          Manage Your Payments with
          <Text style={{ color: '#456EFE' }}> ganesha point</Text>
        </Text>
        <Text style={{ padding: 22, color: '#8E949A' }}>
          A convenient way to manage your money securely from mobile device.
        </Text>
        <Link href={'/onboarding2'}>
          <View style={styles.buttonAlign}>
            <Pressable style={styles.button}>
              <Text style={styles.text}>Next</Text>
            </Pressable>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#23303B',
    height: '100%',
    maxHeight: '100%',
  },
  content: {
    flexGrow: 1,
    width: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    position: 'absolute',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#206fb3',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonAlign: {
    width: '100%',
    paddingHorizontal: 16,
  },
});
