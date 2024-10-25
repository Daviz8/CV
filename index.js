 
const  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
       console.log(entry);
       if(entry.isIntersecting) {
        entry.target.classList.add('show');
       }
       else{
        entry.target.classList.remove('show');
       }
       
    });
} );

 const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => observer.observe(element));


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.container > section');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });
});



