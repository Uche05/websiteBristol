function toggleLike(icon) {
    if (icon.classList.contains('liked')) {
        icon.classList.remove('liked');
    } else {
        icon.classList.add('liked');
    }
}
