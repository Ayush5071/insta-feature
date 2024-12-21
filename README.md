# Story Viewer Application

This project is a lightweight story viewer implementation using JavaScript, which mimics features of popular social media story viewers. It displays a set of profile pictures, and clicking on any picture opens the associated story in full-screen for a brief duration.

## Features

- **Dynamic Rendering:** Automatically renders a collection of profile pictures (DPs) from a predefined array.
- **Full-Screen Story View:** Clicking on a profile picture displays the corresponding story in full screen.
- **Auto-Hide Stories:** The full-screen story view automatically hides after 2 seconds.

## How It Works

1. The `arr` array contains objects, each with:
   - A profile picture URL (`dp`).
   - An associated story URL (`story`).
2. Profile pictures are dynamically displayed inside the `storian` div.
3. An event listener is added to capture click events on the profile pictures.
4. The clicked picture displays its associated story as a full-screen background.
5. The story is auto-hidden after 2 seconds using `setTimeout`.

### Key Code Snippets

- **Profile Pictures Rendering:**
   ```javascript
   arr.forEach((elem, idx) => {
       clutter += `<div class="story">
       <img id="${idx}" src="${elem.dp}" alt="">
       </div>`;
   });
   storian.innerHTML = clutter;
