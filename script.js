const button = document.getElementById('button')
const toasts = document.getAnimations('toasts')

const messages = [
    'Message one',
    'Message two',
    'Message three',
    'Message four',
]


button.addEventListener('click', () => createNotification())


function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.lenght)]
}