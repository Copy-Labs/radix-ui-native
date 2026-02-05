import { Avatar, Button, Flex, Heading, ThemeProvider } from '@radix-ui/themes-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text } from 'react-native';

export default function Screen() {
  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'blue', radiusFactor: 1, scaling: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Heading size={4}>Avatars</Heading>

        <Flex gap={2}>
          <Avatar variant="solid" fallback="A" size={8} />
          <Avatar variant="soft" fallback="A" />
        </Flex>

        <Flex direction={'column'} align="flex-start" gap={8} padding={8}>
          <Avatar
            size={1}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={2}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={3}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={4}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={5}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={6}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={7}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={8}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar
            size={9}
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
        </Flex>
      </ScrollView>
    </ThemeProvider>
  );
}
