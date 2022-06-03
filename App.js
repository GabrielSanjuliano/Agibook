import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/components/Home";
import { Money } from "./src/components/Money";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Attributes"
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
          name="Attributes"
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
