var lineContainer = document.querySelector('.lines');
var navLinks = document.querySelector('ul');
var nav = document.querySelectorAll('ul li');


lineContainer.addEventListener('click', (e) =>{
    e.preventDefault();
    navLinks.classList.toggle("open");
});

// add events to btn
const btn = document.getElementById('btn1');
const img1 = document.querySelector('.images');
btn?.addEventListener('click', (e) => {
    e.preventDefault();
    img1.style.marginLeft = "-25%";
});
const btn2 = document.querySelector('.btn2');
const img2 = document.querySelector('.images');
btn2?.addEventListener('click', (e) => {
    e.preventDefault();
    img2.style.marginLeft = "-170%";
});

const btn3 = document.querySelector('.btn3');
const img3 = document.querySelector('.images');
btn3?.addEventListener('click', (e) => {
    e.preventDefault();
    img3.style.marginLeft = "-300%";
});


const btn4 = document.querySelector('.btn4');
const img4 = document.querySelector('.images');
btn4?.addEventListener('click', (e) => {
    e.preventDefault();
    img4.style.marginLeft = "-475%";
});

const btn5 = document.querySelector('.btn5');
const img5 = document.querySelector('.images');
btn5?.addEventListener('click', (e) => {
    e.preventDefault();
    img5.style.marginLeft = "-570%";
});

const btn6 = document.querySelector('.btn6')
const img6 = document.querySelector('.images')
btn6?.addEventListener('click', (e) => {
    e.preventDefault();
    img6.style.marginLeft = "-770%";
});

const btn7 = document.querySelector('.btn7')
const img7 = document.querySelector('.images')
btn7?.addEventListener('click', (e) => {
    e.preventDefault();
    img7.style.marginLeft = "-950%";
});

const btn8 = document.querySelector('.btn8')
const img8 = document.querySelector('.images')
btn8?.addEventListener('click', (e) => {
    e.preventDefault();
    img8.style.marginLeft = "-1060%";
});

const btn9 = document.querySelector('.btn9')
const img9 = document.querySelector('.images')
btn9?.addEventListener('click', (e) => {
    e.preventDefault();
    img9.style.marginLeft = "-1250%";
});

const container3H2 = document.querySelector('#h2');
container3H2?.classList.add('h2')
window.addEventListener('scroll', (e) =>{
    const container3H2 = document.querySelector('#h2');
    const screenPositionH2 = container3H2?.getBoundingClientRect().top;
    const windowScreenH2 = window.innerHeight / 1.3;
    if( screenPositionH2 < windowScreenH2){
        container3H2.classList.add('Anim-h2');
    }else{
        container3H2?.classList.remove('Anim-h2');
    }
});

//add events to the i13
window.addEventListener('scroll', (e) =>{
    const i13Left = document.querySelector('#i13-left');
    const i13Right = document.querySelector('#i13-right');
    const screenPositionLeft = i13Left?.getBoundingClientRect().top;
    const screenPositionRight = i13Right?.getBoundingClientRect().top;
    const windowScreen = window.innerHeight / 1.4;
    if(screenPositionLeft < windowScreen){
        i13Left.classList.add('i-13left-anim');
    }else{
        i13Left?.classList.remove('i-13left-anim');
    }
    if(screenPositionRight < windowScreen){
        i13Right.classList.add('i-13right-anim');
    }else{
        i13Right?.classList.remove('i-13right-anim');
    }
});
// add event to the i13pro
window.addEventListener('scroll', (e) =>{
    const i13Leftp = document.querySelector('.i-left-13p');
    const i13Rightp = document.querySelector('.i-right-13p');
    const screenPositionLeft = i13Leftp?.getBoundingClientRect().top;
    const screenPositionRight = i13Rightp?.getBoundingClientRect().top;
    const windowScreen = window.innerHeight / 1.5;
    if(screenPositionLeft < windowScreen){
        i13Leftp.classList.add('i-left-13p-Anim');
    }else{
        i13Leftp?.classList.remove('i-left-13p-Anim');
    }
    if(screenPositionRight < windowScreen){
        i13Rightp.classList.add('i-right-13p-Anim');
    }else{
        i13Rightp?.classList.remove('i-right-13p-Anim');
    }
});

//add event to the i13promax
window.addEventListener('scroll', (e) =>{
    const i13pmLeft = document.querySelector('.i-left-13pm');
    const i13pmRight = document.querySelector('.i-right-13pm');
    const screenPositionLeftpm = i13pmLeft?.getBoundingClientRect().top;
    const screenPositionRightpm = i13pmRight?.getBoundingClientRect().top;
    const windowScreen = window.innerHeight / 1.6;
    if(screenPositionLeftpm < windowScreen){
        i13pmLeft?.classList.add('i-13pm-Anim');
    }else{
        i13pmLeft?.classList.remove('i-13pm-Anim');
    }
    if(screenPositionRightpm < windowScreen){
        i13pmRight?.classList.add('i-right-13pm-Anim');
    }else{
        i13pmRight?.classList.remove('i-right-13pm-Anim');
    }
});


//add scrool to box-left
const boxesLeft = document.querySelector('.boxes');
boxesLeft?.children[0].classList.add('i13box-left1');

