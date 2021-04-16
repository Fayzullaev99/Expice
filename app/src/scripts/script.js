// nav
const navControl = document.querySelectorAll('.nav__btn, .nav__close'),
      navToggle = document.querySelectorAll('.nav__btn, .nav__list');
      
navControl.forEach(btn => btn.addEventListener('click', () => {
    navToggle.forEach(el => el.classList.toggle('open'))
}))

// background color change
const $userId = document.querySelectorAll('#userRed, #userGreen, #userBlue');
const root = document.querySelector(":root");
$userId.forEach(user => {
    user.addEventListener('click', (e) => {
        const userId = e.target.getAttribute("id");
        if (userId === "userRed") {
            root.style.setProperty('--red', '#FE043C')
        } else if (userId === "userGreen") {
            root.style.setProperty("--red", "green")
        } else if (userId === "userBlue") {
            root.style.setProperty('--red', 'blue')
        }
    })
})

// dropdown

const $dropDownBtn = document.querySelector('.nav-user__dropbtn'),
      $dropDownContent = document.querySelector('.nav-user__dropdown-content'),
      $dropDown = document.querySelector('.nav-user__dropdown');
$dropDownBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if ($dropDownContent.classList.contains('active')) {
        $dropDownContent.classList.remove('active')
    } else {
        $dropDownContent.classList.add('active')
    }
})
$dropDownContent.addEventListener('click', ()=>{
  $dropDownContent.classList.remove('active')
})


//  location

const $location = document.querySelectorAll('.fixed, .about__catalog__adress');

$location.forEach(btn => {
    btn.addEventListener('click', () => {
        window.location = 'https://goo.gl/maps/wQeTHLZw736mvcSe9'
    })
})

// slider 

const $slider = document.querySelector('.slider');
const $sliderBtn = document.querySelectorAll('[data-target]');
const $sliderItem = document.querySelectorAll('.slider__item');
let activeSlide = 0
$sliderItem.forEach((item, i) => {
    if (item.classList.contains('active')) {
        activeSlide = i
    }
})
$sliderBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        sliderMove(e.target.getAttribute('id'))
    })
})

function sliderMove(direction) {
    if (direction === 'next') {
        if (activeSlide < $sliderItem.length - 1) {
            activeSlide++
        } else {
            activeSlide = 0
        }
    } else {
        if (activeSlide > 0) {
            activeSlide--
        } else {
            activeSlide = $sliderItem.length - 1
        }
    }
    $sliderItem.forEach(item => {
        item.classList.remove('active')
    })
    $sliderItem[activeSlide].classList.add('active')
}
let interval = setInterval(() => sliderMove('next'), 3000)