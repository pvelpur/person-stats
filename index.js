
function changedHeading(ev){
    ev.preventDefault()
    
    const f = ev.target
    const name = f.personName.value
    const list = document.createElement('ul')
    const age = f.personAge.value
    const div = document.querySelector('#stats')
    const color = f.textColor.value;
    
    list.appendChild(renderListItem('Name', name))
    
    list.appendChild(renderListItem('Age', age))

    //colorItem.style.backgroundColor = color;
    list.appendChild(renderListItem('Color', color))
    
    //list.textContent = `${name}, ${age}`
    div.appendChild(list)

    //const color = document.getElementById("color").value;
    list.style.color = color;
}

function renderColor(color){
   const colorDiv = document.createElement('div')
   colorDiv.style.backgroundColor = color
   colorDiv.style.width = '6rem'
   colorDiv.style.height = '3rem'
   return colorDiv
}

function renderListItem(text, value){
    const item = document.createElement('li')
    item.textContent = `${text}: ${value}`
    //Use a try catch block --> try appending value to text, otherwise just add it on
    return item
}



const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changedHeading)