let icon = document.getElementById('dark-theme-icon')
let search_icon = document.querySelector('.search-icon')
let search = document.querySelector('.search')
const menu = document.querySelector('.menu')
const tut = document.querySelector('.tutorial')
const menu_item = document.querySelector('.nav-links')
const sub_menu_item = document.querySelector('.navlinks')
const logo = document.querySelector('.logo');

logo.addEventListener('click',()=>{
    window.open('index.html','_self')
})

const gotoblog = () =>{
    window.open('blog.html','_self')
}

const gotocourses = () =>{
    window.open('courses.html','_self')
}
// Search icon toggle
search_icon.addEventListener('click',()=>{
    search.classList.toggle('hide')
})

// Nav Menu toggle
menu.addEventListener('click',()=>{
    menu_item.classList.toggle('active')
})

// Dropdown 
tut.addEventListener('click',()=>{
    sub_menu_item.classList.toggle('active')
})

icon.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
})

    // Function to set dark mode based on user preference
    function setDarkModePreference() {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      if (isDarkMode) {
        document.body.classList.add('dark');
      }
    }

    // Call the setDarkModePreference function on page load
    setDarkModePreference();