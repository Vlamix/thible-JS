const btnStart = document.getElementById('start')
const ball = document.getElementById('stone')
let round = 1
const arr = [
   document.getElementById('glass1'),
   document.getElementById('glass2'),
   document.getElementById('glass3'),
]

btnStart.addEventListener('click', () => {
   startGame(round)
   round++
})

function startGame(round) {
   arr.forEach((value) => {
      value.style.top = '44%'
   })

   rotate(round)
   round++
}

function rotate(round) {
   let random1 = Math.floor(Math.random() * 3)
   let random2 = Math.floor(Math.random() * 3)
   while (random1 === random2) {
      random2 = Math.floor(Math.random() * 3)
   }
   arr.forEach((value) => {
      value.style.transition = `left ${2 / (round / 2)}s`
   })

   let c = getComputedStyle(arr[random1]).left
   arr[random1].style.left = getComputedStyle(arr[random2]).left
   arr[random2].style.left = c
}
