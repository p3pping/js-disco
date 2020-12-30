function randBgColor() {
    randHexInt = () => { return (parseInt(Math.random()*15)) }
    r1 = randHexInt().toString(16)
    r2 = randHexInt().toString(16)
    b1 = randHexInt().toString(16)
    b2 = randHexInt().toString(16)
    g1 = randHexInt().toString(16)
    g2 = randHexInt().toString(16)
    return `#${r1}${r2}${b1}${b2}${g1}${g2}`
}

function disco() {
  let elems = document.getElementsByTagName('*')
  let windowWidth = window.innerWidth/8
  let windowHeight = window.innerHeight/8
  for(let elem of elems) {
    elem.style.background = randBgColor()
    elem.style.color = randBgColor()
    elem.style.position = 'absolute'
    elem.style.width =`${Math.random()* windowWidth}px`
    elem.style.height =`${Math.random()* windowHeight}px`
    elem.style.left = `${Math.random()* windowWidth}px`
    elem.style.top = `${Math.random()* windowHeight}px`
    elem.style.display = 'block'
  }
  setTimeout('disco()', 1)
}

window.addEventListener('load', disco)