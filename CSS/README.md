# Modern CSS System Documentation

## Overview
Comprehensive CSS system for the Defend the Truth Ministries website with modern utilities, responsive typography, and dark/light mode support.

## Color System

### Dark Mode (Default)
```css
--color-bg: #0d1117
--color-bg-alt: #161b22
--color-surface: #1e2530
--color-text: #f5f7fa
--color-accent: #d4af37 (Gold)
```

### Light Mode Support
Automatically adapts based on `prefers-color-scheme` or can be forced with `data-theme="light"` on the root element.

### Semantic Colors
- `--color-success`: #3fb950 (Green)
- `--color-warning`: #d29922 (Orange)
- `--color-error`: #f85149 (Red)
- `--color-info`: #58a6ff (Blue)

## Typography

### Fluid Font Sizes
All font sizes use `clamp()` for responsive scaling:
- `--text-xs` through `--text-4xl`
- Automatically scales between mobile and desktop

### Font Families
- `--font-sans`: System font stack
- `--font-serif`: Georgia
- `--font-mono`: Monospace stack

## Spacing Scale

### Standard Scale (0-32)
```css
--space-0: 0
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-4: 1rem (16px)
--space-8: 2rem (32px)
--space-16: 4rem (64px)
--space-32: 8rem (128px)
```

### Legacy Spacing
Maintained for backward compatibility:
- `--space-xs`, `--space-sm`, `--space`, `--space-md`, `--space-lg`

## Utility Classes

### Spacing
```html
<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mt-8 mb-4">Margin top and bottom</div>
<div class="mx-auto">Center horizontally</div>

<!-- Padding -->
<div class="p-6">Padding all sides</div>
<div class="px-4 py-8">Padding x and y</div>
```

### Typography
```html
<p class="text-lg font-semibold text-accent">Large, bold, gold text</p>
<h2 class="text-3xl font-bold text-center">Centered heading</h2>
```

### Layout
```html
<div class="flex items-center justify-between gap-4">
  <span>Flexbox layout</span>
</div>

<div class="max-w-lg mx-auto">
  <p>Centered container with max width</p>
</div>
```

### Colors
```html
<div class="bg-surface text-muted border border-accent rounded-lg p-6">
  Card with surface background
</div>
```

### Responsive Containers
```html
<div class="max-w-sm">Small container (640px)</div>
<div class="max-w-md">Medium container (768px)</div>
<div class="max-w-lg">Large container (1024px)</div>
<div class="max-w-xl">XL container (1280px)</div>
<div class="max-w-prose">Prose width (65ch)</div>
```

## Design Tokens

### Border Radius
- `--radius-sm`: 4px
- `--radius`: 8px
- `--radius-md`: 12px
- `--radius-lg`: 18px
- `--radius-xl`: 24px
- `--radius-full`: 9999px (pill shape)

### Shadows
- `--shadow-xs` through `--shadow-lg`
- `--shadow-accent`: Gold-tinted shadow

### Transitions
- `--transition-fast`: 150ms
- `--transition-base`: 250ms
- `--transition-slow`: 350ms
- `--ease`, `--ease-in`, `--ease-out`, `--ease-in-out`

## Usage Examples

### Card Component
```html
<div class="bg-surface border rounded-lg p-6 shadow-md">
  <h3 class="text-xl font-bold mb-3">Card Title</h3>
  <p class="text-muted">Card content with muted text</p>
</div>
```

### Button Variations
```html
<button class="px-6 py-3 bg-accent text-primary rounded font-semibold transition hover:shadow-lg">
  Primary Button
</button>

<button class="px-6 py-3 border border-accent text-accent rounded font-semibold transition">
  Outline Button
</button>
```

### Responsive Grid
```html
<div class="grid gap-6">
  <!-- Mobile: 1 column, Desktop: 2+ columns (handled by responsive.css) -->
  <div class="bg-surface p-6 rounded-lg">Item 1</div>
  <div class="bg-surface p-6 rounded-lg">Item 2</div>
</div>
```

## Theme Switching

### Force Dark Mode
```html
<html data-theme="dark">
```

### Force Light Mode
```html
<html data-theme="light">
```

### Auto (System Preference)
```html
<html data-theme="auto">
<!-- or omit data-theme attribute -->
```

## Accessibility

### Screen Reader Only
```html
<span class="visually-hidden">Hidden from view, visible to screen readers</span>
<span class="sr-only">Alternative (same as visually-hidden)</span>
```

### Focus Visible
```html
<button class="focus-visible">
  Accessible focus outline
</button>
```

## Best Practices

1. **Use Utility Classes** for rapid prototyping and one-off styles
2. **Use CSS Variables** for consistent theming
3. **Combine Utilities** for complex layouts
4. **Maintain Accessibility** with semantic HTML and ARIA labels
5. **Test Both Themes** to ensure compatibility

## File Structure

- `styles.css` - Core styles, components, and utilities
- `responsive.css` - Responsive breakpoints and media queries
