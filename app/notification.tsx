// NotificationScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Link } from 'expo-router';

// Mendapatkan dimensi layar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Interface untuk notifikasi
interface Notification {
  id: string;
  type: 'payment' | 'request' | 'alert';
  message: string;
  amount?: string;
  from?: string;
  image?: string;
  date: string;
  hasAction?: boolean;
}

const NotificationScreen: React.FC = () => {
  // Data dummy notifikasi
  const notifications: { today: Notification[]; thisWeek: Notification[] } = {
    today: [
      {
        id: '1',
        type: 'payment',
        message: 'You received a payment',
        amount: 'Rp. 500.000',
        from: 'David John',
        image: 'https://via.placeholder.com/40',
        date: 'Today',
      },
      {
        id: '2',
        type: 'request',
        message: 'request a payment',
        amount: 'Rp. 20.000',
        from: 'Avian Rizky',
        image: 'https://via.placeholder.com/40',
        date: 'Today',
      },
    ],
    thisWeek: [
      {
        id: '3',
        type: 'alert',
        message: 'Your monthly expense almost break the budget',
        date: 'This Week',
      },
      {
        id: '4',
        type: 'payment',
        message: 'You received a payment',
        amount: 'Rp. 100.000',
        from: 'David John',
        image: 'https://via.placeholder.com/40',
        date: 'This Week',
      },
      {
        id: '5',
        type: 'request',
        message: 'request a payment',
        amount: 'Rp. 30.000',
        from: 'David John',
        image: 'https://via.placeholder.com/40',
        date: 'This Week',
        hasAction: true,
      },
      {
        id: '6',
        type: 'payment',
        message: 'You received a payment',
        amount: 'Rp. 45.000',
        from: 'David John',
        image: 'https://via.placeholder.com/40',
        date: 'This Week',
      },
    ],
  };

  // Komponen untuk item notifikasi
  const NotificationItem: React.FC<{ notification: Notification }> = ({
    notification,
  }) => {
    return (
      <View style={styles.notificationItem}>
        {notification.type === 'alert' ? (
          <View style={[styles.notificationIcon, styles.alertIcon]}>
            <Text>⚠️</Text>
          </View>
        ) : (
          <Image
            source={{ uri: notification.image }}
            style={styles.userImage}
          />
        )}

        <View style={styles.notificationContent}>
          <View style={styles.notificationHeader}>
            {notification.from && (
              <Text style={styles.userName}>{notification.from} </Text>
            )}
            <Text style={styles.notificationMessage}>
              {notification.message}
              {notification.amount && ` of ${notification.amount}`}
            </Text>
          </View>
          {notification.hasAction && (
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Do it</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Link href={'/dashboard'}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Image
          source={{ uri: 'https://via.placeholder.com/32' }}
          style={styles.profileImage}
        />
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.scrollView}>
        {/* Today's Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today</Text>
          {notifications.today.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </View>

        {/* This Week's Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This Week</Text>
          {notifications.thisWeek.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>📊</Text>
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>⚙️</Text>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  profileImage: {
    width: windowWidth * 0.08,
    height: windowWidth * 0.08,
    borderRadius: (windowWidth * 0.08) / 2,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    padding: windowWidth * 0.04,
  },
  sectionTitle: {
    fontSize: windowWidth * 0.04,
    fontWeight: '600',
    marginBottom: windowHeight * 0.02,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.02,
    padding: windowWidth * 0.03,
  },
  userImage: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: (windowWidth * 0.1) / 2,
    marginRight: windowWidth * 0.03,
  },
  notificationIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    borderRadius: (windowWidth * 0.1) / 2,
    backgroundColor: '#f8d7da',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: windowWidth * 0.03,
  },
  alertIcon: {
    backgroundColor: '#fff3cd',
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationHeader: {
    flex: 1,
  },
  userName: {
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
  },
  notificationMessage: {
    fontSize: windowWidth * 0.035,
    color: '#666',
  },
  actionButton: {
    backgroundColor: '#4169E1',
    paddingHorizontal: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.01,
    borderRadius: 5,
    marginLeft: windowWidth * 0.02,
  },
  actionButtonText: {
    color: 'white',
    fontSize: windowWidth * 0.035,
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

export default NotificationScreen;
