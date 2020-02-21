const add = document.querySelector('.add')
const list = document.querySelector('.list')
const inputs = document.querySelector('.inputs')
const mixMyFridge = document.querySelector('#mix')
const spoiler = document.querySelector('.spoiler')
const submitButton = document.querySelector('.submitbutton')

mixMyFridge.addEventListener('click', (e) => {
  e.preventDefault();
  if (spoiler.style.display === '' || spoiler.style.display === 'none') {
    spoiler.style.display = 'block'
  } else {
    spoiler.style.display = 'none'
  }
})

// document.querySelector('#mix').addEventListener('click', (element) => {
//   element.preventDefault()

// })

add.addEventListener('click', (e) => {
  e.preventDefault();
  let completedInput = document.querySelector(".new")
  if(completedInput.value.length>0){
  inputs.innerHTML += `<input type="text" name="ingredient" class="form-control list" aria-describedby="button-addon2" value="${completedInput.value}" readonly>`
  }
  if (list.length === 1) {
    submitButton.innerHTML = `<input type="submit" class="btn btn-primary btn-sm" value="MiX">`
  }
  completedInput.value = ""
})

document.addEventListener('submit', async (e) => {
  console.log(e.target.ingredients)
  const response = await fetch('mix', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })
})

// document.querySelector('#random').addEventListener('click', async (e) => {
//   e.preventDefault()

// const response = await fetch('/random', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json' 
//   }
// })

//   // const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//   // const data = await response.json()
//   // const meal = data.meals[0];
// })
