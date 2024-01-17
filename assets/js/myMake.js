
// langouste js 

const showCountriesBtn = document.getElementById("showCountriesBtn");
const countriesList = document.getElementById("countriesList");

const langBtnName = document.querySelector("#langBtnName");
const linkParent = document.querySelector(".countriesList");
const langLink = document.querySelectorAll('.countriesList li');



const langShowButton = (tag) =>{
   tag.parentNode.children[1].classList.toggle('d-none')
}


// langLink.forEach(link =>{
//    link.addEventListener('click', () =>{
//       linkParent.querySelector(".activeLang").classList.remove("activeLang");
//       link.classList.add("activeLang");
//       link.parentNode.parentNode.children[0].children[0].textContent = link.innerText;
//       link.parentNode.classList.add('d-none');
//    })
// });


const selectLang = (tag, event) =>{
   var currentURL = window.location.href;
   var filename = currentURL.split("/").pop(); 
   let newURL;
   
   if (tag.innerText == 'ENGLISH') {
      newURL = `http://127.0.0.1:5500/english/${filename}`
   }
   else if(tag.innerText == 'SUOMI'){
      newURL = `http://127.0.0.1:5500/suomi/${filename}`
   }
   else if(tag.innerText == 'SVENSKA'){
      newURL = `http://127.0.0.1:5500/svenska/${filename}`
   }
   window.location.href = newURL;
   tag.parentNode.classList.add('d-none');
}

// const selectLang = (tag, event) =>{
//    var currentURL = window.location.href;
//    var filename = currentURL.split("/").pop(); 
//    let newURL;
   
//    if (tag.innerText == 'ENGLISH') {
//       newURL = `https://omarali18.github.io/themeholy_cleaning/english/${filename}`
//    }
//    else if(tag.innerText == 'SUOMI'){
//       newURL = `https://omarali18.github.io/themeholy_cleaning/suomi/${filename}`
//    }
//    else if(tag.innerText == 'SVENSKA'){
//       newURL = `https://omarali18.github.io/themeholy_cleaning/svenska/${filename}`
//    }
//    window.location.href = newURL;
//    tag.parentNode.classList.add('d-none');
// }

window.onload = function() {
   var currentURL = window.location.href;
   let countryparent = document.querySelectorAll(".country-list")
   for (let i = 0; i < countryparent.length; i++) {
      let listParent = countryparent[i].querySelectorAll('li')
      listParent.forEach(li =>{
         // if (li.innerText == "SUOMI") {
         if (currentURL.includes(li.innerText.toLowerCase())) {
            langBtnName.textContent = li.innerText;
            li.classList.add("activeLang");
         }
         else{
            li.classList.remove("activeLang")
         }
      })
      
   }
 };

 const sendBtn = document.getElementById('sendBtn');
 const error_message = document.getElementById("error_message")
 const success_message = document.getElementById("success_message")
//  Password : "ypxwxeoxanwubyid", To : 'omarali1814000@gmail.com',

 sendBtn.addEventListener('click', function(e) {
   e.preventDefault()
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let number = document.getElementById("number").value;
   let message = document.getElementById("message").value;

   let parms={
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      number : document.getElementById("number").value,
      message: document.getElementById("message").value === '' ? "Customer did not write any message." : document.getElementById("message").value
   }
   
   if (name != '' && email != '' && number != '' ) {
      emailjs.send('service_v9qu0fl','template_sakffct', parms).then(success_message.innerText = 'We received your message successful.');
      // success_message.innerText = 'We received your message successful.'
   }else{
      error_message.innerText = "Please fill up name, email, number.!!"
   }
   
})
// message : document.getElementById("message").value,

const RemoveError = ()=>{
   error_message.innerText = ""
   success_message.innerText = ""
}

setInterval(RemoveError,8000)
// setTimeout(() => {
//    console.log("Delayed for 1 second.");
//  }, 1000);

// service id = service_v9qu0fl


