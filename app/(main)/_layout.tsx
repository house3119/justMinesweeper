import { Tabs } from "expo-router";


export default function MainLayout() {

  return (
    <Tabs>
      <Tabs.Screen
        name="game"
        options={{
          headerShown: false,
          title: 'Game'
        }}
      />
      <Tabs.Screen
        name="highScores"
        options={{
          headerShown: false,
          title: 'High Scores'
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerShown: false,
          title: 'Profile'
        }}
      /> 

    </Tabs>
  );
}