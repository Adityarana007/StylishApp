import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthStackParamList } from "./types";
import SwiperScreen from "../screens/Auth/SwiperComponents/SwiperScreen";
import LoginScreen from "../screens/Auth/Login";
import SignupScreen from "../screens/Auth/Signup";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Swiper" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Swiper" component={SwiperScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
        </Stack.Navigator>
    )
};

export default AuthNavigator;