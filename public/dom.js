const input =document.querySelector('input')
const results =document.querySelector('ul.results')
input.addEventListener('input',(e)=>{
    let endpoint=e.target.value
    fetch(endpoint)
    if(endpoint.length>0){
        results.classList.add('active')
    }
    else{
        results.classList.remove('active')
    }
    
})
