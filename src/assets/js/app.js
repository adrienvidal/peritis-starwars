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
      if (desktopSize.matches) {
        closeMenu(header, bodyTag)
      }
    })
  }
}

app.init()
