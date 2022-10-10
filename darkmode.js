// let darkMode = localStorage.getItem('darkMode');
// const darkModeToggle = document.querySelector('#darkModeToggles');

// // check if dark mode is working and be able to switch

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('darkModeToggles').addEventListener('click', () => {
        document.body.classList.toggle('darkmode')

        localStorage.setItem('storageTheme', document.body.classList.contains('darkmode') ? 'darkmode' : 'lightmode')
    })

    if(localStorage.getItem('storageTheme') === 'darkmode') {
        document.body.classList.add('darkmode')
    }
})
// const enableDarkMode = () => {
//     // adding the class darkmode to body
//     document.body.classList.add('darkMode')
//     // updating the local storage
//     localStorage.setItem('darkMode', 'enabled')
// };

// const disableDarkMode = () => {
//     // adding the class darkmode to body
//     document.body.classList.remove('darkMode')
//     // updating the local storage
//     localStorage.setItem('darkMode', null)
// };


// darkModeToggle.addEventListener('click', () => {
//     // console.log("testing 1 2 testing 1 2")

//     if (darkMode !== 'enabled') {
//         enableDarkMode()
//     }
// })
