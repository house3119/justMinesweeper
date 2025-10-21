import { Tabs } from "expo-router";


export default function MainLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="game"
        options={{
          title: 'Game'
        }}
      />
      <Tabs.Screen
        name="highScores"
        options={{
          title: 'High Scores'
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'User'
        }}
      />
    </Tabs>
  );
}