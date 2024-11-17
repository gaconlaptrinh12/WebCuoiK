function hideSection(className) {
    const section = document.querySelector(`.${className}`);
    if (section) {
        section.style.display = 'none';
    }
}
