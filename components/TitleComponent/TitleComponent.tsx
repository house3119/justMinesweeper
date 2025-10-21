import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from 'expo-router';
import titleComponentStyles from "./titleComponentStyles";
import styles from "../../assets/styles";


export default function TitleComponent() {
  const router = useRouter();

  return (
    <View style={titleComponentStyles.container}>
      <Text style={styles.h1}>Title Component</Text>
      <Button onPress={() => router.navigate('/game')}>Play</Button>
    </View>
  );
}

