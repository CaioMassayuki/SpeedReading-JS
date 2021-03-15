;(function () {
  'use strict'
  const _reader = document.getElementById('reader')
  const _book = document.getElementById('book')
  const _btnStart = document.getElementById('startReading')
  const _btnStop = document.getElementById('stopReading')


  let partBook = []
  let readingTime
  _btnStart.addEventListener('click', () => {
    const fullBook = _book.value
    partBook = fullBook.split(/\s/gim)
    readingTime = setInterval(() => {
      console.log(partBook[0])
      if(partBook.length !== 0){
        _reader.textContent = partBook.shift()
      } else {
        clearInterval(readingTime)
      }
    }, 200)
  })

  _btnStop.addEventListener('click', () => {
    clearInterval(readingTime)
  })
  
})()
