var check = document.querySelector('#burger');
var ulMenu = document.querySelector('#ulMenu');

check.addEventListener('click', function() {
    
    if(ulMenu.style.display === 'block') {
        ulMenu.style.display = 'none';
}       else {
        ulMenu.style.display = 'block'
}

});