import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Home } from "./src/components/Home";
import { Money } from "./src/components/Money";
import { User } from "./src/components/User";
import { theme } from "./src/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="user-plus" color={theme.colors.dark} size={25} />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="home" size={25} color={theme.colors.dark} />
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
                <Icon name="money-bill-wave" size={25} color={theme.colors.dark} />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
