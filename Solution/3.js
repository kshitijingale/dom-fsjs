let newSection = document.createElement('section')

let textNode = document.createElement('h3')
textNode.innerHTML = "My New FAQ";

newSection.appendChild(textNode);

newSection.setAttribute('class', 'parent')

document.querySelector('.accordion-homepage').appendChild(newSection);