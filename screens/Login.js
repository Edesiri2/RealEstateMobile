import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#34495E" }}>
      <View style={{ ...Style.centre }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 30,
            color: "white",
          }}
        >
          Welcome Back!!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          marginTop: 150,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          padding: 20,
          height: "100%",
        }}
      >
        <TextInput placeholder="Email" style={Style.inputContainer} />
        <TextInput placeholder="Password" style={Style.inputContainer} />
        <View style={{ ...Style.centre }}>
          <Text style={{ fontSize: 20 }}>or</Text>
        </View>
        <TouchableOpacity
          style={{
            ...Style.inputContainer,
            display: "flex",
            flexDirection: "row",
            ...Style.centre,
          }}
        >
          <MaterialCommunityIcons name="google" size={24} color="blue" />
          <Text>continue with goggle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...Style.inputContainer,
            display: "flex",
            flexDirection: "row",
            ...Style.centre,
          }}
        >
          <AntDesign name="apple1" size={24} color="black" />
          <Text>continue with apple</Text>
        </TouchableOpacity>
        <View style={{ ...Style.centre, marginTop: 20, gap: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              width: 350,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 15,
              backgroundColor: "#24a0ed",
              borderRadius: 10,
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", ...Style.centre }}>
            <Text>Don't have an account?</Text>
            <Text style={{ color: "#24a0ed" }}>SignUp</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    gap: 10,
    borderRadius: 10,
    margin: 16,
  },
  centre: {
    justifyContent: "center",
    alignItems: "center",
  },
});
