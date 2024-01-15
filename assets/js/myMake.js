
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

const selectLang = (tag) =>{
   tag.parentNode.querySelector(".activeLang").classList.remove("activeLang");
   tag.classList.add("activeLang");
   tag.parentNode.parentNode.children[0].children[0].textContent = tag.innerText;
   tag.parentNode.classList.add('d-none');
}