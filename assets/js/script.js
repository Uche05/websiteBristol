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
        headerContent.textContent = "The Bristolian Dogs";
        paragraphContent.textContent = "Dogs are definitely Bristolians' best friends. There's literally no day you won't see one";
    } else if (type === "cat") {
        headerContent.textContent = "Sneaky Cats";
        paragraphContent.textContent = "These graceful creatures are very agile and you won't often see them in the mornings or evenings.";
    } else if (type === "swan") {
        headerContent.textContent = "Avonmouth Swans";
        paragraphContent.textContent = "Residing in Avonmouth, these birds are very cheeky. Please take heed to the swan signs you see on the roads to Severn Beach or Avonmouth Wraehouse regions!";
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
