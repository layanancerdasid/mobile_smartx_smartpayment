// App.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';
import BottomNav from '@/components/BottomNav';

// Mendapatkan dimensi layar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Tipe data untuk transaksi
interface Transaction {
  id: string;
  type: string;
  description: string;
  amount: string;
  date: string;
}

// Tipe data untuk quick action
interface QuickAction {
  id: string;
  title: string;
  icon: string;
}

// Tipe data untuk layanan
interface Service {
  id: string;
  title: string;
  icon: string;
}

const HomeScreen: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'Transfer',
      description: 'Transfer ke Fuad',
      amount: 'Rp. 100.000',
      date: '2024-02-20',
    },
    {
      id: '2',
      type: 'QR Bayar',
      description: 'Pembayaran QR',
      amount: 'Rp. 100.000',
      date: '2024-02-19',
    },
    {
      id: '3',
      type: 'Transfer',
      description: 'Transfer ke Budi',
      amount: 'Rp. 100.000',
      date: '2024-02-18',
    },
  ];

  const quickActions: QuickAction[] = [
    { id: '1', title: 'Transfer', icon: '🔄' },
    { id: '2', title: 'Scan QR', icon: '📱' },
    { id: '3', title: 'Bank to Bank', icon: '🏦' },
  ];

  const services: Service[] = [
    { id: '1', title: 'e-Wallet', icon: '💰' },
    { id: '2', title: 'Transactions', icon: '📊' },
    { id: '3', title: 'Transfer', icon: '↗️' },
    { id: '4', title: 'Redeem', icon: '🎁' },
    { id: '5', title: 'Scan', icon: '📷' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={{ uri: 'https://via.placeholder.com/40' }}
              style={styles.profileImage}
            />
            <Text style={styles.greeting}>Hello, Will John!</Text>
          </View>
          <Link href={'/notification'}>
            <TouchableOpacity style={styles.notificationButton}>
              <Text>🔔</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Banner Image */}
        <View style={styles.bannerContainer}>
          <Image
            source={require('@/assets/images/itb_screen.png')}
            style={styles.bannerImage}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            {quickActions.map((action) => (
              <TouchableOpacity key={action.id} style={styles.quickActionItem}>
                <View style={styles.actionIcon}>
                  <Text style={styles.actionIconText}>{action.icon}</Text>
                </View>
                <Text style={styles.actionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Services</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.servicesScroll}
          >
            {services.map((service) => (
              <TouchableOpacity key={service.id} style={styles.serviceItem}>
                <View
                  style={[
                    styles.serviceIcon,
                    service.id === '4' && styles.activeService,
                  ]}
                >
                  <Text style={styles.serviceIconText}>{service.icon}</Text>
                </View>
                <Text style={styles.serviceText}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Transaction History */}
        <View style={styles.section}>
          <View style={styles.transactionHeader}>
            <Text style={styles.sectionTitle}>Transaction History</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionLeft}>
                <View style={styles.transactionIcon}>
                  <Text>🔄</Text>
                </View>
                <View>
                  <Text style={styles.transactionType}>{transaction.type}</Text>
                  <Text style={styles.transactionDesc}>
                    {transaction.description}
                  </Text>
                </View>
              </View>
              <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            </View>
          ))}
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

export default HomeScreen;
