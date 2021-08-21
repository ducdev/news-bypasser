console.log('start')
let checks = 0
const interval = setInterval(() => {
  console.log('checking')
  checks += 1
  if (checks == 10) {
    clearInterval(interval)
    console.log('stopped checking, max 10 attempts')
  }
  let target = document.getElementById('gateway-content')
  if (target) {
    console.log('removed and stopped checking')
    target.remove()

    target = document.getElementById('app').childNodes[0].childNodes[0]
    target.className = ''

    target = target.lastChild
    target.className = ''
    clearInterval(interval)
  }
}, 500)