//If there are any quests in localStorage, grab them
window.addEventListener('load', () => {
    quests = JSON.parse(localStorage.getItems('quests')) || []
    const newQuestForm = document.querySelector('new-quest-form')
    const questList = document.querySelector('quest-list')
})