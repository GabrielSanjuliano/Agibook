import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Home } from "./src/components/Home";
import { Lending } from "./src/components/Lending";
import { User } from "./src/components/User";
import { theme } from "./src/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{ colors: theme.colors.brand }}
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          // tabBarLabel: { color: theme.colors.brand },
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: theme.colors.brand },
        }}
      >
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: () => (
              <>
                <Icon name="user-plus" color={theme.colors.white} size={25} />
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
                <Icon name="home" size={25} color={theme.colors.white} />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Lending"
          component={Lending}
          options={{
            tabBarIcon: () => (
              <>
                <Icon
                  name="money-bill-wave"
                  size={25}
                  color={theme.colors.white}
                />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
