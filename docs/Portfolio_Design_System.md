---
name: Jason Taylor Portfolio Design System
colors:
  surface: '#FFFFFF'
  surface-dim: '#dad9e4'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fe'
  surface-container: '#eeedf8'
  surface-container-high: '#e8e7f3'
  surface-container-highest: '#e2e1ed'
  on-surface: '#1a1b23'
  on-surface-variant: '#444654'
  inverse-surface: '#2f3039'
  inverse-on-surface: '#f1effb'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2d50d9'
  primary: '#2a4dd7'
  on-primary: '#ffffff'
  primary-container: '#4868f1'
  on-primary-container: '#fffbff'
  inverse-primary: '#b9c3ff'
  secondary: '#5b5f62'
  on-secondary: '#ffffff'
  secondary-container: '#dde0e4'
  on-secondary-container: '#5f6367'
  tertiary: '#954500'
  on-tertiary: '#ffffff'
  tertiary-container: '#bb5800'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#001257'
  on-primary-fixed-variant: '#0034c0'
  secondary-fixed: '#e0e3e7'
  secondary-fixed-dim: '#c3c7cb'
  on-secondary-fixed: '#181c1f'
  on-secondary-fixed-variant: '#43474b'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb68a'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#743500'
  background: '#F7F8FA'
  on-background: '#1a1b23'
  surface-variant: '#e2e1ed'
  text-primary: '#111827'
  text-secondary: '#667085'
  accent-hover: '#3E59D9'
  border-subtle: '#E5E7EB'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  section-padding: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

# Jason Taylor Portfolio — Google Stitch Design Package

This package reflects the updated style direction: light-theme-first, premium product minimal, clean and modern with subtle personality.

## Brand & Style

This design system is built for a professional portfolio that balances technical rigor with modern approachability. It follows a **Premium Product Minimalist** archetype, drawing inspiration from the clarity of Apple, the calm structure of Notion, and the refined utility of Linear. 

The aesthetic is characterized by a "light-mode-first" philosophy, emphasizing heavy whitespace, structured layouts, and high-quality typography over decorative elements. 

## Layout & Spacing

The layout philosophy is built on a **fixed-width grid** with generous whitespace to ensure the content feels calm and breathable.

- **Grid:** A standard 12-column grid is used for the container, but most content (especially text and lists) should be left-aligned to reflect a structured, logical flow.
- **Spacing:** Use a consistent 8px base unit. Section vertical padding should be significant (80px+) to allow the "premium" nature of the design to breathe.
- **Project Cards:** Featured project cards should span significant portions of the grid (e.g., 6 or 12 columns) to emphasize importance.

## Elevation & Depth

This design system uses **low-contrast outlines** and **tonal layers** rather than heavy shadows to create depth.

- **Surfaces:** Depth is communicated by placing pure white (`#FFFFFF`) cards or sections on top of the slightly darker background (`#F7F8FA`).
- **Borders:** Subtle, 1px solid borders (`#E5E7EB`) are the primary method of defining container boundaries. 
- **Shadows:** If shadows are used, they must be extremely diffused and low-opacity (ambient shadows), appearing only on hover to provide tactile feedback.

## Components

### Buttons
- **Primary:** Solid accent fill (`#4F6EF7` / primary) with white text. High contrast, rounded corners.
- **Secondary:** Subtle neutral tint with primary text. No border or very faint border.
- **Text Link:** Understated accent color with a subtle bottom border or hover transition.

### Project Cards
- **Structure:** Large, white containers with 16px rounded corners and a 1px border. 
- **Content:** Headline (H3), short summary (Body-MD), and a metadata row for tags.
- **Interactions:** Subtle lift or border color change on hover.
