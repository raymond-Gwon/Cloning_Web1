const slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slider .slider-content');
let counter = 0;


document.querySelector('.next-btn').addEventListener('click', function(){
    if (counter<slides.length-4){
        counter++;
        let move = -15 * counter;
        let space = -10 * counter;
        slider.style.transform = `translate(calc(${move}vw + ${space}px))`;
    }
});
document.querySelector('.pre-btn').addEventListener('click', function(){
    if(counter>0) {
        counter--;
        let move = -15 * counter;
        let space = -10 * counter;
        slider.style.transform = `translate(calc(${move}vw + ${space}px))`;
    }
});
