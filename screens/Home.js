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
  const [propertyData, setPropertyData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4 ",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "733c453936msh491b5a2a3f23953p136746jsnb4794ded9d40",
              "X-RapidAPI-Host": "bayut.p.rapidapi.com",
            },
          }
        );
        setIsLoading(true)
        const data = await response.json();
        setPropertyData(data);
        console.log(data);
        setIsLoading(false)
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
    <>
    {isLoading === false ? (
      <View>
      {propertyData?.hits?.map((item, index) => (
        
          <Text key={index}>{item.id} - {item.title}</Text>
        )
      )}
      
    </View>
    ):(
      <View>
        <Text>Loading</Text>
      </View>
    )

    }
    </>
    
  );
}

const style = StyleSheet.create({
  centre: {
    justifyContent: "center",
    alignItems: "center",
  },
});
