


new Splide('#scroller', {
    type   : 'loop',
    drag   : 'free',
    focus    : 'center',
    autoWidth: true,
    perPage: 6,
    autoScroll: {
      speed: -0.6,
    },
    breakpoints: {
      1200: {
        perPage: 4, 
      },
      600: {
        perPage: 3, 
      },
      400: {
        perPage: 2, 
      },
      300: {
        perPage: 1, 
      },
    },
  }).mount(window.splide.Extensions);
  




  new Splide('#em-alta', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    speed: 1000,
  }).mount();





var splide2 = new Splide( '#recomendations', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,

  } );

  splide2.mount();


  var splide3 = new Splide( '#recomendations2', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
  } );

  splide3.mount();


var splide4 = new Splide( '#recomendations3', {
    type   : 'loop',
    perPage: 4,
    perMove: 1,
  } );

  splide4.mount();



class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, overlay, closeBtn) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.overlay = document.querySelector(overlay);
        this.closeBtn = document.querySelector(closeBtn);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    resetSidebarScroll() {
        const sidebar = document.querySelector('.categories');
        sidebar.scrollTop = 0;
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            if (this.navList.classList.contains(this.activeClass)) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                link.style.animation = ""; // Reset animation when menu is closed
                link.style.opacity = ""; // Reset opacity to initial state
                link.style.transform = ""; // Reset transform to initial state
            }
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.overlay.classList.toggle(this.activeClass);
        this.animateLinks();

        this.resetSidebarScroll();

        
    }

    handleCloseClick() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
        this.overlay.classList.remove(this.activeClass);
        this.animateLinks(); // Ensure animation reset when clicking close


    }

    handleClickOutside(event) {
        if (!this.navList.contains(event.target) && !this.mobileMenu.contains(event.target)) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
            this.overlay.classList.remove(this.activeClass);
            this.animateLinks(); // Ensure animation reset when clicking outside
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        this.closeBtn.addEventListener("click", this.handleCloseClick);
        document.addEventListener("click", this.handleClickOutside);
    }

    removeClickEvent() {
        this.mobileMenu.removeEventListener("click", this.handleClick);class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
        
    }

    handleClickOutside(event) {
        if (!this.navList.contains(event.target) && !this.mobileMenu.contains(event.target)) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        document.addEventListener("click", this.handleClickOutside);
    }

    removeClickEvent() {
        this.mobileMenu.removeEventListener("click", this.handleClick);
        document.removeEventListener("click", this.handleClickOutside);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();

        this.closeBtn.removeEventListener("click", this.handleCloseClick);
        document.removeEventListener("click", this.handleClickOutside);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li:not(.close-btn)", // Exclua o botão de fechamento dos links animados
    ".overlay",
    ".close-btn" // Seletor para o botão de fechamento
);
mobileNavbar.init();


