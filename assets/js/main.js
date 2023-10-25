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

const sections=document.querySelectorAll('section[id]');

const scrollActive=()=>{
    const scrollY=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId=current.getAttribute('id'),
            sectionsClass=document.querySelector('.nav__menu a[href*='+sectionId);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive);
/*SHOW SCROLL UP */ 

const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up');
    //add show-scroll class is scroll is heigher than 350 vw
    this.scrollY>=350? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);
/*=============== SCROLL REVEAL ANIMATION ===============*/


/*CALCULATE JS */
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

/* EMAIL JS*/

const contactForm=document.getElementById('contact-form'),
    contactMessage=document.getElementById('contact-message'),
    contactUser=document.getElementById('contact-user');

const sendEmail=(e)=>{
    e.preventDefault();
    //check if the field has a value

    if(contactUser.value===''){
        //add and remove color
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

        //show error message
        contactMessage.textContent="You must enter your email address";

        //remove message after 3 seconds
        setTimeout(()=>{
            contactMessage.textContent=''
        },3000);
    }
    else{
        contactMessage.classList.add('color-green');
        contactMessage.textContent="You have registered successfully"
        //api serviceID -templateID -#form -publicKey
        //emailjs.sendForm(serviceID, templateID, templateParams, publicKey);
        emailjs.sendForm('service_giu4019','template_q2r9ief','#contact-form','oPSv7GwY4vOezJ_9q')
            .then(()=>{
                //show message and add color
                // contactMessage.classList.add('color-green');
                // contactMessage.textContent="You have registered successfully"

                //remove message after 3 seconds
                setTimeout(()=>{
                    contactMessage.textContent='';
                },3000)
            },(error)=>
            {
                //Mail sending error
                alert('OOPS! Something went wrong ....',error)
            })
            contactUser.value='';
    }
}

contactForm.addEventListener('submit',sendEmail);
