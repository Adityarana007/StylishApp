import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AppStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Tabs">
     <Stack.Screen
        name="Tabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
        </Stack.Navigator>
    )
};

export default AppNavigator;