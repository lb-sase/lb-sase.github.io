
// code executes on window load 
window.onload = function() {

    // first command that'll be run :)
    console.log("the entire page has loaded!");

    // added functionality to detect which page the user is on so that can be a global js file 
    const currentPath = window.location.pathname;
    let actual_path = currentPath.substring(currentPath.lastIndexOf('/'), currentPath.length);

    if (actual_path == "/index.html" || actual_path == "/") {
        document.getElementById('landing-page-inner').classList.add('revealed');

        document.onscroll = function() {
            if (window.innerHeight + window.scrollY >= document.body.clientHeight) {
                const element = document.getElementById("scroll-down-container");
                element.classList.add("fade-out");
            } else {
                const element = document.getElementById("scroll-down-container");
                element.classList.remove("fade-out");
            }
        }
    }

    // navbar reveal/disappear on menu button press 
    const menu = document.getElementById("bi-list");
    const navbar = document.getElementById("sase-navbar-cntr");
    let clicker = 0;
    
    menu.addEventListener('click', () => {
        clicker++;
        if (clicker % 2 == 1) { // shown
            navbar.style.display = 'flex';
            navbar.style.animation = 'slide-in 1s';
        } else { // hidden
            navbar.style.display = 'none';
            navbar.style.animation = 'none';
        }
    })

    // observing #sase-info
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // header is in the viewport, animate svg
                const path = document.getElementById("ul-stroke-path");
                path.style.animation = "draw 2.5s ease-in-out forwards";
                console.log('AHHHHHHHHH');
            }
        });
    });

    const targetElement = document.getElementById('sase-info-header');
    observer.observe(targetElement);
};
