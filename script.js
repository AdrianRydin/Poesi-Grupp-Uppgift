var menuContainer = document.getElementById('menuContainer');

menuContainer.addEventListener('click', function(event) {
    var target = event.target;

    if (target.tagName === 'A') {
        alert('You clicked on a link');
    }
}