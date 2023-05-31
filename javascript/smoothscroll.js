const dataScroll = document.querySelectorAll('[data-scroll]');

dataScroll.forEach(elem=>{
    elem.addEventListener('click', function(event){
        event.preventDefault();
        const blockId = event.target.getAttribute('data-scroll').substring(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block : 'start',
        })
    })
})