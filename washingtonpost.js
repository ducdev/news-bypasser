console.log('start detecting washingtonpost.com\'s paywall')
let checks = 0
const interval = setInterval(() => {
  console.log('checking')
  checks += 1
  if (checks == 40) {
    clearInterval(interval)
    console.log('stopped checking, max 10 attempts')
  }
  let html = document.getElementsByTagName('html')[0]
  let body = document.getElementsByTagName('body')[0]
  if (html && html.style.overflow === 'hidden' && body && body.style.overflow === 'hidden') {
    console.log('removed and stopped checking')

    // https://i.imgur.com/jZro8kA.png
    html.style.overflow = 'scroll'
    html.style.height = 'auto'

    // https://i.imgur.com/LhjzI0C.png
    body.style.overflow = 'scroll'
    body.style.height = 'auto'
    body.style.position = 'static'

    // https://i.imgur.com/5dMxYFL.png
    let paywall = document.getElementsByClassName('paywall-overlay')[0]
    paywall.remove()
    clearInterval(interval)
  }
}, 250)