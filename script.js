// Reload the iframe
// const iframe = document.getElementById('.project__iframe');
// iframe.contentWindow.location.reload();

window.addEventListener('load', function () {
    const aboutText = document.querySelector('.about')
    TweenLite.to(aboutText, 4, {
        opacity: 1,
    })
}, false);