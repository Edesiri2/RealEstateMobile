import { View, Text, TextInput, TouchableOpacity,StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";
import SignUpvalidationSchema from "../validation/SignUpvalidationSchema";

export default function SignUp() {
  return (
    <Formik
      initialValues={{ email: "", password: "", phoneNumber: "", state: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={SignUpvalidationSchema}
    >
      {({ errors, handleChange, handleSubmit, values }) => (
        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#34495E", height: "100%" }} >
          <View style={{backgroundColor:"white",borderRadius:20, paddingHorizontal:20, height:"80%", paddingVertical:60}} >
          <View style={{justifyContent:"center",alignItems:"center",marginTop:20, marginBottom:20}}><Text style={{fontSize:20,fontWeight:"bold"}}>Sign Up</Text></View>
            <View>
              <TextInput
                style={style.TextInputStyle }
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
              />
              <Text style={{ color: "red" }}>{errors.email}</Text>
            </View>
            <View>
              <TextInput
              style={style.TextInputStyle }
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange("password")}
              />
              <Text style={{ color: "red" }}>{errors.password}</Text>
            </View>
            <View>
              <TextInput
              style={style.TextInputStyle }
                placeholder="Phone Number"
                value={values.phoneNumber}
                onChangeText={handleChange("phoneNumber")}
              />
              <Text style={{ color: "red" }}>{errors.phoneNumber}</Text>
            </View>
            <View>
              <TextInput
              style={style.TextInputStyle }
                placeholder="State"
                value={values.state}
                onChangeText={handleChange("state")}
              />
              <Text style={{ color: "red" }}>{errors.state}</Text>
            </View>
           
           <TouchableOpacity style={{justifyContent:"center",alignItems:"center",height:45, marginTop:20, backgroundColor:"#24a0ed",padding:10, borderRadius:10}} onPress={handleSubmit}>
              <Text>Submit</Text>
            </TouchableOpacity>
           
          </View>
        </View>
      )}
    </Formik>
  );
}

const style = StyleSheet.create({
  TextInputStyle: {
    padding: 10, width: 300, height: 45,borderRadius: 10, borderColor: "gray", borderWidth: 1
  }
})