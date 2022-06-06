import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Home } from "./src/components/Home";
import { Money } from "./src/components/Money";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="book-medical" size={25} />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Money"
          component={Money}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="book-medical" size={25} />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
