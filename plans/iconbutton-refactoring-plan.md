# IconButton Refactoring Plan

## Overview

Refactor `IconButton` to follow the Compound Component API by using `children` instead of the `icon` prop, making it consistent with the documented API and other components in the library.

## Completed Changes

### 1. Updated IconButton to use `children` instead of `icon` prop ✅

**File:** [`packages/radix-ui-themes-native/src/components/forms/IconButton.tsx`](packages/radix-ui-themes-native/src/components/forms/IconButton.tsx)

- Replaced `icon` prop with `children` prop
- Updated the interface to use `children` instead of `icon`
- Updated the rendering logic to use `children`

### 2. Updated All Usages ✅

All files have been updated to use the new `children` API:
- `apps/playground-native/app/profile/index.tsx`
- `apps/playground-native/app/demo/popover/index.tsx`
- `apps/playground-native/app/demo/text_fields/index.tsx`
- `apps/playground-native/app/demo/tooltip/index.tsx`
- `packages/radix-ui-themes-native/src/components/overlays/DropdownMenu.tsx`

---

## Additional Enhancements (New Requirements)

### 3. Add `radius` prop to IconButton

Add support for custom border radius override:

```tsx
interface IconButtonProps {
  // ... existing props
  /**
   * Border radius override
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
}
```

### 4. Add `asChild` prop to IconButton

Add support for the `asChild` pattern (similar to Radix primitives):

```tsx
interface IconButtonProps {
  // ... existing props
  /**
   * Merge props onto the child element
   */
  asChild?: boolean;
}
```

### 5. Add `size 4` to IconButton

Add a larger size option:

```tsx
// Size 4 values
{
  size: 64,
  iconSize: 28,
  borderRadius: radii.large,
}
```

### 6. Add `size 4` to Button

Add a larger size option to Button component as well.

---

## Updated Props Interface

```tsx
interface IconButtonProps {
  /**
   * Icon component to render as children
   */
  children?: React.ReactNode;
  /**
   * Style prop for the IconButton
   */
  style?: ViewStyle;
  /**
   * Button variant
   * @default 'classic'
   */
  variant?: 'classic' | 'solid' | 'soft' | 'outline' | 'ghost';
  /**
   * Color scheme for the button
   * @default undefined (uses theme's accentColor)
   */
  color?: Color;
  /**
   * Button size
   * @default 2
   */
  size?: 1 | 2 | 3 | 4;  // Added size 4
  /**
   * Border radius override
   */
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full';
  /**
   * Merge props onto the child element
   */
  asChild?: boolean;
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
  /**
   * Whether the button is in loading state
   */
  loading?: boolean;
  /**
   * Callback when button is pressed
   */
  onPress?: (event: GestureResponderEvent) => void;
  /**
   * Callback when button is long-pressed
   */
  onLongPress?: (event: GestureResponderEvent) => void;
  /**
   * Duration (in milliseconds) before onLongPress is called
   * @default 500
   */
  delayLongPress?: number;
  /**
   * Accessibility label (required for accessibility)
   */
  accessibilityLabel: string;
  /**
   * High contrast mode for accessibility
   */
  highContrast?: boolean;
}
```

## Size Values Reference

| Size | Button Size | Icon Size | Border Radius |
|------|-------------|-----------|---------------|
| 1    | 32px        | 16px      | small         |
| 2    | 40px        | 20px      | medium        |
| 3    | 56px        | 24px      | medium        |
| 4    | 64px        | 28px      | large         |

## Files to Modify

1. **IconButton Component:**
   - `packages/radix-ui-themes-native/src/components/forms/IconButton.tsx`

2. **Button Component:**
   - `packages/radix-ui-themes-native/src/components/forms/Button.tsx`

3. **Documentation:**
   - `docs/components/forms/icon-button.mdx`
   - `docs/components/forms/button.mdx`

## Testing Checklist

- [ ] All variants work correctly (classic, solid, soft, outline, ghost)
- [ ] All sizes work correctly (1, 2, 3, 4)
- [ ] Color prop works correctly
- [ ] Radius prop works correctly
- [ ] asChild prop works correctly
- [ ] Loading state displays correctly
- [ ] Disabled state works correctly
- [ ] High contrast mode works correctly
- [ ] Accessibility label is properly set
- [ ] DropdownMenu trigger still works
- [ ] All demo screens render correctly
