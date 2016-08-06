/**
 * Created by Yavor Vasilev on 8/1/2016.
 */
//header test
// function myAlert(){
//     var a = document.getElementById("test");
//     a.classList.toggle("first");
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('test').addEventListener('click', myAlert);
// });



// drop-down menu
function dropdwn(){
    this.nextElementSibling.classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it

 window.onclick = function(e) {
     if (!e.target.matches('.menu')) {

         var dropdowns = document.getElementsByClassName("dropdown-content");
         for (var d = 0; d < dropdowns.length; d++) {
             var openDropdown = dropdowns[d];
             if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
             }
         }
     }
 };

document.addEventListener('DOMContentLoaded', function () {
    var lists = document.querySelectorAll('.menu');

    for (var i = 0; i < lists.length; i++) {

        lists[i].addEventListener('click', dropdwn);

    }

});


//---------------------------------------------------------
/*
 function dropdwn1(){
 var menu = document.getElementById("menu-content1");
 menu.classList.toggle("show");
 }

 document.addEventListener('DOMContentLoaded', function () {
 document.getElementById('menu1').addEventListener('click', dropdwn1);
 });
 */
