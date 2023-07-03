button = document.querySelector('#button_img')
sofa_img = document.querySelector('#sofa_img')

button.addEventListener("click", function(){
    if (sofa_img.getAttribute('src') === 'img/sofa.png'){
        document.querySelector('#button_img').setAttribute('src', 'img/x.png')
        sofa_img.setAttribute('src', 'img/sofa.gif')
    } else{
        document.querySelector('#button_img').setAttribute('src', 'img/360.png')
        sofa_img.setAttribute('src', 'img/sofa.png')
    }
    
});