
// SIDE BAR //
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES //
const messagesNotifications = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME //
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.theme-customization');

const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');





const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    if (name.indexOf(val) != -1){
      user.style.display = 'flex';
    } else {
      user.style.display = 'none';
    }})
}


//=========MESSAGES=========// search chat
messageSearch.addEventListener('keyup', searchMessage);


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


//========HIGHLIGHT MESSAGE CARD WHEN MENU ICON IS CLICKED ===================//
messagesNotifications.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotifications.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow ='none';
  }, 2000);

});


//THEME/DISPLAY  CUSTOMIZATION //
//opening the modal //

const openThemeModal = () =>{
  themeModal.style.display = 'grid';

}


// open modal //
const closeThemeModal = (e) =>{
  if (e.target.classList.contains('theme-customization')){
    themeModal.style.display = 'none';
  }

}


// closing the modal //
themeModal.addEventListener('click' , (closeThemeModal));

// remove active class from spans or fonts size selectors//
const removeSizeSelector = () =>{
  fontSizes.forEach(size => {
    size.classList.remove('active');
})
}

theme.addEventListener('click', (openThemeModal));

// FONT SIZES //
fontSizes.forEach(size => {
size.addEventListener('click', ()=>{
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
    fontSize = '10px';
    root.style.setProperty('--sticky-top-left', '5.4rem');
    root.style.setProperty('--sticky-top-right', '5.4rem');

  } else  if(size.classList.contains('font-size-2')){
    fontSize = '13px';
    root.style.setProperty('--sticky-top-left', '5.4rem');
    root.style.setProperty('--sticky-top-right', '-7rem');

  } else  if(size.classList.contains('font-size-3')){
    fontSize = '16px';
    root.style.setProperty('--sticky-top-left', '-2rem');
    root.style.setProperty('--sticky-top-right', '-17rem');

  } else  if(size.classList.contains('font-size-4')){
    fontSize = '19px';
    root.style.setProperty('--sticky-top-left', '-5rem');
    root.style.setProperty('--sticky-top-right', '-25rem');

  } else  if(size.classList.contains('font-size-5')){
    fontSize = '22px';
    root.style.setProperty('--sticky-top-left', '-10rem');
    root.style.setProperty('--sticky-top-right', '-33rem.4rem');
  }
   // change font size of the root html element
  document.querySelector('html').style.fontSize = fontSize;
})
})


// remove activeness from colors when click on a different colorPicker//
const colorChangeActiveClass = () =>{
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}

// change primary colors //
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
      var primary;
      // change colorPicker //
      colorChangeActiveClass();

      if(color.classList.contains('color-1')){
        primaryHue = 252;
      }else if(color.classList.contains('color-2')){
        primaryHue = 52;
      }else if(color.classList.contains('color-3')){
        primaryHue = 352;
      }else if(color.classList.contains('color-4')){
        primaryHue = 152;
      }else if(color.classList.contains('color-5')){
        primaryHue = 352;
      };
      color.classList.add('active');

      root.style.setProperty('--primary-color-hue', primaryHue);

})
})