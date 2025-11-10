const person = document.querySelector('.person')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const about = document.querySelector('.about')
const personName = document.querySelector('.name')
const career = document.querySelector('.career')

prev.addEventListener('click', () => {
    person.src = 'images/image-john.jpg';
    about.textContent = `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`;
    personName.textContent = 'John Tarkpor';
    career.textContent = 'Junior Front-end Developer'

})

next.addEventListener('click', () => {
    person.src = 'images/image-tanya.jpg'
    about.textContent = `" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`
    personName.textContent = 'Tanya Sinclair'
    career.textContent = 'UX Engineer'
})