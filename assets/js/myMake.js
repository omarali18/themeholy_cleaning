
// langouste js 

const showCountriesBtn = document.getElementById("showCountriesBtn");
const countriesList = document.getElementById("countriesList");

const langBtnName = document.querySelector("#langBtnName");
const linkParent = document.querySelector(".countriesList");
const langLink = document.querySelectorAll('.countriesList li');



const langShowButton = (tag) =>{
   console.log("2k2k2k2k2k2", tag.parentNode.children[1]);
   tag.parentNode.children[1].classList.toggle('d-none')
}


// langLink.forEach(link =>{
//    console.log(link);
//    link.addEventListener('click', () =>{
//       console.log();
//       linkParent.querySelector(".activeLang").classList.remove("activeLang");
//       link.classList.add("activeLang");
//       link.parentNode.parentNode.children[0].children[0].textContent = link.innerText;
//       link.parentNode.classList.add('d-none');
//    })
// });


// const selectLang = (tag, event) =>{
//    var currentURL = window.location.href;
//    var filename = currentURL.split("/").pop(); 
//    // console.log("Current Filename:", filename);
//    let newURL;
   
//    if (tag.innerText == 'ENGLISH') {
//       newURL = `http://127.0.0.1:5500/english/${filename}`
//    }
//    else if(tag.innerText == 'SUOMI'){
//       newURL = `http://127.0.0.1:5500/suomi/${filename}`
//    }
//    else if(tag.innerText == 'SVENSKA'){
//       newURL = `http://127.0.0.1:5500/svenska/${filename}`
//    }
//    window.location.href = newURL;
//    tag.parentNode.classList.add('d-none');
// }

const selectLang = (tag, event) =>{
   var currentURL = window.location.href;
   var filename = currentURL.split("/").pop(); 
   let newURL;
   
   if (tag.innerText == 'ENGLISH') {
      newURL = `https://omarali18.github.io/themeholy_cleaning/english/${filename}`
   }
   else if(tag.innerText == 'SUOMI'){
      newURL = `https://omarali18.github.io/themeholy_cleaning/suomi/${filename}`
   }
   else if(tag.innerText == 'SVENSKA'){
      newURL = `https://omarali18.github.io/themeholy_cleaning/svenska/${filename}`
   }
   window.location.href = newURL;
   tag.parentNode.classList.add('d-none');
}

window.onload = function() {
   var currentURL = window.location.href;
   let countryparent = document.querySelectorAll(".country-list")
   for (let i = 0; i < countryparent.length; i++) {
      let listParent = countryparent[i].querySelectorAll('li')
      listParent.forEach(li =>{
         console.log("all li = 111", li, li.innerText.toLowerCase());
         // if (li.innerText == "SUOMI") {
         if (currentURL.includes(li.innerText.toLowerCase())) {
            // console.log('test 111111111111111');
            langBtnName.textContent = li.innerText;
            li.classList.add("activeLang");
         }
         else{
            li.classList.remove("activeLang")
         }
      })
      console.log("The URL includes 'suomi'", countryparent[i], listParent);
      
   }
 };