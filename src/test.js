import string from './css'

const player = {
    ui: {
        demo: document.querySelector('#demo'),
        styleTag: document.querySelector('#styleTag')

    },
    id: undefined,
    time: 5,
    n: 1,
    init: () => {
        // player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.styleTag.innerHTML = string.substr(0, player.n)
        player.eventsOnclick()
        player.play()
    },
    events: {
        // '#btnPause': 'pause',
        // '#btnPlay': 'play',
        '#btnSlow': "slow",
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
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.styleTag.innerHTML = string.substr(0, player.n)
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 200
        player.play()
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




