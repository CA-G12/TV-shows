const fetch = (endpoint,cb) => {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data=JSON.parse(xhr.responseText)
        cb(data)
      }else {
        console.log("ERROR", xhr.status)
      }
    }
  }
  xhr.open("GET", `/data?q=${endpoint}`)
  xhr.send()
}
function generateAutoCompleteResults(data,container){
  // console.log(data);
  if(data.length>0){
    container.textContent=''
      for (let index = 0; index <Math.min(5,data.length); index++) {
        let li = document.createElement('li');
        li.textContent=data[index].name;
        li.addEventListener('click',(e)=>{
          let li=e.target;
          fc(li.textContent)
        })
        container.appendChild(li)
      }
  }
  else{
    container.textContent=''
    let li = document.createElement('li');
        li.textContent='No result Found 😾';
        li.style.backgroundColor='red'
        li.style.color='#fff'
        container.appendChild(li)
  }
 
}

///test function 
function fc(d){
  console.log(d)
}