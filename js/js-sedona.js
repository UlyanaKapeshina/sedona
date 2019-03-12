var link = document.querySelector(".open-form");
var popup = document.querySelector(".modal-appointment-form");
// var close = popup.querySelector(".modal-close");
var datearrival = popup.querySelector("[name=date-arrival]");

var datedeparture = popup.querySelector("[name=date-departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");        
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("modal-hidden");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  datearrival.focus();

  if (storageAdults) {
    adults.value = storageAdults;
    }    
 

 if (storageChildren) {
    children.value = storageChildren;
   }    
 });

popup.addEventListener("submit", function (evt) {
  if (!datearrival.value || !datedeparture.value || !adults.value || !children.value ) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value); 
      localStorage.setItem("children", children.value);      
    }
  }    
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})