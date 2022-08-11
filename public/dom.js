const input =document.querySelector('input')
input.addEventListener('input',(e)=>{
    let endpoint=e.target.value
    fetch(endpoint)
})