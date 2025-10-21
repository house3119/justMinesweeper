import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import styles from "../../assets/styles";


export default function ProfileComponent() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Text>Users Component</Text>
      <Button onPress={() => router.navigate('/user/settings')}>Settings</Button>
      <Button onPress={() => router.navigate('/user/invite')}>Invite</Button>
    </View>
  );
}

