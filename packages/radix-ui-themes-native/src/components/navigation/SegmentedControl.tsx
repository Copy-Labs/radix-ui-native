import React, { type ReactNode } from 'react';
import { StyleSheet, type StyleProp, ViewStyle } from 'react-native';
import { View, TouchableOpacity } from '../primitives';
import { Text } from '../typography';
import { useTheme, useThemeMode } from '../../hooks/useTheme';
import { getGrayAlpha, getVariantColors } from '../../theme/color-helpers';
import { Color, RadiusSize } from '../../theme';

interface SegmentedControlOption {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface SegmentedControlProps {
  /**
   * Current selected value
   */
  value: string;
  /**
   * Callback when value changes
   */
  onValueChange: (value: string) => void;
  /**
   * Array of options
   */
  options: SegmentedControlOption[];
  /**
   * Color scheme for the badge
   * @default undefined (uses theme's accentColor)
   */
  color?: Color;
  /**
   * Radius variant mode for accessibility
   * @default 'medium'
   */
  radius?: RadiusSize;
  /**
   * Segmented control size
   * @default 2
   */
  size?: 1 | 2 | 3 | 4;
  /**
   * Custom style
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Whether the control is disabled
   */
  disabled?: boolean;
  /**
   * High contrast mode for accessibility
   */
  highContrast?: boolean;
}

const SegmentedControl = ({
  value,
  onValueChange,
  options,
  color,
  radius = 'medium',
  size = 3,
  style,
  disabled = false,
  highContrast = false,
}: SegmentedControlProps) => {
  const theme = useTheme();
  const mode = useThemeMode();
  const isDark = mode === 'dark';
  const grayScale = isDark ? theme.colors.gray.dark : theme.colors.gray;
  const grayAlpha = getGrayAlpha(theme);
  const activeColor = color || theme.accentColor;
  // const radii = theme.radii;
  const radii = theme.radii[radius] ?? theme.radii.medium;
  const selectedRadius = radius || theme.radius;
  const solidVariant = 'solid';
  const softVariant = 'soft';
  const solidVariantColors = getVariantColors(theme, activeColor, mode, solidVariant, highContrast);
  const softVariantColors = getVariantColors(theme, activeColor, mode, softVariant, highContrast);

  // Get size values
  const getSizeValues = () => {
    switch (size) {
      case 1:
        return {
          height: 32,
          fontSize: theme.typography.fontSizes[1].fontSize,
          paddingHorizontal: theme.space[2],
        };
      case 2:
        return {
          height: 36,
          fontSize: theme.typography.fontSizes[2].fontSize,
          paddingHorizontal: theme.space[3],
        };
      case 4:
        return {
          height: 56,
          fontSize: theme.typography.fontSizes[4].fontSize,
          paddingHorizontal: theme.space[5],
        };
      case 3:
      default:
        return {
          height: 44,
          fontSize: theme.typography.fontSizes[3].fontSize,
          paddingHorizontal: theme.space[4],
        };
    }
  };

  const sizeValues = getSizeValues();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color ? softVariantColors.backgroundColor : grayAlpha['3'],
          borderRadius: radii,
          height: sizeValues.height,
        },
        style,
      ]}
      accessibilityRole="radiogroup"
    >
      {options.map((option, index) => {
        const isSelected = value === option.value;
        const isFirst = index === 0;
        const isLast = index === options.length - 1;

        const optionStyle: ViewStyle = {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          paddingHorizontal: sizeValues.paddingHorizontal,
          backgroundColor: isSelected
            ? (color ? solidVariantColors.backgroundColor : theme.colors.gray['1'])
            // (isDark ? grayAlpha['5'] : grayAlpha['4'])
            : 'transparent',
          borderWidth: isSelected ? 0.5 : 0,
          borderColor: isSelected ? theme.colors.gray['8'] : 'transparent',
          // borderRadius: isFirst
          //   ? radii
          //   : isLast
          //   ? radii
          //   : 0,
          borderRadius: selectedRadius === 'full' ? 9999 : radii,
          // marginLeft: isFirst ? 0 : -radii / 2,
          // marginRight: isLast ? 0 : -radii / 2,
        };

        const handlePress = () => {
          if (!disabled) {
            onValueChange(option.value);
          }
        };

        return (
          <TouchableOpacity
            key={option.value}
            style={optionStyle}
            onPress={handlePress}
            disabled={disabled}
            accessibilityRole="radio"
            accessibilityState={{ checked: isSelected, disabled }}
          >
            {option.icon && (
              <View style={{ marginRight: theme.space[2] }}>{option.icon}</View>
            )}
            <Text
              style={{
                // color: isSelected
                //   ? grayScale[12]
                //   : grayAlpha['10'],
                color: color ? (isSelected ? solidVariantColors.textColor : softVariantColors.textColor) : (isSelected ? grayScale[12] : grayAlpha[10]),
                fontWeight: isSelected ? '600' : '400',
                fontSize: sizeValues.fontSize,
              }}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

SegmentedControl.displayName = 'SegmentedControl';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
  },
});

export { SegmentedControl };
export type { SegmentedControlProps, SegmentedControlOption };
