import string from './css'

const player = {
  ui: {
    styleTag: document.querySelector('#styleTag')
  },
  id: undefined,
  time: 5,
  n: 1,
  init: () => {
    player.ui.styleTag.innerHTML = string.substr(0, player.n)
    player.eventsOnclick()
    player.play()
  },
  events: {
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  eventsOnclick: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }

  },
  describe: {
    'tou': '首先我们来画头部(￣▽￣)")',
    'shen': '接着画身体部分(･ェ･。)',
    'shou': '然后画手部ヾ(=･ω･=)o',
    'jiao': '最后画脚部，就大功告成(*ﾟ∇ﾟ)',
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    const TipsHtml = document.querySelector('.Tips')
    const styleString = string.substr(0, player.n)
        for (let key in player.describe) {
            if (styleString.indexOf(key) >= 0) {
                TipsHtml.innerText = player.describe[key]
              styleString.replace(key,'')
            }
        }
    player.ui.styleTag.innerHTML = string.substr(0, player.n)
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  normal: () => {
    player.pause()
    player.time = 50
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }

}
player.init()




