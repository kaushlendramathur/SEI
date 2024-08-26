import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const data = {
    title: "Helping Seafarers Thrive, Not Just Survive",
    items:[
        {
            title: "Learning - Blended to Perfection",
            subtitle: "Mix of self-paced, interactive and applied learning – better experience, better results.",
            icon: require("@/assets/images/homeIcon1.png")
        },{
            title: "Validated & Certified",
            subtitle: "Curriculum developed by renowned experts and aligned with 40+ accreditation bodies.",
            icon: require("@/assets/images/homeIcon2.png")
        },{
            title: "Achieve Your Dreams",
            subtitle: "Over 1,000,000 careers fast-tracked. Curriculum developed by renowned experts and aligned with 40+ accreditation bodies.",
            icon: require("@/assets/images/homeIcon3.png")
        },
    ] 
}

const SectionB = () => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{data.title}</Text>
       <View style={styles.itemsContainer}>
          {data.items.map((item, index) => {
            return (
              <View key={index} style={styles.itemContainer}>
                <Image source={item.icon} style={styles.itemImg} />
                <View style={styles.itemText}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSubTitle}>{item.subtitle}</Text> 
                </View>
              </View>
            )
          })}
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1B1F',
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemsContainer: {
        alignItems: 'flex-start',
        padding: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemImg: {
        marginRight: 10,
        width: 50,
        height: 50, 
        resizeMode: 'contain', 
    },
    itemText: {
        flexShrink: 1, // Allow text to shrink if needed
    },
    itemTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemSubTitle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'justify'
    },
});

export default SectionB;
