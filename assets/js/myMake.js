
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
   console.log("omar ali");
   var currentURL = window.location.href;
   let countryparent = document.querySelectorAll(".country-list li")

   for (let i = 0; i < countryparent.length; i++){
      console.log(countryparent[i]);
      if (currentURL.includes(countryparent[i].innerText.toLowerCase())){
         console.log("li.innerText.toLowerCase() ==", countryparent[i].innerText.toLowerCase());
         langBtnName.textContent = countryparent[i].innerText;
         countryparent[i].classList.add("activeLang");
      }
      else{
         countryparent[i].classList.remove("activeLang")
      }
   }

   // for (let i = 0; i < countryparent.length; i++) {
   //    let listParent = countryparent[i].querySelectorAll('li')
   //    listParent.forEach(li =>{
   //       console.log("li.innerText.toLowerCase() ==", li);
   //       // if (li.innerText == "SUOMI") {
   //          if (currentURL.includes(li.innerText.toLowerCase())) {
   //             langBtnName.textContent = li.innerText;
   //             console.log("li.innerText.toLowerCase() ==", li.innerText.toLowerCase());
   //          li.classList.add("activeLang");
   //       }
   //       else{
   //          li.classList.remove("activeLang")
   //       }
   //    })
   // }

 };

 const sendBtn = document.getElementById('sendBtn');
 const error_message = document.getElementById("error_message")
 const success_message = document.getElementById("success_message")
//  Password : "ypxwxeoxanwubyid", To : 'omarali1814000@gmail.com',

 sendBtn.addEventListener('click', function(e) {
   e.preventDefault()

   var currentURL = window.location.href;
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let number = document.getElementById("number").value;
   let message = document.getElementById("message").value;
   let attachmentInput = document.getElementById("attachment");

   let parms={
      name : name,
      email : email,
      number : number,
      message : message === '' ? "Customer did not write any message." : message,
   }
   if (attachmentInput.files.length > 0) {
      // Get the file from the input
      let attachmentFile = attachmentInput.files[0];
      
      // Create a FormData object to send the file
      let formData = new FormData();
      formData.append('attachment', attachmentFile);
      console.log('attachmentInput.files.length = ', attachmentInput.files[0],formData);

      // Add the FormData object to the parms
      parms.attachment = formData;
    } else {
      parms.attachment = null; // Or you can omit this line if you want to handle it differently
    }
   
    console.log('parms = ', parms);
   if (name != '' && email != '' && number != '' ) {
      emailjs.send('service_v9qu0fl','template_sakffct', parms).then(function(response) {
      if (currentURL.includes('english')) {
        success_message.innerText = "We received your message successful!";
      } else if (currentURL.includes('suomi')) {
        success_message.innerText = "We received your message successful! 2";
      } else if (currentURL.includes('svenska')) {
        success_message.innerText = "We received your message successful! 3";
      }
    }
         
      );
      // success_message.innerText = 'We received your message successful.'
   }else{
      if(currentURL.includes('english')){
         error_message.innerText = "Please fill up name, email, number.!!"
      }
      else if(currentURL.includes('suomi')){
         error_message.innerText = "Please fill up name, email, number.!! 2"
      }
      else if(currentURL.includes('svenska')){
         error_message.innerText = "Please fill up name, email, number.!! 3"
      }
      // setInterval(RemoveError,8000)
      setTimeout(() => {
         RemoveError()
      }, 8000);
   }
   
   
})
// message : document.getElementById("message").value,

const RemoveError = ()=>{
   error_message.innerText = ""
   success_message.innerText = ""
}

// setInterval(RemoveError,8000)
// setTimeout(() => {
//    console.log("Delayed for 1 second.");
//  }, 1000);

// service id = service_v9qu0fl


