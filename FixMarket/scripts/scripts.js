//doors zoom in gallery
document.addEventListener('DOMContentLoaded', function() {
    var imgs = document.querySelectorAll('img');
    Array.prototype.forEach.call(imgs, function(el, i) {
        if (el.tabIndex <= 0) {
            el.tabIndex = 10000;
        }
    });
});



// drop-down menu
function dropdwn(){
    this.nextElementSibling.classList.toggle("show");
}


// Close the drop-down if the user clicks outside of it

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
//drop-down execute
document.addEventListener('DOMContentLoaded', function () {
    var lists = document.querySelectorAll('.menu');

    for (var i = 0; i < lists.length; i++) {

        lists[i].addEventListener('click', dropdwn);

    }

});