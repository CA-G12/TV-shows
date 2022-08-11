const fetch = () => {
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText))
      }else {
        console.log("ERROR", xhr.status)
      }
    }
  }
  xhr.open("GET", "/data")
  xhr.send()
}

fetch()