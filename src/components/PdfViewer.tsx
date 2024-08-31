import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Pdf from 'react-native-pdf'

const PdfViewer = () => {
  const PdfResource = { uri: 'https://www.termsfeed.com/public/uploads/2021/12/sample-terms-conditions-agreement.pdf', cache: true }

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={PdfResource}
        style={styles.pdf}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default PdfViewer