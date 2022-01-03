let week = document.querySelector(`.row`)
let schedule = document.querySelector(`.daily-schedule`)
let dayArr = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  `SUNDAY`,
]

function createDay(obj) {
  return `<article class="scheduleTemplate ">
    <h2> <b  class=text-color>Exercise:</b> ${obj.exercise}</h2>
    <small><b class=text-color>Sets:</b> ${obj.sets}</small>
    <p><b  class=text-color>Reps:</b> ${obj.reps}</p>
</article>
`
}

let daysStr = []
scheduleObject.forEach((days, index) => {
  const arr = days.map((day) => {
    return createDay(day)
  })
})

schedule.innerHTML = daysStr.join('')

week.addEventListener('click', (e) => {
  const { target } = e

  if (target.classList.contains('day')) {
    const day = target.innerText

    let index = dayArr.indexOf(day)
    let daysArr = scheduleObject[index]

    const arr = daysArr.map((day) => {
      return createDay(day)
    })
    
    schedule.innerHTML = arr.join('')
  }

  console.log(target)
})
