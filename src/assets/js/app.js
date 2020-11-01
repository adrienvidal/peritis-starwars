const app = {
  desktopSize: window.matchMedia('(min-width: 768px)'),

  state: {
    isOpen: false
  },

  init () {
    this.navMobile()
    this.stickyImg()
  },

  navMobile () {
    const header = document.querySelector('header')
    const burgerMenu = document.querySelector('.burger-menu')
    const bodyTag = document.querySelector('body')

    const showMenu = (header, bodyTag) => {
      header.classList.add('active')
      bodyTag.style.overflow = 'hidden'
      this.state.isOpen = true
    }

    const closeMenu = (header, bodyTag) => {
      header.classList.remove('active')
      bodyTag.style.overflow = ''
      this.state.isOpen = false
    }

    burgerMenu.addEventListener('click', () => {
      if (!this.state.isOpen) {
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

  stickyImg () {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set('.game-desc-img', {
      scrollTrigger: {
        trigger: '.game-desc-img',
        start: 'top 80px',
        endTrigger: '.game-desc',
        end: 'bottom 80%',
        pin: true
      }
    })
  }
}

app.init()
