/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var onSubmitForm = function () {
    var removeClassFromElem = function(selector, className) {
        try {
            document.body.querySelector(selector).classList.remove(className)
        } catch (e) {

        }
    }

    const emailInput = document.body.querySelector('#emailAddress')
    if (emailInput.value && emailInput.value.includes('@')) {
        console.log('Sending email', emailInput.value)
        axios.post(
            'https://xenblocks.app/cardiolanaudiere/email',
            { email: emailInput.value },
            { headers: { 'Content-Type': 'Application/Json' }}
        )
            .then(function (response) {
                removeClassFromElem('#submitSuccessMessage', 'd-none')
            })
            .catch(function (error) {
                removeClassFromElem('#submitErrorMessage', 'd-none')
            });
    }
}
