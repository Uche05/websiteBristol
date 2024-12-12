// like toggle
function toggleLike(icon) {
    if (icon.classList.contains('liked')) {
        icon.classList.remove('liked');
    } else {
        icon.classList.add('liked');
    }
}

// pop-up
const popup = document.getElementById("popup");

function openPopup() {
    popup.style.display = "flex";
}

function closePopup() {
    popup.style.display = "none";
}

// Close popup
window.onclick = function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

// change text content based on the image

// Get the elements inside the popup for dynamic content
const headerContent = document.getElementById("header-content");
const paragraphContent = document.getElementById("paragraph-content");

// Function to open the popup with dynamic content
function openPopup(type) {
    // Update content based on the `type` parameter
    if (type === "dog") {
        headerContent.textContent = "About Dogs";
        paragraphContent.textContent = "Dogs are loyal and friendly animals, often considered a human's best friend.";
    } else if (type === "cat") {
        headerContent.textContent = "About Cats";
        paragraphContent.textContent = "Cats are independent and graceful animals, known for their agility and charm.";
    } else if (type === "swan") {
        headerContent.textContent = "About Swans";
        paragraphContent.textContent = "Swans are elegant birds known for their beauty, often symbolizing love and purity.";
    }

    // Show the popup
    popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
    popup.style.display = "none";
}

// Close popup when clicking outside of it
window.onclick = function (event) {
    if (event.target === popup) {
        closePopup();
    }
};
