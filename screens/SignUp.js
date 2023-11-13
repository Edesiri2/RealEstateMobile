import React, { useEffect, useState } from "react";
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",
          {
            method: "GET",
            headers: {
              'X-RapidAPI-Key': '733c453936msh491b5a2a3f23953p136746jsnb4794ded9d40',
              'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            },
          }
        );
        const data = await response.json();
        setPropertyData(data);
        console.log(data);

        if (response.ok) {
          console.log("success");
        } else {
          console.log("failed");
        }
      } catch (error) {
        console.error(error);
        console.log("failed");
      }
    };

    getData();
  }, []);

  return (
    <View>
      <View style={{ ...styles.centre, flexDirection: "row" }}>
        <View
          style={{
            width: 300,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 15,
            padding: 10,
            flexDirection: "row",
            gap: 20,
            margin: 20,
          }}
        >
          <Pressable>
            <AntDesign name="search1" size={24} color="black" />
          </Pressable>
          <TextInput placeholder="Search Location" />
        </View>
        <View
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 8,
            borderRadius: 10,
            backgroundColor: "black",
          }}
        >
          <Ionicons name="filter" size={24} color="white" />
        </View>
      </View>

      <View>
        <Text>{propertyData?.price}</Text>
        {/* Add additional Text components for other property data */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centre: {
    justifyContent: "center",
    alignItems: "center",
  },
});
