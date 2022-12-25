const inputs = document.querySelectorAll('input')

function claim() {
   function deletePrevElement() {
      const nodeList = document.querySelectorAll('.delete')
      for (let node of nodeList) {
         if (node !== null) {
            node.remove()
         }
      }
   }
   deletePrevElement()

   for (let input of inputs) {
      if (input.value === '') {
         input.style.marginBottom = 0
         input.style.border = '1px solid hsl(0, 100%, 74%)'
         input.placeholder = ''

         let iconDiv = document.createElement('div')
         iconDiv.setAttribute('class', 'delete')
         iconDiv.setAttribute('id', 'div-image')
         iconDiv.innerHTML = `<img src="./images/icon-error.svg" class="icon-error">`
         input.before(iconDiv)

         let text = document.createElement('p')
         text.setAttribute('class', 'delete')
         text.setAttribute('id', 'empty-input-error')
         input.after(text)

         if (input.id === 'first-name') {
            text.textContent = 'First Name cannot be empty!'
         } else if (input.id === 'last-name') {
            text.textContent = 'Last Name cannot be empty!'
         } else if (input.id === 'password') {
            text.textContent = 'Password cannot be empty!'
         } else {
            text.textContent = 'Looks like this is not an email'
            input.placeholder = 'email@example/com'
            input.setAttribute('class', 'email-color')
         }
      } else {
         input.style.border = '1px solid hsl(246, 25%, 77%)'
         input.style.marginBottom = '15px'
         if (input.id === 'first-name') {
            input.placeholder = 'First Name'
         } else if (input.id === 'last-name') {
            input.placeholder = 'Last Name'
         } else if (input.id === 'password') {
            input.placeholder = 'Password'
         } else {
            input.removeAttribute('class')
            input.placeholder = 'Email Address'
         }
      }
   }
}
