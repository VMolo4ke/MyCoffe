let sizes = document.querySelector('.item__size').querySelectorAll('div');


sizes.forEach((size) => {
    size.addEventListener('click', function(){
        sizes.forEach((s) => { s.classList.remove('active') });
        size.classList.add('active');
    });
});
