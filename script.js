const botao = document.getElementById('switchButton')
const body = document.querySelector('.body')
const toogle = document.querySelector('.toogle')

body.style.transition = 'all 1s'
toogle.style.transition = 'margin 0.3s linear'
toogle.style.transition = 'all 0.3s linear'


botao.addEventListener('click', function() {
    // check which is the current theme and changes it
    if(body.classList.contains('bg-gray-800')){
        body.classList.remove('bg-gray-800')
        body.classList.add('bg-white')
        console.log('otario2')
    } 
    else if(body.classList.contains('bg-white')){  
        console.log('otario')
        body.classList.remove('bg-white')
        body.classList.add('bg-gray-800')
    }
    // check position of the switch and changes it
    if(toogle.classList.contains('ml-[0.3rem]')){
        toogle.classList.replace('ml-[0.3rem]','ml-[3.4rem]')
        toogle.classList.replace('bg-gray-800', 'bg-white')
    }
    else if(toogle.classList.contains('ml-[3.4rem]')){
        toogle.classList.replace('ml-[3.4rem]','ml-[0.3rem]')
        toogle.classList.replace('bg-white', 'bg-gray-800')
    }
})



