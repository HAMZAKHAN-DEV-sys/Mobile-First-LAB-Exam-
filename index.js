const btn = document.querySelector('#hamburguer-btn');
const btnSeePrjct = document.querySelectorAll('.project-access');
const closeBtn = document.querySelector('.close-btn');
const mobilenavlinks = document.querySelectorAll('.m-navlink');
const sections = document.querySelectorAll('.section');

btn.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.visibility = 'visible';
  sections.forEach((sect) => {
    sect.style.filter = 'blur(4px)';
  });
});

closeBtn.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.visibility = 'hidden';
  sections.forEach((sect) => {
    sect.style.filter = 'none';
  });
});
mobilenavlinks.forEach((el) => {
    el.addEventListener('click', () => {
      document.getElementById('mobile-menu').style.visibility = 'hidden';
      sections.forEach((sect) => {
        sect.style.filter = 'none';
      });
    });
  });
  

function showMsg(input, msg, type) {
    document.querySelector('small').innerText = msg;
    return type;
  }
  
  function showError(input, message) {
    return showMsg(input, message, false);
  }
  
  function showSuccess(input) {
    return showMsg(input, '', true);
  }
  
  function validateEmail(input, invalidMsg) {
    const emailRegex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
    const email = input.value.trim();
    if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
    }
    showSuccess(input);
    return true;
  }
  
  const form = document.querySelector('#contactme-form');
  const EMAIL_INVALID = ' PLEASE WRITE Email IN THE LOWERCASE';
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailValid = validateEmail(form.elements['user-email'], EMAIL_INVALID);
    if (emailValid) {
      form.submit();
    }
  });
  