window.addEventListener('scroll', (e) =>{
    const boxesLeft = document.querySelector('.boxes');
    const scrrenBoxi13 = boxesLeft?.getBoundingClientRect().top;
    const windowBoxi13 = window.innerHeight / 1.3;
    if(scrrenBoxi13 < windowBoxi13){
        boxesLeft.children[0].classList.add('i13-boxleft-Anim');
    } else{
        boxesLeft?.children[0].classList.remove('i13-boxleft-Anim');
    }
})

//add scrool to box-center
const boxesCenter = document.querySelector('.boxes');
boxesCenter?.children[1].classList.add('i13box-center')

window.addEventListener('scroll', (e) =>{
    const boxesCenter = document.querySelector('.boxes');
    const scrrenBoxi13Center = boxesCenter?.getBoundingClientRect().top;
    const windowBoxi13Center = window.innerHeight / 1.4;
    if(scrrenBoxi13Center < windowBoxi13Center){
        boxesRight.children[1].classList.add('i13box-center-Anim');
    } else{
        boxesCenter?.children[1].classList.remove('i13box-center-Anim');
    }
});

//add scrool to box-right
const boxesRight = document.querySelector('.boxes');
boxesRight?.children[2].classList.add('i13promaxbox-right3')

window.addEventListener('scroll', (e) =>{
    const boxesRight = document.querySelector('.boxes');
    const scrrenBoxi13Right = boxesRight?.getBoundingClientRect().top;
    const windowBoxi13Right = window.innerHeight / 1.3;
    if(scrrenBoxi13Right < windowBoxi13Right){
        boxesRight.children[2].classList.add('i13promaxbox-right-Anim');
    } else{
        boxesRight?.children[2].classList.remove('i13promaxbox-right-Anim');
    }
});

//supportBar1
const supBar1 = document.querySelector('.support-bar-center');
supBar1?.children[0].classList.add('support-list1');
window.addEventListener('scroll', (e) =>{
    e.preventDefault();
    const supBar1 = document.querySelector('.support-bar-center');
    const screenSizeSupBar1 = supBar1.getBoundingClientRect().top;
    const windowSIzeSupBar1 = window.innerHeight / 1.6;
    if(screenSizeSupBar1 < windowSIzeSupBar1){
        supBar1.children[0].classList.add('support-list1Anim');
    }else{
        supBar1.children[0].classList.remove('support-list1Anim');
    }
});

//supportBar2   
const supBar2 = document.querySelector('.support-bar-center');
supBar2?.children[1].classList.add('support-list2');
window.addEventListener('scroll', (e) =>{
    e.preventDefault();
    const supBar2 = document.querySelector('.support-bar-center');
    const screenSizeSupBar2 = supBar2.getBoundingClientRect().top;
    const windowSIzeSupBar2 = window.innerHeight / 1.7;
    if(screenSizeSupBar2 < windowSIzeSupBar2){
        supBar2.children[1].classList.add('support-list1Anim');
    } else{
        supBar1.children[1].classList.remove('support-list1Anim');
    }
});

//supportBar3   
const supBar3 = document.querySelector('.support-bar-center');
supBar3?.children[2].classList.add('support-list3');
window.addEventListener('scroll', (e) =>{
    e.preventDefault();
    const supBar3 = document.querySelector('.support-bar-center');
    const screenSizeSupBar3 = supBar3?.getBoundingClientRect().top;
    const windowSIzeSupBar3 = window.innerHeight / 1.8;
    if(screenSizeSupBar3 < windowSIzeSupBar3){
        supBar3.children[2].classList.add('support-list1Anim');
    } else{
        supBar1?.children[2].classList.remove('support-list1Anim');
    }
});


//event to leftmysupport
window.addEventListener('scroll', (e) =>{
    e.preventDefault();
    const leftmysupport = document.querySelector('.leftmysupport');
    const screenSizeLeftSup = leftmysupport?.getBoundingClientRect().top;
    const windowSIzeLeftSup = window.innerHeight / 1.3;
    if(screenSizeLeftSup < windowSIzeLeftSup){
        leftmysupport.classList.add('leftmysupportAnim');
    } else{
        leftmysupport?.classList.remove('leftmysupportAnim');
    }
});

//add event to warrant and repair
window.addEventListener('scroll', (e) =>{
    e.preventDefault();
    const centerRepair = document.querySelector('.center-repair');
    const screenSizeCenterRepair = centerRepair.getBoundingClientRect().top;
    const windowSIzeCenterRepair = window.innerHeight /1.2;
    if(screenSizeCenterRepair < windowSIzeCenterRepair){
        centerRepair.classList.add('center-repairAnim');
    } else{
        centerRepair.classList.remove('center-repairAnim');
    }
})
window.addEventListener('scroll', (e) =>{
    e.preventDefault();
    const centerRepair2 = document.querySelector('.center-repair2');
    const screenSizeCenterRepair2 = centerRepair2.getBoundingClientRect().top;
    const windowSIzeCenterRepair2 = window.innerHeight /1.1;
    if(screenSizeCenterRepair2 < windowSIzeCenterRepair2){
        centerRepair2.classList.add('center-repair2Anim');
    } else{
        centerRepair2.classList.remove('center-repair2Anim');
    }
})
window.addEventListener('scroll', ()=>{
    window.addEventListener('scroll', (e) =>{
        e.preventDefault();
        const nav = document.querySelector('.nav-fix');
    
        nav?.classList.toggle('nav-stick', window.scrollY > 0);
    });
});