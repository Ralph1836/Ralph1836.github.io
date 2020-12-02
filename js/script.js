document.addEventListener('DOMContentLoaded', function() {

    ul = document.querySelector('ul')

    text = document.querySelector('input[type="text"]')

    submit = document.querySelector('input[type="button"]')

    submit.addEventListener('click', function(event) {
        li = document.createElement('li')
        li.innerHTML = text.value
        ul.appendChild(li)

        event.preventDefault()
    });
})