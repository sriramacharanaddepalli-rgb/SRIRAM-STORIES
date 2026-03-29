# SRIRAM STORIES

A professional, high-performance web portal for showcasing cinematic scripts, fictional universes, and creative narratives. Designed for clarity, responsiveness, and a premium user experience.

## 🚀 Features
- **Cinematic Dark Theme:** Optimized for long-form reading and visual storytelling.
- **Dynamic Content Engine:** Project cards are generated via JavaScript for easy updates.
- **Interactive Modals:** Detailed story breakdowns without leaving the main page.
- **Mobile First:** Fully responsive layout for all screen sizes.

## 📁 File Structure
- `index.html`: Core structure and navigation.
- `style.css`: Professional UI/UX styles and animations.
- `script.js`: Logical engine for rendering story data.
- `LICENSE`: Open-source MIT distribution rights.

## 🛠️ Usage
To add your own stories:
1. Open `script.js`.
2. Locate the `projects` array.
3. Add your title, short summary, and full details within the empty strings:
   ```javascript
   {
       title: "Your Story Name",
       short: "One-line hook.",
       details: "Full script or plot breakdown."
   }