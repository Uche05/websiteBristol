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
