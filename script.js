const menuItens = document.querySelectorAll('.dropdown a');

menuItens.forEach(item => {

    item.addEventListener('click', scrollToOnClick);
    
})

function scrollToOnClick(event)
{

    event.preventDefault();
    
    const to = getScrollTopByHref(event.target); 
    
    ScrollToPosition(to);

}

function ScrollToPosition(to)
{

    window.scroll({

        top: to,
        behavior: "smooth",

    });

}


function getScrollTopByHref(element)
{

    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;

}

/*Smooth to header's button*/

const button_profile = document.querySelectorAll('.box a');

button_profile.forEach(item =>{

    item.addEventListener('click', scrollToIdOnclick);

})

function scrollToIdOnclick(events)
{

    events.preventDefault();
    const elements = events.target;    
    const to = document.querySelector("#about").offsetTop;
    
    window.scroll({

        top: to,

        behavior: "smooth",

    });

}

/*Smooth to contact's button*/

const button_contact = document.querySelectorAll('.contact_button');

button_contact.forEach(item =>{

    item.addEventListener('click', scrollToIdOnclickSectionAbout);

})

function scrollToIdOnclickSectionAbout(events)
{

    events.preventDefault();
    const elements = events.target;
    const to = document.querySelector("#contacts").offsetTop;

    window.scroll({

        top: to,

        behavior: "smooth"

    });

}

