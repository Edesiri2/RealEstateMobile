import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"
import Login from "../screens/Login"
import SignUp from "../screens/SignUp"
import Landing from "../screens/Landing"

export default function Stack(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Landing" component = {Landing}/>
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "SignUp" component = {SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}