document.querySelector('.text.disasters p').addEventListener('click', function() {
    const menu = document.getElementById('disasterMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
