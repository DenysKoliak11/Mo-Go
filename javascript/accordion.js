const navigation = document.querySelectorAll('.nav_link');
console.log(navigation)

navigation.forEach(nav => {
    nav.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            document.querySelector('.active')?.classList.remove('active')
            this.classList.add('active')
        } else {
            this.classList.remove('active')
        }
    })
});

const accordion = document.querySelectorAll('.accordion_item');

accordion.forEach(accordionItem => {
    accordionItem.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            document.querySelector('.active')?.classList.remove('active')
            this.classList.add('active')
        } else {
            this.classList.remove('active')
        }
    })
});