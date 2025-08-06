
// SIDE BAR //
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES //
const messagesNotifications = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.messages');
const messageSearch =document.querySelector('#message-search');




// whenever click on the menu icon to remove activeness //
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
};


//==================SIDE BAR ===================//
menuItems.forEach(item => {
  item.addEventListener('click', () =>{
    changeActiveItem();
    item.classList.add('active');
    if (item.id != 'notifications') {
      document.querySelector('.notification-popup').
      style.display = 'none';
    } else {
      document.querySelector('.notification-popup').
      style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  });
});

//==================SIDE BAR ===================//
messagesNotifications.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotifications.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow ='none';
  }, 2000);

});
