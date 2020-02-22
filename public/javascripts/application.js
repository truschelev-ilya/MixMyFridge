const add = document.querySelector('.add')
const list = document.querySelector('.lists')
const inputs = document.querySelector('.inputs')
const mixMyFridge = document.querySelector('#mix')
const find = document.querySelector('#find')
const spoilerfind = document.querySelector('.spoilerfind')
const spoilermix = document.querySelector('.spoilermix')
const submitButton = document.querySelector('.submitbutton')

find && find.addEventListener('click', (e) => {
  e.preventDefault();
  if (spoilerfind.style.display === '' || spoilerfind.style.display === 'none') {
    spoilerfind.style.display = 'block'
  } else {
    spoilerfind.style.display = 'none'
  }
})

mixMyFridge && mixMyFridge.addEventListener('click', (e) => {
  e.preventDefault();
  if (spoilermix.style.display === '' || spoilermix.style.display === 'none') {
    spoilermix.style.display = 'block'
  } else {
    spoilermix.style.display = 'none'
  }
})


add && add.addEventListener('click', (e) => {
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


