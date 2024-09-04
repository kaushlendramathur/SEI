import PdfViewer from '@/components/PdfViewer'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native'


const data = [
  {
    id: '1',
    formId: 'KOL/FORM/2018/0086411',
    date: '2023-09-01',
    pdfUrl: 'http://www.example.com/sample.pdf',
  },
  {
    id: '2',
    formId: 'KOL/FORM/2018/0086412',
    date: '2023-09-02',
    pdfUrl: 'http://www.example.com/sample2.pdf',
  },
  // Add more rows here
]

const MyCourses = () => {
  const [selectedPdf, setSelectedPdf] = useState<string>("")

  const handleViewClick = (pdfUrl:string) => {
    setSelectedPdf(pdfUrl)
  }

  const renderRow = ({ item }: { item: any }) => (
    <View style={styles.row}>
      <Text style={styles.idCell}>{item.id}</Text>
      <Text style={styles.formIdCell}>{item.formId}</Text>
      <Text style={styles.dateCell}>{item.date}</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => handleViewClick(item.pdfUrl)}
      >
       <FontAwesomeIcon icon={faEye} />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      {selectedPdf ? (
        <View style={styles.pdfContainer}>
          <Button title='Go Back' onPress={() => setSelectedPdf('')} />
          <PdfViewer uri={selectedPdf} />
        </View>
      ) : (
        <>
          <View style={styles.tableHeader}>
            <Text style={styles.idCell}>ID</Text>
            <Text style={styles.formIdCell}>Admission Form ID</Text>
            <Text style={styles.dateCell}>Date</Text>
            <Text style={styles.viewButton}>View</Text>
          </View>

          <FlatList
            data={data}
            renderItem={renderRow}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white',
    paddingHorizontal:20
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  idCell: {
    flex: 1,
    width: '10%',
    textAlign: 'center',
  },
  formIdCell: {
    flex: 5,
    width: '50%',
  },
  dateCell: {
    flex: 3,
    width: '30%',
    textAlign: 'center',
  },
  viewButton: {
    flex: 1,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfContainer: {
    flex: 1,
    marginTop: 20,
  },
  pdf: {
    flex: 1,
  },
})

export default MyCourses