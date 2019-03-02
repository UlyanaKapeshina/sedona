body {
    margin: 0;
    padding: 0;

    font-family: "PT Sans", Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #000000;
    text-transform: uppercase;

    background-color: #f2f2f2;
}

a {
    text-decoration: none;
}

.button {
    font: inherit;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    border: none;

      
} 

.blue-button {
    background-color: #81b3d2;   
}
.blue-button:hover {
    background-color: #699ec0;
} 
.blue-button:active {
    background-color: #5496bd;
    color: #88b6d1;
}
.brown-button {
    background-color: #766357;  
}
.brown-button:hover {
    background-color: #604e43;
} 
.brown-button:active {
    background-color: #503e33;
    color: #857871;
}

.main-navigation {
    font-size: 14px;
    line-height: 26px;
    color: #000000;
    font-weight: 700;
    
    background-color: #ffffff;
}

.site-navigation {
    list-style: none;
}

a.link {
    color: #000000;
}

a.link:hover {
    color: #81b3d2;
}

a.link:active {
    color: #b2b2b2;
}

a.active {
    color: #766357;
}

.welcome {
    background-image: url("../img/bg.jpg");
    background-repeat: no-repeat;
}
/* .mask {
    background-image:

} */

.features-head {
    line-height: 26px;
    text-align: center;

    background-color: #ffffff;
}
.features-head strong {
    font-size: 21px;
}

.features-list,
.features-of-city-list {
    list-style: none;
}
.features-item {    
    line-height: 21px;  
    text-align: center;
}
.features-item h3 {
    font-size: 21px;
}
.devils-bridge-feature,
.city-feature  {
    color: #ffffff;
    background-color: #81b3d2;
}
.features-of-city-list {
    background-color: #ffffff;

}
.features-of-city-list h4 {
    font-size: 21px;
}

.appointment-info {
    background-color: #ffffff;
    text-align: center;
    
}
.appointment strong {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
}
.appointment-info p{
    line-height: 24px;
}
.appointment a {
    font-size: 21px;
    line-height: 26px;
    font-weight: 700;
}

.appointment-form {
    background-color: #ffffff;
}    
.appointment-item {
    line-height: 26px;
    font-weight: 700;
}
 .appointment-item input[type="text"] {
    background-color: #f2f2f2;

    color: #000000;
    font: inherit;
    text-transform: uppercase;
    line-height: 26px;
    font-weight: 700;
    border: 2px solid #f2f2f2;
}

.appointment-item input:hover,
.appointment-item input:focus {

    background-color: #ebebeb; 
}

.appointment-item input:active {
    background-color: #ffffff;
    border-color: #e5e5e5;
}



button.search {
    font-size: 21px;
    line-height: 26px;
}

/* .appointment-item button {
     background-color: #f2f2f2;
} */

.filter fieldset {
    border: none;
}

.filters {
    background-image: url("../img/filter background.jpg");
    background-repeat: no-repeat;
}

.filter legend {
    font-size: 16px;
    color: #ffffff;
}

.filter-option {
    color: #ffffff;
    list-style: none;
}

.price-controls {
    color: #ffffff;
}
.price-controls input[type="text"] {
    color: #ffffff;
    border: 2px solid #ffffff;
    background-color: transparent       /*этот цвет здесь пока не понятно как сделать фон прозрачным */

}

.filter button {
    background-color: transparent;               /*этот цвет здесь  пока не понятно как сделать фон прозрачным */
    border: 2px solid #ffffff;
    font-weight: 400;    
}

.filter button:hover {
    background-color: #ffffff;
    color: #000000;
}

.catalog-item {
    background-color: #ffffff;
    list-style: none;
    }

.hotel-info h3 {
    font-size: 21px;
    line-height: 26px;
    font-weight: 700;
}  


.rating {
    text-align: center;
    background-color: #f2f2f2;
}

.main-footer {
    background-color: #f9fbf6; /*сделать прозрачным */
}
.catalog-footer {
    background-color: #ffffff;
}
.footer-link a {
    font-size: 21px;
    line-height: 26px;
    font-weight: 700;
    color: #000000;
}
.footer-social {
   list-style: none;
}

.footer-copyright p {
    line-height: 26px;
}
.footer-copyright a {
    
}







/* СЕТКА */

/* body { margin: 0 }
img { max-width: 100% }
a { text-decoration: none }

.feedback { color: black }
.feedback ul { list-style: none }
.feedback p { margin-bottom: 0 }

html { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }


.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.container {
    width: 1200px;
    margin: 0 auto;    
}

.site-navigation {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 14px 73px 16px 73px;

    list-style: none;
} */







/* ГЛАВНАЯ СТРАНИЦА */

.welcome {
    display: flex;
    flex-direction: column;
    align-items: center; 
    position: relative;  
}





.features-head {
    
}

.features-head strong { 
        
}












.appointment-info {
        
}

.appointment-info strong {
   
}

.appointment-info p{}
    
    



.appointment-form {
  
}

.appointment-form {
    
}
.appointment-item {
   
    
}

