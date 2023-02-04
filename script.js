const botao = document.getElementById('switchButton')
const body = document.querySelector('.body')
const toogle = document.querySelector('.toogle')

body.style.transition = 'all 1s'
toogle.style.transition = 'margin 0.3s linear'
toogle.style.transition = 'all 0.3s linear'


botao.addEventListener('click', function() {
    // check which is the current theme
    if(body.classList.contains('bg-gray-800')){
        // changes the theme
        body.classList.replace('bg-gray-800','bg-slate-300')
        // moves the switch button
        toogle.classList.replace('ml-[0.3rem]','ml-[3.4rem]')
        // changes the switch button color
        toogle.classList.replace('bg-gray-800', 'bg-slate-300')
        console.log('otario2')
    } 
    else if(body.classList.contains('bg-slate-300')){  
        console.log('otario')
        // changes the theme
        body.classList.replace('bg-slate-300','bg-gray-800')
        // moves the switch button
        toogle.classList.replace('ml-[3.4rem]','ml-[0.3rem]')
        // changes the switch button color
        toogle.classList.replace('bg-slate-300', 'bg-gray-800')
    }
})



