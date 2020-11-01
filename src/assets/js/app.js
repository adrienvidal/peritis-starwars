const app = {
  desktopSize: window.matchMedia('(min-width: 768px)'),

  state: {
    navMobileIsOpen: false
  },

  init () {
    gsap.registerPlugin(ScrollTrigger)

    this.navMobile()
    this.sectionIntro()
    this.sectionGame()
    this.sectionBanner()
  },

  navMobile () {
    const header = document.querySelector('header')
    const burgerMenu = document.querySelector('.burger-menu')
    const bodyTag = document.querySelector('body')

    const showMenu = (header, bodyTag) => {
      header.classList.add('active')
      bodyTag.style.overflow = 'hidden'
      this.state.navMobileIsOpen = true
    }

    const closeMenu = (header, bodyTag) => {
      header.classList.remove('active')
      bodyTag.style.overflow = ''
      this.state.navMobileIsOpen = false
    }

    burgerMenu.addEventListener('click', () => {
      if (!this.state.navMobileIsOpen) {
        showMenu(header, bodyTag)
      } else {
        closeMenu(header, bodyTag)
      }
    })

    window.addEventListener('resize', () => {
      if (this.desktopSize.matches) {
        closeMenu(header, bodyTag)
      }
    })
  },

  sectionGame () {
    gsap.set('.game-desc-img', {
      scrollTrigger: {
        trigger: '.game-desc-img',
        start: 'top 80px',
        endTrigger: '.game-desc',
        end: 'bottom 80%',
        pin: true
      }
    })
  },

  sectionIntro () {
    const tl = gsap.timeline()
    gsap.set('.logo', {
      opacity: 1
    })
    tl.from('.logo', {
      duration: 2,
      opacity: 0,
      scale: 0,
      onComplete: () => {
        this.parallaxAnimation('.intro', 'top')
      }
    })
  },

  sectionBanner () {
    this.parallaxAnimation('.banner', 'bottom')
  },

  parallaxAnimation (section, startPos) {
    gsap.utils.toArray(`${section} .parallax`).forEach((layer) => {
      const rate = layer.dataset.rate
      const pos = layer.offsetHeight * rate

      gsap.to(layer, {
        scrollTrigger: {
          trigger: section,
          start: `top ${startPos}`,
          scrub: true
        },
        y: pos,
        ease: 'none'
      })
    })
  },

  hideLoader () {
    const preloader = document.querySelector('.preloader')
    gsap.to('.preloader-icon', {
      opacity: 0,
      ease: 'none',
      duration: 2
    })
    gsap.to(preloader, {
      opacity: 0,
      ease: 'none',
      duration: 2,
      delay: 1,
      onComplete: () => {
        app.init()
        preloader.style.display = 'none'
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  app.hideLoader()
})
