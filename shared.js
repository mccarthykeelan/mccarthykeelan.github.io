var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


backdrop.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    closeBackdrop();
});

function closeBackdrop() {
    backdrop.style.display = "none";
}

toggleButton.addEventListener('click', function() {
   mobileNav.style.display = 'block';
   backdrop.style.display = 'block';
});

console.log("test");