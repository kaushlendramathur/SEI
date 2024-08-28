import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

interface NewsItem {
  ID: number;
  TimeStamp: string;
  Heading: string;
  News: string;
  isActive: boolean;
}

const data: NewsItem[] = [
  {
      "ID": 1291,
      "TimeStamp": "2024/06/14",
      "Heading": "SPECIAL PACKAGE FOR JULY \u0026 AUGUST-2024",
      "News": "SPECIAL PACKAGE FOR JULY \u0026 AUGUST-2024                              HURRY UP                           ASM+SMS ONLY RS. 24,999/-",
      "isActive": true
  },
  {
      "ID": 1292,
      "TimeStamp": "2024/06/14",
      "Heading": "SPECIAL PACKAGE FOR JULY \u0026 AUGUST-2024",
      "News": "MEO I + DECGS ONLY RS.13,499/-",
      "isActive": true
  },
  {
      "ID": 1293,
      "TimeStamp": "2024/06/14",
      "Heading": "SPECIAL PACKAGE FOR JULY \u0026 AUGUST-2024",
      "News": "ASM ONLY- RS.11,000/-                 MEO I ONLY- RS.11,000/-",
      "isActive": true
  },
  {
      "ID": 1290,
      "TimeStamp": "2023/06/26",
      "Heading": "GMDSS-GOC",
      "News": "BOOK YOUR SEATS NOW.\nCOURSE WILL BE COMMENCED FROM \n\n(06-JUN-24),\n\n(04-JUL-24),\n\n(01-AUG-24),\n\n(05-SEP-24),\n\n(03-OCT-24),\n\n(01-NOV-24),\n\n(02-DEC-24)",
      "isActive": true
  },
  {
      "ID": 1288,
      "TimeStamp": "2023/03/13",
      "Heading": "VACANCIES-ENGINEERING \u0026 NAUTICAL FACULTY at FARIDABAD.",
      "News": "VACANCIES-ENGINEERING \u0026 NAUTICAL FACULTY at FARIDABAD.\n\nQualifications and Experience: Chief Engineer or Captain with at least 1 yr. Rank experience on different types of ships (LNG/LPG/Tankers)",
      "isActive": true
  },
  {
      "ID": 1287,
      "TimeStamp": "2022/08/18",
      "Heading": "Electronic Chart Display and Information Systems (ECDIS)",
      "News": "ECDIS START FROM EVERY MONDAY. BOOK YOUR SEAT NOW.",
      "isActive": true
  },
  {
      "ID": 1286,
      "TimeStamp": "2022/07/20",
      "Heading": "VACANCIES-ENGINEERING \u0026 NAUTICAL FACULTY at FARIDABAD.",
      "News": "Qualifications and Experience: Chief Engineer  or Captain with at least 1 yr. Rank experience on different types of ships (LNG/LPG/Tanker) \u0026 2 to 3 years in ship operation, experience in teaching.",
      "isActive": true
  },
  {
      "ID": 1283,
      "TimeStamp": "2022/06/09",
      "Heading": "Now Fee ₹20,000 (KOLKATA)",
      "News": "CHIEF MATE PHASE - I   STARTING FROM 15th  OF EVERY MONTH. ONLY FEW SEATS LEFT . BOOK YOUR SEAT NOW.",
      "isActive": true
  },
  {
      "ID": 1284,
      "TimeStamp": "2022/06/09",
      "Heading": "Now Fee ₹20,000 (KOLKATA)",
      "News": "CHIEF MATE PHASE - II   STARTING FROM 15th  OF EVERY MONTH. ONLY FEW SEATS LEFT . BOOK YOUR SEAT NOW.",
      "isActive": true
  },
  {
      "ID": 1285,
      "TimeStamp": "2022/06/09",
      "Heading": "Now (SMS) Fee ₹ 18,000 (KOLKATA)",
      "News": "SMS (SHIP MANEUVERING SIMULATOR) COURSE  START EVERY WEEK MONDAY.\nBOOK YOUR SEATS NOW.",
      "isActive": true
  }
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString.replace(/\//g, '-'));
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date).toUpperCase();
};

const LatestNew: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

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
        data={data}
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
