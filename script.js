// Reload the iframe
// const iframe = document.getElementById('.project__iframe');
// iframe.contentWindow.location.reload();

window.addEventListener('load', function () {

const article = document.querySelector(".about");
const aboutText = document.querySelector('.about__text')
let aboutTextCont = aboutText.textContent;
let p = document.createElement('p');
article.prepend(p);
const aboutList = document.querySelector('.about__list');
const aboutItems = Array.from(aboutList.children);
console.log(aboutTextCont);


//добавляет печать текста в блоке article
for (let i = 0; i < aboutTextCont.length; i++) {
    (function(i) {
        setTimeout(function() {
            // Created textNode to append
            let text = document.createTextNode(aboutTextCont[i])
            p.append(text);
        }, 75 * i);
    }(i));
}
//показывает стэк
TweenLite.staggerTo(aboutItems, 3, {opacity: 1, delay:14}, .5);

}, false);