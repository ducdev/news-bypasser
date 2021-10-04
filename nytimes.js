console.log('start detecting nytimes.com\'s paywall')
let checks = 0
// Save the full content before it's truncated
const contentElement = document.getElementsByClassName('meteredContent')[0]
const fullContent = contentElement.innerHTML

const interval = setInterval(() => {
  console.log('checking')
  checks += 1
  if (checks == 40) {
    clearInterval(interval)
    console.log('stopped checking, max 40 attempts')
  }
  let target = document.getElementById('gateway-content')
  if (target) {
    console.log('removed and stopped checking')
    target.remove()

    target = document.getElementById('app').childNodes[0].childNodes[0]
    target.className = ''

    target = target.lastChild
    target.className = ''

    // Restore the full content of the article
    contentElement.innerHTML = fullContent
    clearInterval(interval)
  }
}, 250)