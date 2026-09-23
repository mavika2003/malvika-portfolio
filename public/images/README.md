# Portfolio Images

## Adding LinkedIn post images

1. **Download images from your LinkedIn posts**
   - Go to [linkedin.com/in/malvikasawant](https://www.linkedin.com/in/malvikasawant)
   - Open a post and right-click the image → "Save image as..."
   - Save to `public/images/linkedin/`

2. **Name your images** (optional - update `lib/gallery-data.ts` if you use different names):
   - `post-1.jpg` - First gallery image
   - `post-2.jpg` - Second gallery image
   - `post-3.jpg` - Third gallery image
   - ... and so on up to `post-6.jpg`

3. **Update captions** in `lib/gallery-data.ts` to match each image's context

4. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`

## Project images (for Projects section)

Add project screenshots from your LinkedIn posts to `public/images/projects/`:

- `salary-prediction.jpg` - Salary Prediction Platform
- `attendance-system.jpg` - Smart Attendance System  
- `renewable-energy.jpg` - Renewable Energy AI research

The Projects section will display these when present; otherwise it shows the default gradient icons.
