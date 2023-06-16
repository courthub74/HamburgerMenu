console.log("Hello");
window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    // Query the hamburger menu and store it in a variable
    const menu_btn = document.querySelector('.hamburger');

    // Query the mobile navbar and store it in a variable
    const mobile_menu = document.querySelector('.mobile-nav');

    // add event listener to the hamburger
    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}