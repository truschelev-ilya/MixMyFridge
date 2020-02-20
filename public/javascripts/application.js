const add = document.querySelector('.add')
const inputList = document.querySelector('list')
const inputs = document.querySelector(".inputs")
const mixMyFridge = document.querySelector('#mix')
const spoiler = document.querySelector('.spoiler')


mixMyFridge.addEventListener('click', (e) => {
e.preventDefault();
if(spoiler.style.display === '' || spoiler.style.display === 'none') {
  spoiler.style.display = 'block'
}else{
  spoiler.style.display = 'none'
  }
})

// document.querySelector('#mix').addEventListener('click', (element) => {
//   element.preventDefault()

// })

add.addEventListener('click', (e) => {
e.preventDefault();
let completedInput = document.querySelector(".new")
inputs.innerHTML += `<input type="text" class="form-control list" aria-describedby="button-addon2" value="${completedInput.value}" readonly>`
completedInput.value = ""
})

if (inputList){

}
