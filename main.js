// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.querySelectorAll(".like").forEach((el)=> {el.addEventListener("click",(e)=>{
  mimicServerCall()
    .then(res=>{
      document.querySelector(".like-glyph").innerText = FULL_HEART;
      document.querySelector(".like-glyph").classList.add("activated-heart")
    })
    .catch(err=>{
      document.querySelector("#modal").classList.remove("hidden");
      document.querySelector("#modal-message").innerText = err;
      setTimeout(()=>document.querySelector("#modal").classList.add("hidden"),5000);
    })
  document.querySelector(".like-glyph").innerText = EMPTY_HEART;
  document.querySelector(".like-glyph").classList.remove("activated-heart")
  })
});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
