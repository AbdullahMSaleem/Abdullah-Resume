document.getElementById('toggleSkills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('Skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    }
});
