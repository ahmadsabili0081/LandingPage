window.addEventListener('scroll',function(){
    const btn = document.querySelector('.btn');
    btn.classList.toggle('scroll', window.scrollY > 300);
});

function btn(){
    document.body.scrollTop ="0";

    document.documentElement.scrollTop="0";
};