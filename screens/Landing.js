import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function Landing() {
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "50%",
          borderBottomRightRadius: 30,
          backgroundColor: "#34495E",
          borderBottomLeftRadius: 30,
          ...Style.centre,
        }}
      >
        <AntDesign name="windowso" size={80} color="white" />
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
            rent
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "semi-bold",
              fontSize: 30,
            }}
          >
            ease
          </Text>
        </View>
      </View>
      <View style={{ height: "50%", alignItems: "center", gap: 20 }}>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>
            Easiest way to find a property
          </Text>
          <Text style={{ marginLeft: 30 }}>Simplify your life with us</Text>
        </View>
        <View style={{ gap: 10, marginTop: 20 }}>
          <TouchableOpacity
            style={{
              width: 350,
              ...Style.centre,
              paddingVertical: 15,
              backgroundColor: "#24a0ed",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "white" }}>continue without account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...Style.centre,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              paddingVertical: 15,
            }}
          >
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate.navigate("Login")}><Text style={{ color: "#24a0ed" }}>LogIn</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  centre: {
    justifyContent: "center",
    alignItems: "center",
  },
})