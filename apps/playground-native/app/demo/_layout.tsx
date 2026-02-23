import { Stack } from 'expo-router';
import { ThemeProvider } from '@radix-ui/themes-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DemoScreen() {
  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'indigo', radius: 'medium', scaling: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{
          headerShown: false,
          contentStyle: { flex: 1 },
          gestureEnabled: true,
          headerBackButtonDisplayMode: "default",
        }}>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  )
}
