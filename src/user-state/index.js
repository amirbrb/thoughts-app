const menuDefaults = '20px'

let menuBottom = localStorage.getItem('toats-floating-menu-bottom')
menuBottom = menuBottom || menuDefaults

let menuRight = localStorage.getItem('toats-floating-menu-right')
menuRight = menuRight || menuDefaults

let userMixin = {
  data: function () {
    return {
      menuPosition: {
        'bottom': menuBottom,
        'right': menuRight
      },
      userId: 777
    }
  }
}

export default userMixin
