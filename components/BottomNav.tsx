import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function BottomNav() {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem}>
        <Text>🏠</Text>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text>📊</Text>
        <Text style={styles.navText}>History</Text>
      </TouchableOpacity>
      <Link href={'/profile'}>
        <TouchableOpacity style={styles.navItem}>
          <Text>⚙️</Text>
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: windowWidth * 0.04,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: (windowWidth * 0.1) / 2,
    marginRight: 10,
  },
  greeting: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
  },
  notificationButton: {
    padding: 8,
  },
  bannerContainer: {
    padding: windowWidth * 0.04,
  },
  bannerImage: {
    width: '100%',
    height: windowHeight * 0.2,
    borderRadius: 12,
  },
  section: {
    padding: windowWidth * 0.04,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.045,
    fontWeight: '600',
    marginBottom: 15,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionItem: {
    alignItems: 'center',
    width: windowWidth * 0.25,
  },
  actionIcon: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionIconText: {
    fontSize: windowWidth * 0.06,
  },
  actionText: {
    fontSize: windowWidth * 0.035,
  },
  servicesScroll: {
    flexDirection: 'row',
  },
  serviceItem: {
    alignItems: 'center',
    marginRight: 20,
    width: windowWidth * 0.15,
  },
  serviceIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  activeService: {
    backgroundColor: '#4169E1',
  },
  serviceIconText: {
    fontSize: windowWidth * 0.05,
  },
  serviceText: {
    fontSize: windowWidth * 0.03,
    textAlign: 'center',
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  viewAll: {
    color: '#4169E1',
    fontSize: windowWidth * 0.035,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: '#e8f5e9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionType: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  transactionDesc: {
    fontSize: windowWidth * 0.035,
    color: '#666',
  },
  transactionAmount: {
    fontSize: windowWidth * 0.04,
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

export default BottomNav;
