const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider .slider-content');
let counter = 0;

function moveToNext () {
    counter++;
    let move = -15 * counter;
    let space = -10 * counter;
    slider.style.transform = `translate(calc(${move}vw + ${space}px))`;
}
function moveToPrev () {
    counter--;
    let move = -15 * counter;
    let space = -10 * counter;
    slider.style.transform = `translate(calc(${move}vw + ${space}px))`;
}


slider.addEventListener('transitionend', function(){
    console.log(slides[counter].id)
    if (slides[counter].id === 'lastClone'){
        console.log('done');
    }
})