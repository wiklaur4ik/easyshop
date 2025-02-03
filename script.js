// Customization Popup Logic
const customizeBtn = document.getElementById('customize-btn');
const popup = document.getElementById('customization-popup');
const closeBtn = document.querySelector('.close-btn');

// Open Popup
customizeBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close Popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Initialize Fabric.js Canvas
const canvas = new fabric.Canvas('tshirt-canvas', {
  backgroundColor: '#f4f4f4',
});

// Load T-Shirt Mockup
fabric.Image.fromURL('tshirt-mockup.jpg', (img) => {
  img.scaleToWidth(500);
  canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
});

// Handle Image Upload
document.getElementById('image-upload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      fabric.Image.fromURL(event.target.result, (img) => {
        img.scaleToWidth(150);
        img.set({
          left: 200,
          top: 250,
          selectable: true,
        });
        canvas.add(img);
        canvas.setActiveObject(img);
      });
    };
    reader.readAsDataURL(file);
  }
});

// Reset Design
document.getElementById('reset-btn').addEventListener('click', () => {
  canvas.clear();
  fabric.Image.fromURL('tshirt-mockup.jpg', (img) => {
    img.scaleToWidth(500);
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
  });
});