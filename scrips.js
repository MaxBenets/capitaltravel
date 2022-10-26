let content__img = document.querySelector("#bigLogo")

document.onmousemove = (e) => {
   if (innerWidth > 1300){
      content__img.style.transform = "translate("+e.clientX / 90+"px, "+e.clientY / 90+"px)"
   }
   else{
      location.reload()
   }
}