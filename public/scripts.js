
// Overlay script //

const modelOverlay = document.querySelector('.model-overlay')
const videos = document.querySelectorAll('.videos')

 for (let video of videos) {
  video.addEventListener("click", function(){
   const videoId = video.getAttribute("id")
   modelOverlay.classList.add('active')
   modelOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
  })
 }

 const closeModel = document.querySelector(".close-model").addEventListener("click", function (){
  modelOverlay.classList.remove("active")
  modelOverlay.querySelector("iframe").src = ""
 })

 // -------------------------------------- //
