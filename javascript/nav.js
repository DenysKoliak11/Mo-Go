const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav_toggle');
navToggle.addEventListener('click', function(){
    if (!this.classList.contains('active')){
        this.classList.add('active');
        nav.classList.add('active');
    }else {
        this.classList.remove('active');
        nav.classList.remove('active');
    }
});