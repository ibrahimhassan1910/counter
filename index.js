const button = document.getElementById('CountButton')
const count = document.getElementById('Count')
const dlt = document.getElementById('deleteButton')

let counter = ''

button.addEventListener('click',
  function(){
    counter++
    count.textContent =`count : ${ counter}`
    if(counter===10){
      //alert('reached maximum')
      button.disabled = true   // Disable the button if counter reaches 10
    }
    if(counter === 1){
      dlt.disabled = false
    }
  }
)
dlt.addEventListener('click',
  function(){
    if(counter > 0){
      counter--
      count.textContent =`count :${ counter}`
      if(counter <= 9){
        button.disabled=false
      }
    }else{ 
      //alert('Counter cannot go below 0')  // Show alert if counter reaches 0
      dlt.disabled = true   // Disable the delete button if counter reaches 0
    }
  }
)
