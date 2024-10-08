import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { fetchAllNews } from '@/api/fetchAllnews';
import { useQuery, useQueryClient } from '@tanstack/react-query';
interface NewsItem {
  ID: number;
  TimeStamp: string;
  Heading: string;
  News: string;
  isActive: boolean;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString.replace(/\//g, '-'));
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date).toUpperCase();
};

const LatestNew: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const queryClient = useQueryClient();

const {data} = useQuery({
  queryKey: ['latestNews'],
  queryFn: fetchAllNews,
  refetchOnWindowFocus: false,
});

const NewsData = data?.DataModel || [];

  const handlePress = (item: NewsItem) => {
    setSelectedNews(item);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest News</Text>

      <FlatList
        data={NewsData }
        horizontal
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.card}>
              <Text style={styles.heading} numberOfLines={2} ellipsizeMode="tail">
                {item.Heading}
              </Text>
              <Text style={styles.news} numberOfLines={2} ellipsizeMode="tail">
                {item.News}
              </Text>
              <Text style={styles.timestamp}>{formatDate(item.TimeStamp)}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />

      {selectedNews && (
        <Modal
          visible={true}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeading}>{selectedNews.Heading}</Text>
              <Text style={styles.modalNews}>{selectedNews.News}</Text>
              <Text style={styles.modalTimestamp}>{formatDate(selectedNews.TimeStamp)}</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'medium',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContent: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginRight: 10,
    width: 350,
    height: 150, // Adjusted height
    marginVertical: 10,
    overflow: 'hidden', // Hide overflow content
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // Android Shadow
    elevation: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    width:250,
    marginBottom: 5,
  },
  news: {
    fontSize: 14,
    fontWeight: '400',
    width:270,
    marginBottom: 10,
  },
  timestamp: {
    position: 'absolute',
    right: 10,
    backgroundColor: 'black',
    width: 60,
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalNews: {
    fontSize: 16,
    marginBottom: 15,
  },
  modalTimestamp: {
    fontSize: 14,
    color: 'gray',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LatestNew;
