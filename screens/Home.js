import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  const [propertyData, setPropertyData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://bayut.p.rapidapi.com/properties/detail?externalID=4937770",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "733c453936msh491b5a2a3f23953p136746jsnb4794ded9d40",
              "X-RapidAPI-Host": "bayut.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        setPropertyData(data);
        console.log(data.photos[2].url);
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
      <View style={{ ...style.centre, flexDirection: "row" }}>
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
      <View style={{ flexDirection: "row", gap: 20, marginHorizontal: 20, justifyContent:"center", alignItems:"center" }}>
       <Pressable>
       <Image style={{ height: 170, width: 170, borderRadius: 10  }} source={{uri: propertyData?.photos[0].url}}/>
        <Text style={{ fontSize: 20, color: "black", marginLeft:40 }}>Miami</Text>
       </Pressable>
       <Pressable>
       <Image style={{ height: 170, width: 170, borderRadius: 10  }} source={{uri: propertyData?.photos[2].url}}/>
        <Text style={{ fontSize: 20, color: "black",marginLeft:40 }}>Las Vegas</Text>
       </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  centre: {
    justifyContent: "center",
    alignItems: "center",
  },
});
