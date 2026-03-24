# Skills Section - Animation Specifications & Timing Guide

## Overview
This document details every animation in the Skills section with timing parameters, easing functions, and visual effects.

---

## 1. SCROLL PROGRESS INDICATOR

### Animation: Progress Bar Fill
**Element**: `.scroll-progress-indicator`
- **Duration**: Continuous (linked to scroll)
- **Animation Type**: Scale transform from left
- **Direction**: Left to right
- **Easing**: Linear (scroll-linked)
- **Property**: scaleX from 0 to 1
- **Origin**: left

**Visual Effect**:
```
Start: ░░░░░░░░░░░░░░░░░░░░ (0% complete)
Mid:   ████████░░░░░░░░░░░░ (40% complete)
End:   ████████████████████ (100% complete)
```

---

## 2. TITLE ANIMATIONS

### Animation 2.1: Title Opacity & Position
**Element**: `.title-wrapper` (motion.div)
**Trigger**: Scroll into view
- **Opacity**: From 0 → 1
  - Duration: 0.3s (scroll-linked)
  - Easing: Linear
- **Y Position**: From 30px → 0px
  - Duration: 0.3s (scroll-linked)
  - Easing: Linear

**Timing**:
- Starts: When section enters viewport
- Completes: First 30% of section scroll

### Animation 2.2: Gradient Text Animation
**Element**: `.title-text`
**Animation Name**: `gradientShift`
- **Duration**: 8s
- **Iteration**: Infinite
- **Easing**: ease
- **Property**: background-position

**Keyframes**:
```
0%:   background-position: 0% 50%
50%:  background-position: 100% 50%
100%: background-position: 0% 50%
```

**Visual Effect**: Smooth color sweep across text (Blue → Purple → Pink → Amber → Blue)

---

## 3. CATEGORY CARD ANIMATIONS

### Animation 3.1: Category Entrance
**Element**: `.skill-category-wrapper` (motion component)
**Type**: Staggered entrance

**Stagger Config**:
- Base delay: `index * 0.1s`
- Category 1: 0s delay
- Category 2: 0.1s delay
- Category 3: 0.2s delay
- Category 4: 0.3s delay

**Properties Animated**:
```javascript
hidden:  { opacity: 0, y: 40 }
visible: { opacity: 1, y: 0 }

Transition: {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  delay: delayFactor
}
```

**Visual Effect**: Cards slide up and fade in sequentially with spring bounce

### Animation 3.2: Category Card Hover Scale
**Element**: `.category-header`
**Trigger**: Mouse hover
- **Translation**: Y: -4px
- **Duration**: 0.4s
- **Easing**: cubic-bezier(0.34, 1.56, 0.64, 1)
- **Property**: transform

**Visual Effect**: Subtle lift animation with slight overshoot

### Animation 3.3: Category Header Glow on Hover
**Element**: `.category-header`
**Trigger**: Mouse hover
**Duration**: 0.4s

**Changes**:
```css
/* On Hover */
background: linear-gradient(135deg, 
  rgba(59, 130, 246, 0.15) 0%, 
  rgba(139, 92, 246, 0.1) 100%);
backdrop-filter: blur(30px);
border-color: rgba(255, 255, 255, 0.2);
box-shadow: 0 20px 60px [category-color]40
```

### Animation 3.4: Category Icon Hover Effect
**Element**: `.category-icon`
**Trigger**: Mouse hover
**Duration**: 0.3s

**Transforms**:
- Scale: 1 → 1.2
- Rotate: 0 → 10°

**Easing**: spring (stiffness: 200)

### Animation 3.5: Category Chevron Rotation
**Element**: `.category-chevron`
**Trigger**: Click (expand/collapse)
**Duration**: 0.3s

**Animation**:
```javascript
rotate: isExpanded ? 180 : 0
```

**Visual Effect**: Arrow points down (collapsed) ↓ or up (expanded) ↑

### Animation 3.6: Floating Background Shapes
**Element**: `.shape` (inside category header)
**Duration**: 6-8s per shape
**Type**: Infinite loop

