import {
  Badge,
  Flex,
  ThemeProvider,
  Heading,
  TextField,
  TextArea,
  Box,
  Text,
  Card,
} from '@radix-ui/themes-native';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function TextFields() {
  const [textValue, setTextValue] = useState<string>('text example text');

  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'blue', radius: 'medium', scaling: 1 }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <Flex direction={'column'} gap={24} padding={16}>
            <Box>
              <Heading size={6}>Text Field</Heading>
              <Text color={'gray'} size={4}>
                Captures user input with an optional slot for buttons and icons.
              </Text>
            </Box>

            <Card radius={'large'} size={2} variant={'surface'}>
              <Flex direction={'column'} gap={12} padding={12}>
                <TextField label={'Email'} placeholder={'Your email address'} size={'2'} />
              </Flex>
            </Card>

            {/* Sizes */}
            <Flex direction={'column'} gap={12}>
              <Heading>Sizes</Heading>
              <Flex direction="column" gap={12}>
                <Box maxWidth={200}>
                  <TextField size="1" placeholder="Search the docs…" />
                </Box>
                <Box maxWidth={250}>
                  <TextField size="2" placeholder="Search the docs…" />
                </Box>
                <Box maxWidth={300}>
                  <TextField size="3" placeholder="Search the docs…" />
                </Box>
              </Flex>
            </Flex>

            {/* Variants */}
            <Flex direction={'column'} gap={12}>
              <Heading>Variants</Heading>
              <TextField placeholder={'Outline size 3 input'} size={'2'} variant={'outline'} />
              <TextField placeholder={'Soft size 3 input'} size={'2'} variant={'soft'} />
              <TextField placeholder={'Surface size 3 input'} size={'2'} variant={'surface'} />
            </Flex>

            {/* Colors */}
            <Flex direction="column" gap={12}>
              <Heading>Colors</Heading>
              <TextField color="indigo" variant="soft" placeholder="Search the docs…" />
              <TextField color="green" variant="soft" placeholder="Search the docs…" />
              <TextField color="red" variant="soft" placeholder="Search the docs…" />
            </Flex>

            {/* Radius */}
            <Flex direction="column" gap={12}>
              <Heading>Radius</Heading>
              <Flex direction="column" gap={12}>
                <TextField radius="none" placeholder="Search the docs…" />
                <TextField radius="large" placeholder="Search the docs…" />
                <TextField radius="full" placeholder="Search the docs…" />
              </Flex>
            </Flex>

            {/* Error State */}
            <Flex direction="column" gap={12}>
              <Heading>Error State</Heading>
              <TextField
                value={textValue}
                onChangeText={setTextValue}
                placeholder={'Default placeholder'}
                variant="soft"
                size={'2'}
                disabled={false}
                error={"Error occurred"}
                multiline={false}
                // numberOfLines={3}
                accessibilityLabel={''}
                secureTextEntry={false}
                // highContrast={boolean}
              />
            </Flex>
          </Flex>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}
