// URLs for hologram images for each face (replace with your own images or URLs)
const hologramImages = {
    front: 'https://i.imgur.com/2nrV4nM.png',   // example hologram image URL
    back: 'https://i.imgur.com/2nrV4nM.png',
    right: 'https://i.imgur.com/2nrV4nM.png',
    left: 'https://i.imgur.com/2nrV4nM.png',
    top: 'https://i.imgur.com/2nrV4nM.png',
    bottom: 'https://i.imgur.com/2nrV4nM.png'
};

// Apply hologram images as background with some opacity blend
function applyHologramImages() {
    Object.keys(hologramImages).forEach(face => {
        const faceDiv = document.querySelector(`.face.${face}`);
        if (faceDiv) {
            faceDiv.style.backgroundImage = `url(${hologramImages[face]})`;
            faceDiv.style.backgroundSize = 'contain';
            faceDiv.style.backgroundRepeat = 'no-repeat';
            faceDiv.style.backgroundPosition = 'center';
            // Keep text visible by blending background with transparency, already in CSS
        }
    });
}

// Update the face's text content for V2X communication status
function updateFace(id, message) {
    const face = document.querySelector(`.face.${id}`);
    if (face) {
        // Show message below hologram with line break for clarity
        face.innerHTML = `<div style="background: rgba(0,0,0,0.5); padding: 5px; border-radius: 5px;">${message}</div>`;
    }
}

// V2X communication system functions
function V2I() {
    updateFace('front', 'V2I: Traffic lights optimized, vehicle info exchanged.');
}

function V2P() {
    updateFace('back', 'V2P: Pedestrian safety alerts active.');
}

function V2S() {
    updateFace('right', 'V2S: Sensor data received, hazard detected.');
}

function V2B() {
    updateFace('left', 'V2B: Buildings adjust settings for energy efficiency.');
}

function V2N() {
    updateFace('top', 'V2N: Network sync stable, real-time data flowing.');
}

function V2V() {
    updateFace('bottom', 'V2V: Vehicles coordinated to avoid collisions.');
}

function updateAllCommunication() {
    V2I();
    V2P();
    V2S();
    V2B();
    V2N();
    V2V();
    console.log('Updated all V2X communication systems at', new Date().toLocaleTimeString());
}

// Initialize hologram images and start communication update cycle
applyHologramImages();
updateAllCommunication();
setInterval(updateAllCommunication, 7000);
