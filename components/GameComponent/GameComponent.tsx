import { View, Text } from "react-native";
import gameComponentStyles from "./gameComponentStyles";


export default function GameComponent() {
  return (
    <View style={gameComponentStyles.container}>
      <Text>Game Component</Text>
    </View>
  );
}
