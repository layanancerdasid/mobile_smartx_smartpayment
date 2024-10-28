import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useRouter, Redirect } from 'expo-router';
import { useEffect } from 'react';

export default function HomeScreen() {
  return <Redirect href={'/onboarding1'} />;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
