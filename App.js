import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Attributes"
          component={AttributesScreen}
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