.appointment-item input{
    display: inline-block;
    width: 344px;
    padding: 4px;
}










/* ФУТЕР */

.main-footer {
     
       
}





.footer-social {
    
}






/* Каталог */







.catalog-item {
    
}



.hotel-info h3 {
    
}








.filter-option {
    /* background: rgba(0, 128, 0, 0.2);
    box-shadow: 0 0 0 3px green; */
    
    
}



  





















/* СЕТКА */

body { margin: 0 }
img { max-width: 100% }
a { text-decoration: none }

.feedback { color: black }
.feedback ul { list-style: none }
.feedback p { margin-bottom: 0 }

html { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }


.visually-hidden:not(:focus):not(:active),
input[type="checkbox"].visually-hidden,
input[type="radio"].visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;

  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.container {
    width: 1200px;
    margin: 0 auto;    
}

.site-navigation {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 14px 73px 16px 73px;

    list-style: none;
}

.site-navigation li {
    width: 25%;
}

.site-navigation li:nth-child(2) {
    text-align: left;
}

.site-navigation li:nth-child(3),
.site-navigation li:nth-child(4) {
    text-align: right;
}

.main-header {
    position: relative;
}

.main-header-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 140;
    height: 71;
    z-index: 10;
}



/* ГЛАВНАЯ СТРАНИЦА */

.welcome {
    display: flex;
    flex-direction: column;
    align-items: center; 
    position: relative;  
}

.welcome p {
    padding: 0;
    margin: 75px 0 82px 0;    
}

.welcome::after {
    content: "";
    position: absolute;
    width: 1200px;
    height: 59px;
    bottom: -2px;
    

    background-color: transparent;
    background-image: url("../img/polygon.svg");
    background-repeat: no-repeat;    
}

.features {
    display: flex;
    flex-direction: column;
}

.features-head {
    padding: 60px 310px 51px 310px;
}

.features-head strong { 
    margin: 0;   
    margin-bottom: 27px;
    display: block;    
}
.features-head p {
    margin: 0;
}

.features-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

    list-style: none;
}

.feature {
    width: 400px;
    padding-top: 47px;
    padding-bottom: 37px;
    padding-left: 45px;
    padding-right: 45px;  
    margin: 0; 
}

.feature h3,
.features-of-city-item h4 {
    width: 151px;     
    margin: 0 auto;
    margin-bottom: 23px;
}



.feature p,
.features-of-city-item p {
    padding: 0;
    margin: 0;
    margin-bottom: 22px; 
}

.features-item img {
    display: block;
    padding: 0;
    margin: 0;
}
.image-feature {
    padding: 0;
    margin: 0;
}

.city {
    display: flex;
    padding: 0;
    margin: 0;
}

.features-of-city-list {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
}

.features-of-city-item {
    width: 33.33333%;
    padding: 161px 45px 61px 45px; 
    position: relative;   
}
.features-of-city-item::before {
    content: "";
    position: absolute;
    height: 76px;
    width: 76px;
    bottom: 197px;
    margin-left: -38px;

    background-color: transparent;
    background-image: url("../img/icon-1.svg");
    background-repeat: no-repeat;    
}

.food::before {
    background-image: url("../img/icon-3.svg");
}
.souvenirs::before {
    background-image: url("../img/icon-2.svg");
    margin-left: -32px;
}

.features-item-bridge {
    display: flex;
    flex-direction: row-reverse;
    padding: 0;
    margin: 0;
}

.appointment-info {
    padding-top: 50px;    
}

.appointment-info strong {
    display: block;
    margin: 0 auto;
    margin-bottom: 24px;
}

.appointment-info p{
    
    width: 438px;
    margin: 0 auto;
    margin-bottom: 28px;
}

.open-form {
    display: inline-block;
    width: 568px;
    padding: 30px 134px;
}

.appointment-form {
    width: 568px;
    margin: 0 auto;
    padding: 55px;
    display: block;
    position: absolute;
    z-index: 10;
    left: 50%;
    margin-left: -284px;   
      
}

.appointment-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}
.appointment-item {
    padding: 0;
    margin: 0;
    margin-bottom: 30px;
    display: flex;
    
}

.appointment-item input{
    display: inline-block;
    width: 344px;
    padding: 4px;
}

.appointment-item-adults input,
.appointment-item-children input {
    width: 115px;
    padding-left: 38px;
    padding-right: 38px;
    text-align: center;
    position: relative;
}


.calendar {
    position: absolute;
    
    width: 38px;
    height: 38px;
    margin-left: 420px;    

    display: flex;
    justify-content: center;
    align-items: center;
    fill: #b2b2b2;
    outline: none;
    background-color: transparent;
}

.calendar:hover,
.calendar:focus {
    fill: black;
    background-color: transparent;
    cursor:pointer;
}

.calendar:active {
    fill: #81b3d2; 
    background-color: transparent;
    cursor:pointer;
}

