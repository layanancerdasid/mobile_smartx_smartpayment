// ProfileScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Link } from 'expo-router';
import BottomNav from '@/components/BottomNav';

// Mendapatkan dimensi layar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Interface untuk data profil
interface ProfileData {
  name: string;
  location: string;
  balance: string;
  accountInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

const ProfileScreen: React.FC = () => {
  // Data dummy profil
  const profileData: ProfileData = {
    name: 'Jonathan',
    location: 'Bandung, Indonesia',
    balance: 'Rp. 20.000.000',
    accountInfo: {
      name: 'Will Jhon',
      email: 'willjhon@gmail.com',
      phone: '0819191020',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header dengan tombol back dan notifikasi */}
        <View style={styles.header}>
          <Link href={'/dashboard'}>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
          </Link>
          <Text style={styles.headerTitle}>Profile</Text>
          <Link href={'/notification'}>
            <TouchableOpacity style={styles.notificationButton}>
              <Text>🔔</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Profil Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.profileImage}
            />
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓</Text>
            </View>
          </View>
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profileLocation}>{profileData.location}</Text>
        </View>

        {/* Balance Section */}
        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>{profileData.balance}</Text>
        </View>

        {/* Account Information Section */}
        <View style={styles.accountSection}>
          <Text style={styles.sectionTitle}>Informasi Akun</Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Nama</Text>
              <Text style={styles.infoValue}>
                {profileData.accountInfo.name}
              </Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>
                {profileData.accountInfo.email}
              </Text>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>No. Handphone</Text>
              <Text style={styles.infoValue}>
                {profileData.accountInfo.phone}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: windowWidth * 0.04,
    backgroundColor: '#ffffff',
  },
  backButton: {
    padding: windowWidth * 0.02,
  },
  backButtonText: {
    fontSize: windowWidth * 0.06,
    color: '#000',
  },
  headerTitle: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
  },
  notificationButton: {
    padding: windowWidth * 0.02,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: windowHeight * 0.03,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: windowHeight * 0.02,
  },
  profileImage: {
    width: windowWidth * 0.25,
    height: windowWidth * 0.25,
    borderRadius: (windowWidth * 0.25) / 2,
  },
  verifiedBadge: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#4169E1',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedText: {
    color: 'white',
    fontSize: 14,
  },
  profileName: {
    fontSize: windowWidth * 0.05,
    fontWeight: '600',
    marginBottom: windowHeight * 0.005,
  },
  profileLocation: {
    fontSize: windowWidth * 0.035,
    color: '#666',
  },
  balanceSection: {
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.04,
  },
  balanceLabel: {
    fontSize: windowWidth * 0.035,
    color: '#666',
    marginBottom: 4,
  },
  balanceAmount: {
    fontSize: windowWidth * 0.06,
    fontWeight: '700',
    color: '#000',
  },
  accountSection: {
    padding: windowWidth * 0.04,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
    marginBottom: windowHeight * 0.02,
  },
  infoContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: windowWidth * 0.04,
  },
  infoItem: {
    marginBottom: windowHeight * 0.02,
  },
  infoLabel: {
    fontSize: windowWidth * 0.035,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: windowWidth * 0.04,
    color: '#000',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: windowWidth * 0.04,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: windowWidth * 0.03,
    marginTop: 4,
  },
});

export default ProfileScreen;
