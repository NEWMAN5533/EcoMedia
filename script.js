// =================== GLOBAL VARIABLES =================== //

// SIDE BAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotifications = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.theme-customization');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');

// BACKGROUND THEME
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

let primaryHue = 252; // default theme color hue


// =================== MESSAGE SEARCH =================== //
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase();
    user.style.display = name.includes(val) ? 'flex' : 'none';
  });
};
messageSearch.addEventListener('keyup', searchMessage);


// =================== SIDEBAR MENU =================== //
const changeActiveItem = () => {
  menuItems.forEach(item => item.classList.remove('active'));
};

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');

    if (item.id !== 'notifications') {
      document.querySelector('.notification-popup').style.display = 'none';
    } else {
      document.querySelector('.notification-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  });
});


// =================== MESSAGE HIGHLIGHT =================== //
messagesNotifications.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messagesNotifications.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
  }, 2000);
});


// =================== THEME MODAL =================== //
const openThemeModal = () => themeModal.style.display = 'grid';
const closeThemeModal = e => {
  if (e.target.classList.contains('theme-customization')) {
    themeModal.style.display = 'none';
  }
};
theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);


// =================== FONT SIZE =================== //
const removeSizeSelector = () => {
  fontSizes.forEach(size => size.classList.remove('active'));
};

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    size.classList.add('active');
    let fontSize;

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')) {
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')) {
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left', '-10rem');
      root.style.setProperty('--sticky-top-right', '-33.4rem');
    }

    document.querySelector('html').style.fontSize = fontSize;
  });
});


// =================== COLOR PALETTE =================== //
const colorChangeActiveClass = () => {
  colorPalette.forEach(colorPicker => colorPicker.classList.remove('active'));
};

colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    colorChangeActiveClass();
    if (color.classList.contains('color-1')) primaryHue = 252;
    else if (color.classList.contains('color-2')) primaryHue = 52;
    else if (color.classList.contains('color-3')) primaryHue = 352;
    else if (color.classList.contains('color-4')) primaryHue = 152;
    else if (color.classList.contains('color-5')) primaryHue = 202;

    color.classList.add('active');
    root.style.setProperty('--primary-color-hue', primaryHue);
  });
});


// =================== BACKGROUND THEME =================== //
const changeBG = (light, white, dark) => {
  root.style.setProperty('--light-color-lightness', light);
  root.style.setProperty('--white-color-lightness', white);
  root.style.setProperty('--dark-color-lightness', dark);
};

bg1.addEventListener('click', () => {
  bg1.classList.add('active');
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  window.location.reload(); // reset to default
});

bg2.addEventListener('click', () => {
  bg2.classList.add('active');
  bg1.classList.remove('active');
  bg3.classList.remove('active');
  changeBG('20%', '100%', '95%');
});

bg3.addEventListener('click', () => {
  bg3.classList.add('active');
  bg1.classList.remove('active');
  bg2.classList.remove('active');
  changeBG('0%', '10%', '95%');
});
