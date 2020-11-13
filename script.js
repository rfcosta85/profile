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

