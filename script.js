;(function () {
  'use strict'
  const _reader = document.getElementById('reader')
  const _book = document.getElementById('book')
  const _btnStart = document.getElementById('startReading')


  let partBook = []
  _btnStart.addEventListener('click', () => {
    const fullBook = _book.value
    partBook = fullBook.split(/\s/gim)
  })

  const readingTime = setInterval(() => {
    _reader.textContent = partBook.shift()
  }, 200)
  
})()
