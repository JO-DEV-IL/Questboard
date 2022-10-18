//If there are any quests in localStorage, grab them
window.addEventListener('load', () => {
    quests = JSON.parse(localStorage.getItems('quests')) || []
    const nameInput = document.querySelector('name')
    const questList = document.querySelector('quest-list')
})