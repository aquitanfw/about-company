
// const toggleAccordeon = () => {
//     let accordeon = document.querySelector('.about-accordion')
//     let accordeonItems = document.querySelectorAll('.about-accordion-item')

//     accordeon.addEventListener('click', function (e) {
//         e.stopPropagation()
//         let target = e.target
//         accordeonItems.forEach((item) => {
//             item.classList.remove('open-accordion')
//         }) 

//         if (target.classList.contains('about-accordion-item') && !target.classList.contains('about-accordion-header')) {
//             target.classList.toggle('open-accordion')
//         }
//     })
// }

// toggleAccordeon()

const boxes = document.querySelectorAll('.about-accordion-item')

boxes.forEach((box) => { 
    box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
    
    e.preventDefault(); // сбрасываем стандартное поведение
    let currentBox = e.target.closest(".about-accordion-item"); // определяем текущий бокс
    currentBox.classList.toggle("open-accordion"); // присваиваем ему активный класс
}
