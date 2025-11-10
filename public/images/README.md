# Images Directory

This directory is for storing the Unsplash illustration for the services section.

## Option 1: Using Direct Unsplash URL (Recommended)

1. Visit: https://unsplash.com/illustrations/Jvdsvw6zuAU
2. Right-click on the image and select "Copy image address" or "Copy image URL"
3. Open `src/components/Services.tsx`
4. Replace the `serviceIconUrl` variable with the copied URL

Example:
```typescript
const serviceIconUrl = 'https://images.unsplash.com/photo-xxxxx...'
```

## Option 2: Using Local Image

1. Visit: https://unsplash.com/illustrations/Jvdsvw6zuAU
2. Click the download button
3. Save the image as `service-icon.svg` (or the format provided by Unsplash)
4. Place it in this directory (`public/images/`)
5. The component will automatically use it from `/images/service-icon.svg`

## Note

The Services component is already configured to use the image. Just follow one of the options above.