button.minus {
    position: absolute;
   
    width: 38px;
    height: 38px;
    margin-left: 114px;
    z-index: 10;
    cursor:pointer;
    outline: none;  
    background-color:  transparent; 
}

button.minus::after{
    content: "";
    position: absolute;
    width: 12px;
    height: 3px;
    background-color: #b2b2b2;
    transform: translate(-50%, -50%);
}

button.plus {
    position: absolute;    
    width: 38px;
    height: 38px;
    margin-left: 191px;   
    outline: none;
    cursor: pointer;
    background-color:  transparent;
}   

button.plus::after{
    content: "";
    position: absolute;
    width: 12px;
    height: 3px;
    background-color: #b2b2b2;
    transform: translate(-50%, -50%);
}
button.plus::before{
    content: "";
    position: absolute;
    width: 3px;
    height: 12px;
    background-color: #b2b2b2;
    transform: translateX(-50%) translateY(-50%);
}

button.plus:hover::after,
button.plus:hover::before,
button.minus:hover::after,
button.plus:focus::after,
button.plus:focus::before,
button.minus:focus::after {
    background-color: black;
}

button.plus:active::after,
button.plus:active::before,
button.minus:active::after {
    background-color: #81b3d2; 
}

.appointment-item label {
    width: 114px;
    display: inline-block; 
    padding: 6px 0;   
}

.appointment-item-children label {
    padding-right: 27px;
    text-align: right;
}


 button.search {
    width: 458px;
    padding: 16px;
    text-align: center; 
    margin-top: 24px;
    cursor: pointer;
     
}


.modal-map {
    padding: 0;
    margin: 0;
    position: relative;
}
.modal-map p {
    padding: 0;
    margin: 0;
}





/* ФУТЕР */

.main-footer {
    display: flex;
    align-items: center;  
       
}

.main-footer-index {
    opacity: 0.9;  
    position: relative;
    z-index: 10;
    margin-top: -120px;  
}

.footer {
    width: 400px;
    text-align: center;

    padding: 0;
    margin: 0;    
}

.footer-social {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 150px;
}

.social-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    margin: 36px 0;    
}

.social-button:active path{
    fill: #88b6d1;

}
.footer-copyright {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-copyright p {
    margin: 0 8px;
}

.footer-copyright a  {
    width: 115px;
    height: 41px;    
}

.footer-copyright a path {
    fill: black;
}

.footer-copyright a:hover path {
    fill: #81b3d2;
}

.footer-copyright a:active path {
    fill: #b2b2b2;
}





/* Каталог */




.catalog-list {   
    padding: 0;
    margin: 0;
  
    list-style: none;
}


.catalog-item {
    display: flex;
    align-items: flex-end;
    padding-left: 73px;
    padding-right: 73px;
    padding-bottom: 30px;
    padding-top: 25px;
    border-bottom: 1px solid #e5e5e5;
}

.hotel-image  {
    margin: 0;
    margin-right: 30px;    
}

.hotel-image img{
    display: block;
    padding: 0;
    margin: 0;
}

.hotel-info h3 {
    margin: 0;
    margin-bottom: 6px;
}

.hotel-info p {
    margin: 0;
    margin-bottom: 15px;
    width: 116px;
    display: inline-block;
}

.buttons .blue-button {
    display: inline-block;
    padding: 3px 19px 3px 17px;
    margin-right: 2px;
}
.buttons .brown-button {
    display: inline-block;
    padding: 3px 16px 3px 17px;
}

.hotel-rating {
    margin-left: auto;
    padding-top: 4px;    
}

.hotel-rating p {
    display: block;
    padding: 0;
    margin: 0;

}

p.stars {
    width: 90px;
    height: 16px;
    background-image: url("../img/stars.png");
    margin-bottom: 47px;
    margin-left: auto;
}

p.desert-stars {
    width: 65px;
}

p.villas-stars {
    width: 41px;
}


p.rating {
    padding: 2px 16px 3px 13px; 
}





.filter {
    display: flex;    
    padding: 27px 73px 31px 73px;
}

.filter-column {
    width: 240px;
    padding: 0;
    margin: 0;
}

.price-column {
    width: 319px;
    padding: 0;
    margin: 0;
    margin-left: auto;   
}


.filter-column legend {
    margin-bottom: 23px;
}
.filter ul {
    padding: 0;
    margin: 0;
}
.filter-option {
    /* background: rgba(0, 128, 0, 0.2);
    box-shadow: 0 0 0 3px green; */
    
    margin-bottom: 23px;
    padding-left: 40px;
}

.filter-option label {
    position: relative;  
    display: block; 
    cursor: pointer;
  user-select: none;
     
}

.filter-input-checkbox + label::before {
    content: "";
    position: absolute;
  
    width: 23px;
    height: 23px;
    background-image: url("../img/checkbox-off.svg");
  
   
    left:-40px;
    top: 0;
  }

.filter-input-checkbox:checked + label::after{
    content: "";
    position: absolute;
  
    width: 27px;
    height: 23px;
    left:-40px;
    top: 0;
    
    background-image: url("../img/checkbox-on.svg")
}

  