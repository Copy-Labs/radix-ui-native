import { Box, Flex, SegmentedControl, ThemeProvider } from '@radix-ui/themes-native';
import { useState } from 'react';

export default function SegmentedControlDemo() {
  const [sg, setSg] = useState<string>('1');

  return (
    <ThemeProvider
      mode={'light'}
      themeOptions={{ accentColor: 'blue', radius: 'medium', scaling: 1 }}
    >
      <Flex direction={'column'} gap={12} padding={12} align={'center'} justify={'center'}>
        <Box padding={12}>
          <SegmentedControl
            value={sg}
            onValueChange={(value: string) => setSg(value)}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
            disabled={false}
            // highContrast={false}
          />
        </Box>

        {/* Size 1 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl
            value={sg}
            onValueChange={(value: string) => setSg(value)}
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'carrot', label: 'Carrot' },
            ]}
            disabled={false}
            size={1}
          />
        </Box>

        {/* Size 2 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl
            value={sg}
            onValueChange={(value: string) => setSg(value)}
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'carrot', label: 'Carrot' },
            ]}
            disabled={false}
            size={2}
          />
        </Box>

        {/* Size 3 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl
            variant={'soft'}
            radius={'large'}
            value={sg}
            onValueChange={(value: string) => setSg(value)}
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'carrot', label: 'Carrot' },
            ]}
            disabled={false}
            size={3}
          />
        </Box>

        {/* Size 4 - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl
            radius={'full'}
            value={sg}
            onValueChange={(value: string) => setSg(value)}
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'carrot', label: 'Carrot' },
            ]}
            disabled={false}
            size={4}
          />
        </Box>

        {/* Colors - Segmented Control */}
        <Box padding={12}>
          <SegmentedControl
            color={'grass'}
            radius={'full'}
            value={sg}
            onValueChange={(value: string) => setSg(value)}
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'carrot', label: 'Carrot' },
            ]}
            disabled={false}
          />
        </Box>

        <Box padding={12}>
          <SegmentedControl
            color={'blue'}
            radius={'large'}
            value={sg}
            onValueChange={(value: string) => setSg(value)}
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'carrot', label: 'Carrot' },
            ]}
            disabled={false}
          />
        </Box>
      </Flex>
    </ThemeProvider>
  );
}
