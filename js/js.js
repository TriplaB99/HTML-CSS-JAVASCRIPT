let video = document.querySelector('video');
window.addEventListener('scroll', function() {
    let value = window.scrollY;
    video.style.opacity = 1 + value / -800;
})