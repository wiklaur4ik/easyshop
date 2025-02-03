// Initialize Fabric.js canvas
const canvas = new fabric.Canvas('tshirt-canvas', {
  backgroundColor: '#f4f4f4', // Background color for the canvas
});

// Load t-shirt image from local file
const tshirtImageUrl = 'tshirt-mockup.jpg'; // Replace with your local t-shirt image path
fabric.Image.fromURL(tshirtImageUrl, (img) => {
  img.scaleToWidth(500); // Scale the image to fit the canvas width
  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
    originX: 'left',
    originY: 'top',
  });
});

// Handle image upload
document.getElementById('image-upload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      fabric.Image.fromURL(event.target.result, (img) => {
        img.scaleToWidth(150); // Adjust size as needed
        img.set({
          left: 200, // Center the image horizontally
          top: 250,  // Center the image vertically
          selectable: true, // Allow the user to move and resize the image
        });
        canvas.add(img);
        canvas.setActiveObject(img); // Make the uploaded image active
      });
    };
    reader.readAsDataURL(file);
  }
});

// Reset design
document.getElementById('reset-btn').addEventListener('click', () => {
  canvas.clear(); // Clear the canvas
  // Reload t-shirt image
  fabric.Image.fromURL(tshirtImageUrl, (img) => {
    img.scaleToWidth(500);
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
  });
});