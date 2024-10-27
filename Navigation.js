import { NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TP1Stack from "./screens/Tabs/TP1Stack";

const tab = createBottomTabNavigator()

function TabGroup() {
  return (
    <tab.Navigator>
      {/* <tab.Screen name="Home" component={Home} /> */}
      <tab.Screen name="Exercícios" component={TP1Stack} />
    </tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
  );
}