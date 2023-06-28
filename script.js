
document.getElementsByClassName('btn')[0].addEventListener('click', () => {
     // variables
     let expense = document.getElementById('expense')
     let desc = document.getElementById('desc')
     let category = document.getElementById('category')
     let list = document.createElement('p')

     // edit button
     let editBtn = document.createElement('button')
     editBtn.textContent = 'Edit'
     editBtn.className = 'btn btn-light btn-sm'

     // delete button
     let deleteBtn = document.createElement('button')
     deleteBtn.textContent = 'Delete'
     deleteBtn.className = 'btn btn-danger btn-sm'

     document.getElementsByClassName('form-container')[0].appendChild(list)
     list.textContent = `${expense.value} - ${desc.value} - ${category.value} `
     list.appendChild(editBtn)
     list.appendChild(deleteBtn)

     // Details
     let details = {
          Expense: expense.value,
          Description: desc.value,
          Category: category.value
     }

     let allDetails = JSON.stringify(details)
     localStorage.setItem(desc.value, allDetails)

     // edit function
     editBtn.addEventListener('click', () => {
          localStorage.removeItem(desc.value)

          document.getElementById('expense').value = details.Expense
          document.getElementById('desc').value = details.Description
          document.getElementById('category').value = details.Category
          document.getElementsByClassName('form-container')[0].removeChild(list)
     })

     // delete function
     deleteBtn.addEventListener('click', () => {
          localStorage.removeItem(desc.value)
          document.getElementsByClassName('form-container')[0].removeChild(list)
          // clear input fields
          document.getElementById('expense').value = ''
          document.getElementById('desc').value = ''
     })
})


window.onload = () => {
     for (let i = 0; i < localStorage.length; i++) {
          let key = localStorage.key(i)
          let storedDetails = JSON.parse(localStorage.getItem(key))
          let expense = storedDetails.Expense
          let desc = storedDetails.Description
          let category = storedDetails.Category
          let list = document.createElement('p')

          // edit button
          let editBtn = document.createElement('button')
          editBtn.textContent = 'Edit'
          editBtn.className = 'btn btn-light btn-sm'

          // delete button
          let deleteBtn = document.createElement('button')
          deleteBtn.textContent = 'Delete'
          deleteBtn.className = 'btn btn-danger btn-sm'

          document.getElementsByClassName('form-container')[0].appendChild(list)
          list.textContent = `${expense} - ${desc} - ${category} `
          list.appendChild(editBtn)
          list.appendChild(deleteBtn)

          // Details
          let details = {
               Expense: expense,
               Description: desc,
               Category: category
          }

          // edit function
          editBtn.addEventListener('click', () => {
               localStorage.removeItem(key)

               document.getElementById('expense').value = details.Expense
               document.getElementById('desc').value = details.Description
               document.getElementById('category').value = details.Category
               document.getElementsByClassName('form-container')[0].removeChild(list)
          })

          // delete function
          deleteBtn.addEventListener('click', () => {
               localStorage.removeItem(key)
               document.getElementsByClassName('form-container')[0].removeChild(list)
               // clear input fields
               document.getElementById('expense').value = ''
               document.getElementById('desc').value = ''
          })

     }
}

