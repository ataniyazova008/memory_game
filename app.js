let text = document.querySelector('.text')
btn = true
let textes = document.querySelector('.texts')
count = 0

text.addEventListener('click',()=>{
    if(btn == true){
        text.textContent = '▶️'
        btn = false
        count++
        textes.textContent = count
    }
    else {
        btn = true
        text.textContent = '⏸️'        
    }
})

