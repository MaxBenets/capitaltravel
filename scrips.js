let content__img = document.querySelector("#bigLogo")

let toorsMore = document.querySelector(".toors__more")
let treningsMore = document.querySelector(".trennings__more")

let toorsFlexs = document.querySelector(".toors__flexs")
let treningsFlexs = document.querySelector(".trennings__flexs")

document.onmousemove = (e) => {
   if (innerWidth > 1300){
      content__img.style.transform = "translate("+e.clientX / 90+"px, "+e.clientY / 90+"px)"
   }
   else{
      location.reload()
   }
}

toorsMore.onclick = () => {
   if (toorsFlexs.style.height == "100%"){
      toorsFlexs.style.height = "500px"
      toorsMore.innerHTML = "Дивитись усі тури"
   }
   else{
      toorsFlexs.style.height = "100%"
      toorsMore.innerHTML = "Сховати тури"
   }
}

treningsMore.onclick = () => {
   if (treningsFlexs.style.height == "100%"){
      treningsFlexs.style.height = "500px"
      treningsMore.innerHTML = "Дивитись усі тренінги"
   }
   else{
      treningsFlexs.style.height = "100%"
      treningsMore.innerHTML = "Сховати тренінги"
   }
}