**Shape 1 Animation**:
```javascript
animate={{
  y: [0, -15, 0],
  rotate: [0, 45, 0],
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

**Shape 2 Animation**:
```javascript
animate={{
  y: [0, 15, 0],
  rotate: [0, -45, 0],
}}
transition={{
  duration: 8,
  repeat: Infinity,
  ease: 'easeInOut',
  delay: 0.5,
}}
```

**Visual Effect**: Subtle floating and rotating shapes behind category text

---

## 4. SKILL CARD ANIMATIONS

### Animation 4.1: Skill Card Entrance (Staggered)
**Element**: `.skill-card-wrapper` (motion component)
**Type**: Viewport-based animation

**Stagger Config**:
```javascript
visible: (custom) => ({
  transition: {
    delay: custom * 0.1  // custom = index
  }
})
```

**Properties Animated**:
```javascript
hidden:  { opacity: 0, y: 20 }
visible: { 
  opacity: 1, 
  y: 0,
  transition: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    delay: index * 0.1
  }
}
```

**Timing**:
- Card 1: 0s delay
- Card 2: 0.1s delay
- Card 3: 0.2s delay
- etc.
- Total entrance time: ~0.7s (last card)

**Visual Effect**: Cards slide up and fade in with spring bounce, with staggered timing

### Animation 4.2: Skill Card Hover (Combined Effects)
**Element**: `.skill-card-wrapper` (whileHover)
**Trigger**: Mouse hover

**Properties**:
```javascript
whileHover={{
  y: -8,
  scale: 1.05,
  rotateZ: index % 2 === 0 ? 2 : -2,
}}
```

**Duration**: 0.3s (default Framer Motion)
**Visual Effect**: Card lifts up, scales slightly, and tilts ±2° for 3D feel

### Animation 4.3: Skill Icon Container
**Element**: `.skill-card-icon`
**Trigger**: Parent card hover

**Properties**:
```javascript
whileHover={{
  rotate: 360,
  scale: 1.15,
}}
transition={{ duration: 0.6, ease: 'easeInOut' }}
```

**Visual Effect**: Icon spins full 360° while scaling up

### Animation 4.4: Skill Card Glow Effect
**Element**: `.skill-card-glow`
**Trigger**: Card hover
**Duration**: 0.3s

**Animation**:
```css
opacity: 0 → 0.1
background: radial-gradient(circle at center, var(--category-color), transparent)
```

**Visual Effect**: Radial glow expands from center in category color

### Animation 4.5: Skill Name Color Change
**Element**: `.skill-card-name`
**Trigger**: Card hover
**Duration**: 0.3s

**Changes**:
```css
color: #e2e8f0 → var(--category-color)
font-weight: 600 → 700
```

**Visual Effect**: Name changes color to category and becomes bolder

### Animation 4.6: Accent Line Scaling
**Element**: `.skill-card-accent`
**Trigger**: Card hover
**Duration**: 0.3s

**Animation**:
```javascript
scaleX: 0.6 → 1
width: 30px → 50px (visual impression)
```

**Visual Effect**: Accent line under name grows and scales

### Animation 4.7: Particle Floating
**Element**: `.particle` (inside skill card)
**Trigger**: Card hover
**Type**: Infinite loop

**Animation Per Particle**:
```javascript
animate={{
  y: [0, -20, 0],
  opacity: [0.6, 1, 0.6],
}}
transition={{
  duration: 3 + i,  // Staggered: 3s, 4s, 5s
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

**Visual Effect**: Small particles float upward with pulsing opacity while card is hovered

---

## 5. BACKGROUND & ENVIRONMENT ANIMATIONS

### Animation 5.1: Blob Float Animation
**Element**: `.blob` (blob-1, blob-2, blob-3)
**Type**: Infinite loop
**Animation Name**: `float`

**Keyframes**:
```css
0%: transform: translate(0, 0)
25%: transform: translate(20px, -20px)
50%: transform: translate(0, 30px)
75%: transform: translate(-30px, -10px)
100%: transform: translate(0, 0)
```

**Blob Specific Timings**:
| Blob | Duration | Delay | Size |
|------|----------|-------|------|
| blob-1 | 20s | 0s | 300px |
| blob-2 | 25s | -5s | 400px |
| blob-3 | 30s | -10s | 350px |

**Visual Effect**: Organic floating motion with various speeds creating depth perception

**Properties**:
```css
filter: blur(60px)
mix-blend-mode: screen
opacity: 0.15
```

### Animation 5.2: Orb Float Animation
**Element**: `.orb` (orb-blue, orb-purple, orb-green)
**Type**: Infinite loop
**Animation Name**: `orbFloat`

**Keyframes**:
```css
0%, 100%: transform: translate(0, 0) scale(1)
50%: transform: translate(50px, 50px) scale(1.1)
```

**Orb Specific Timings**:
| Orb | Duration | Delay | Size |
|-----|----------|-------|------|
| orb-blue | 15s | 0s | 400px |
| orb-purple | 20s | -5s | 500px |
| orb-green | 25s | -10s | 350px |

**Visual Effect**: Smooth breathing/pulsing motion with subtle movement

**Properties**:
```css
filter: blur(80px)
mix-blend-mode: color-dodge
opacity: 0.08
```

---

## 6. EXPAND/COLLAPSE ANIMATION

### Animation 6.1: Skills Grid Expand
**Element**: `.skills-cards-grid` / `.skills-grid`
**Trigger**: Category header click
**Type**: Layout animation

**Properties Animated**:
```javascript
height: auto (collapsed) → auto (expanded)
opacity: 0 → 1
```

**Duration**: 0.3s (with 0.1s delay)
**Easing**: Default Framer Motion easing

**Visual Effect**: Smooth expand animation revealing skill cards below

### Animation 6.2: Expand Hint Floating
**Element**: `.category-expand-hint`
**Type**: Continuous
**Trigger**: Category not expanded

**Animation**:
```javascript
animate={{ y: [0, 5, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

**Visual Effect**: Text pulses up and down gently, inviting interaction

---

## 7. THEME TRANSITION ANIMATIONS

### Animation 7.1: Color Transition on Theme Change
**Element**: All themed elements (*)
**Duration**: 0.3s
**Easing**: ease

**Properties Animated**:
```css
background-color
color
border-color
```

**Visual Effect**: Smooth color scheme transition between light and dark modes

---

## 8. RESPONSIVE BREAKPOINT ANIMATIONS

### Mobile Animations (< 768px)
- Reduced blur: 15px instead of 30px
- Smaller particle count
- Faster animations (reduced duration by 20%)
- Opacity reduced on background elements

### Tablet Animations (768px - 1024px)
- Medium blur: 20px
- Standard animation durations
- Opacity at 0.1

### Desktop Animations (> 1024px)
- Full blur: 30px
- Complete particle effects
- Full opacity on backgrounds

---

## 9. ACCESSIBILITY CONSIDERATIONS

### Prefers-Reduced-Motion Media Query
Users with `prefers-reduced-motion: reduce` see:
- All animations: 0.01ms (effectively instant)
- No transition delays
- Smooth scroll disabled
- Only structural layout changes visible

---

## 10. PERFORMANCE METRICS

### Animation Performance Target
- **Frame Rate**: 60 FPS on desktop
- **GPU Acceleration**: 100% transform-based
- **Paint Time**: < 100ms per frame
- **Composite Time**: < 50ms per frame

### Optimizations Applied
1. Transform-only animations (no layout triggers)
2. Backdrop-filter applied selectively
3. Will-change hints (implicit via Framer Motion)
4. Z-index layering to avoid stacking context issues
5. Pointer-events: none on background elements

---

## 11. ANIMATION CHEAT SHEET

### Quick Reference Table

| Animation | Duration | Easing | Trigger | Properties |
|-----------|----------|--------|---------|------------|
| Title entrance | 0.3s | Linear | Scroll | opacity, y |
| Title gradient | 8s | ease | Continuous | bg-position |
| Category entrance | Spring | Spring | InView | opacity, y |
| Category hover | 0.4s | cubic-bezier | Hover | transform |
| Card entrance | Spring | Spring | InView | opacity, y |
| Card hover | 0.3s | Default | Hover | y, scale, rotate |
| Icon rotate | 0.6s | easeInOut | Hover | rotate |
| Blob float | 20-30s | easeInOut | Continuous | x, y |
| Orb float | 15-25s | easeInOut | Continuous | x, y, scale |
| Progress bar | Linked | Linear | Scroll | scaleX |

---

## 12. CSS ANIMATION VALUES QUICK COPY

### For Custom Theming:
```css
/* Adjust blur amounts */
backdrop-filter: blur(20px); /* Standard */
backdrop-filter: blur(30px); /* Maximum */
backdrop-filter: blur(10px); /* Minimal */

/* Adjust animation speeds */
animation-duration: 15s; /* Faster */
animation-duration: 25s; /* Slower */

/* Adjust opacities */
opacity: 0.1; /* Subtle */
opacity: 0.15; /* Moderate */
opacity: 0.2; /* Prominent */
```

---

**Document Version**: 1.0  
**Last Updated**: 2026-03-22  
**Animation Framework**: Framer Motion v10+
