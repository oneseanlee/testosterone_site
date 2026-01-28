

# Testimonials Section Implementation Plan

## Overview
Create a new `TestimonialsSection` component featuring 6 testimonial cards in a 3-column grid layout (2 rows), placed immediately after the StatsSection ("Improved testosterone or you don't pay").

---

## Design Specifications

Based on the uploaded reference images, each testimonial card will feature:

- **Background**: Full-bleed grayscale photo of the person
- **Floating quote card**: White/cream rounded card with:
  - 5 gold star rating icons at the top
  - Quote text in dark serif/sans font
  - Avatar thumbnail (circular, small)
  - Name in bold
  - Credential/title below name
  - Verified badge (blue checkmark) where applicable

---

## Testimonial Data

| Name | Quote | Credential | Has Verified Badge |
|------|-------|------------|-------------------|
| Kerry Reyes | "I've competed at the highest level. NHTO helped restore energy without hormones." | Former California Championships - NPC, MiddleWeight, 1st | Yes (@kerryreyesfiteness) |
| Sean Lee | "I was skeptical of anything 'non-hormonal,' but NHTO surprised me. I feel sharper, more driven, and balanced without the risks I was worried about." | @oneseanlee | Yes |
| Darren Lopez | "Our goal was simple: create a solution that truly helps people reclaim their energy, resilience, and confidence by optimizing health at the cellular level." | Co-Founder | No |
| Dan Schmidt | "I'm proud to help build a system that combines the latest science with real-world results--empowering everyone to achieve peak cellular health." | Co-Founder | No |
| Brett Earnshaw | "My testosterone went from 658 to 749 in two months--more energy, sharper focus, better performance. This system changed my life." | Early Tester | No |
| Mike VanDyke | "I experienced rapid improvements in energy and cellular performance. It's a game-changer for anyone serious about health." | Early Tester | No |

---

## File Changes

### 1. Create `src/components/TestimonialsSection.tsx` (New File)

**Component Structure:**
```text
TestimonialsSection
  - Container with consistent horizontal padding (px-4 md:px-[7.8125vw])
  - Optional section heading (e.g., "Real Results from Real Men")
  - 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
  - 6 TestimonialCard components
```

**Card Component Structure:**
```text
TestimonialCard
  - Outer container: aspect-square, rounded-2xl, overflow-hidden, relative
  - Background image: grayscale filter, object-cover, full size
  - Floating quote card: absolute positioned, white bg, rounded-xl, shadow
    - Star rating row (5 filled gold stars using lucide-react Star icon)
    - Quote text
    - User info row: avatar + name + credential + optional verified badge
```

### 2. Copy Uploaded Images to `public/testimonials/`

The 6 uploaded images will be saved as:
- `/testimonials/kerry-reyes.png`
- `/testimonials/sean-lee.png`
- `/testimonials/darren-lopez.png`
- `/testimonials/dan-schmidt.png`
- `/testimonials/brett-earnshaw.png`
- `/testimonials/mike-vandyke.png`

### 3. Update `src/App.tsx`

Add the import and place the component after StatsSection:

```text
Current order:
  StatsSection
  UsageSection

New order:
  StatsSection
  TestimonialsSection  <-- NEW
  UsageSection
```

---

## Styling Details

**Colors (matching existing theme):**
- Navy text: `text-navy` (#001A40)
- Primary blue: `text-primary` (#0044CC)
- Gold stars: `text-amber-400` or `#F5A623`
- Quote card background: `bg-white/95` or `bg-gray-50`

**Typography:**
- Quote: `text-lg font-medium text-gray-800`
- Name: `text-xl font-bold text-gray-900`
- Credential: `text-sm text-gray-600`

**Layout:**
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card aspect ratio: approximately square or 4:5
- Floating card position varies per image (some left, some right aligned)

**Responsive Behavior:**
- Mobile: Single column, stacked cards
- Tablet (768px+): 2-column grid
- Desktop (1024px+): 3-column grid

---

## Technical Notes

1. **Star Rating Component**: Use lucide-react `Star` icon with `fill="currentColor"` for solid gold stars

2. **Grayscale Effect**: Apply `filter grayscale` class to background images

3. **Verified Badge**: Use a simple blue circle with white checkmark (can use lucide-react `CheckCircle2` or custom SVG)

4. **Image Optimization**: Since images are already AVIF/PNG, they'll load efficiently. Consider adding `loading="lazy"` for below-the-fold images

5. **Accessibility**: Include proper `alt` text for all images describing the person

---

## Expected Result

A visually striking testimonials section with 6 cards arranged in a 3x2 grid on desktop, featuring grayscale background photos with overlaid white quote cards. The section will provide strong social proof immediately after the testosterone results claims, reinforcing credibility before the usage and comparison sections.

