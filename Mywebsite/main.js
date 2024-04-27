function showSidebar(){
    // 'x' icon is shown
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='flex'

    // Hide the hamburger icon
    const menuButton = document.querySelector('.menu-button');
    menuButton.style.display = 'none';
    
}
function hideSidebar(){
    //'x' icon hide
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display='none'

    // unhide the hamburger icon
    const menuButton = document.querySelector('.menu-button');
    menuButton.style.display = 'flex';
}
