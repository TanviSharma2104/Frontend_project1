/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close');
// menu show
//validate if constant exists
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

//menu hidden
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}


/*REMOVE MENU MOBILE */
const navLink=document.querySelectorAll('.nav__link')
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=> n.addEventListener('click',linkAction));

/*CHANGE BACKGROUND HEADER */
const scrollHeader=()=>{
    const header=document.getElementById('header')
    //when height is > 50 viewport
    this.scrollY>=50?header.classList.add('bg-header'):header.classList.remove('bg-header');
}
window.addEventListener('scroll',scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm=document.getElementById('calculate-form'),
    calculateCm=document.getElementById('calculate-cm'),
    calculateKg=document.getElementById('calculate-kg'),
    calculateMessage=document.getElementById('calculate-message');

const calculateBmi=(e)=>{
    e.preventDefault();

    //check if the fields have a valid value
    if(calculateCm.value==='' || calculateKg.value===''){
        //add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        //show message
        calculateMessage.textContent="Fill in the Height and Weight 🧑‍💻";

        //remove message
        setTimeout(()=>{
            calculateMessage.textContent=""
        },3000)
    }
    else{
        //BMI calculate formula
        const cm=calculateCm.value/100;
        kg=calculateKg.value,
        bmi=Math.round(kg/(cm*cm))
        //show your health status
        if(bmi<18.5){
            //add color and show message
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent=`Your BMI is ${bmi} and you are skinny`;
        }
        else if(bmi<25){
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent=`Your BMI is ${bmi} and you are healthy`;
        }
        else{
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent=`Your BMI is ${bmi} and you are overweight`;
        }

        //clear input fields
        calculateCm.value='';
        calculateKg.value='';

        setTimeout(()=>{
            calculateMessage.textContent=""
        },4000)
    }

}

calculateForm.addEventListener('submit',calculateBmi);

/*=============== EMAIL JS ===============*/
