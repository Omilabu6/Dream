const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.wrap');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and content
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Add active class to the clicked tab and corresponding content
    tab.classList.add('active');
    contents[index].classList.add('active');
  });
});


const buttons = document.querySelectorAll('.button');
const displays = document.querySelectorAll('.buttonContent');
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all tabs and content
    buttons.forEach(button => button.classList.remove('show'));
    displays.forEach(display => display.classList.remove('show'));

    // Add active class to the clicked tab and corresponding content
    button.classList.add('show');
    displays[index].classList.add('show');
  });
});