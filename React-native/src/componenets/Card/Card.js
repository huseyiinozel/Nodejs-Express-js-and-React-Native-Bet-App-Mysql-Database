import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./Card.style";

function Card({ prop }) {
  return (
    <View style={styles.container}>
      <View style={styles.matchContainer}>
        <Text style={styles.matchText}>{prop.matchname}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.blueBox}>
            <Text style={styles.infoText}>{prop.played} kere oynandı</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Kod: {prop.code}</Text>
          <Text style={styles.infoText}>{prop.date}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.codeBox}>
            <Text style={styles.infoText}>{prop.guess}</Text>
          </View>
          <View style={styles.codeBox2}>
            <Text style={styles.infoText}>{prop.rate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Card;
