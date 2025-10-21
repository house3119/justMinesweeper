import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function UserLayout() {
  const user = true;

  return (
    <Stack>
      <Stack.Screen name="index" options={user? { title: 'Profile' } : { headerShown: false }} />
      <Stack.Screen name="invite" options={{ title: 'Invite' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
    </Stack>
  );
}