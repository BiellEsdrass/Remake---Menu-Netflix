let container = document.querySelector('.main')
let main = document.querySelector('.menu');
let input = document.querySelector('.box');
let icon = document.querySelector('.showpassword');

icon.addEventListener('click', function(){
    main.classList.toggle('visible');
    if(main.classList.contains('visible')){
        icon.src = 'imgs/eye-off.svg';
        input.type = 'text';
    } else {
        icon.src = 'imgs/eye.svg';
        input.type = 'password';
    }
}
)



