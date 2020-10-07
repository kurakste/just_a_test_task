const input = document.getElementById('urlInput')
const button = document.getElementById('requestButton')
const cssDiv = document.getElementById('cssUl')
const jsDiv = document.getElementById('jsUl')

function onButtonClick() {
  const requestString = `get-css-links?addr=${input.value}`
  cssDiv.innerHTML = ''
  jsDiv.innerHTML = ''
  fetch(requestString)
    .then(resp => resp.json())
    .then(data => {
      const { status, payload, errorMessage } = data
      const { cssLinks, jsLinks } = payload
      if (status === 'error') {
        addAlertMessage(errorMessage)
      } else {
        cssDiv.innerHTML = getTemplate(cssLinks)
        jsDiv.innerHTML = getTemplate(jsLinks)
      }
    })
}

function getTemplate(data) {
  return data
    .map(el => `<li class="list-group-item">${el}</li>`)
    .join('')
}

function addAlertMessage(errMsg) {
  const parent = document.getElementById('divForMessage')
  const el = document.createElement('div')
  el.innerHTML = `<div class="alert alert-danger" role="alert">${errMsg}</div>`
  parent && parent.appendChild(el)
  let intervalId
  let counter = 100
  const removeElement = () => {
    --counter
    el.style.opacity = `${counter}%`
    if (counter <= 0) {
      clearInterval(intervalId)
      el.remove()
    }
  }
  intervalId = setInterval(removeElement, 35)
}

button.onclick = onButtonClick
