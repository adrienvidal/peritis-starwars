const app = {
  state: {
    isOpen: false
  },

  init () {
    this.navMobile()
  },

  navMobile () {
    const header = document.querySelector('header')
    const burgerMenu = document.querySelector('.burger-menu')
    const bodyTag = document.querySelector('body')
    const desktopSize = window.matchMedia('(min-width: 768px)')

    burgerMenu.addEventListener('click', () => {
      if (!this.state.isOpen) {
        this.showMenu(header, bodyTag)
      } else {
        this.closeMenu(header, bodyTag)
      }
    })

    window.addEventListener('resize', () => {
      if (desktopSize.matches) {
        this.closeMenu(header, bodyTag)
      }
    })
  },

  showMenu (header, bodyTag) {
    header.classList.add('active')
    bodyTag.style.overflow = 'hidden'
    this.state.isOpen = true
  },

  closeMenu (header, bodyTag) {
    header.classList.remove('active')
    bodyTag.style.overflow = ''
    this.state.isOpen = false
  }
}

app.init()
