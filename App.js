import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"
import Login from "./screens/Login"
import SignUp from "./screens/SignUp"
import Landing from "./screens/Landing"
import Home from "./screens/Home"	
export default function App(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Landing" component = {Landing}/>
                <Stack.Screen name = "Login" component = {Login}/>
                <Stack.Screen name = "SignUp" component = {SignUp}/>
                <Stack.Screen name = "Home" component = {Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
