const Content = document.querySelector('.content');
const input = document.querySelector('input');
const results = document.querySelector('ul.results');
const topp = document.querySelector('.agin');
document.querySelector('button').addEventListener('click',(e)=>{
  e.preventDefault()
})
input.addEventListener('input', (e) => {
  const endpoint = e.target.value;
  // eslint-disable-next-line no-undef
  fetch(endpoint, (data) => { generateAutoCompleteResults(data, results, Content); });
  if (endpoint.length > 0) {
    results.classList.add('active');
  } else {
    results.classList.remove('active');
  }
   
});
