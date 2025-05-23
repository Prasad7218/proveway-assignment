const boxes = document.querySelectorAll('.box-wrapper');
const radioButtons = document.querySelectorAll('.input-wrapper input[type="radio"]');
const hiddenSections = document.querySelectorAll('.hidden-section');

boxes.forEach((boxWrapper, index) => {
    const box = boxWrapper.querySelector('.box');
    const radioBtn = boxWrapper.querySelector('input[type="radio"]');
    boxWrapper.style.backgroundColor = '';
    box.addEventListener('click', () => {
        boxes.forEach(wrapper => {
            wrapper.style.backgroundColor = '';
            wrapper.style.border = '';
        });
        radioBtn.checked = true;
        hiddenSections.forEach((section, i) => {
            if (i === index) {
                boxWrapper.style.backgroundColor = '#FFF9FA';
                boxWrapper.style.border = '2px solid #FF6B82';
                section.style.display = 'flex';
                section.style.marginTop = '10px';
                section.style.paddingLeft = '50px';
            } else {
                section.style.display = 'none';
                section.style.marginTop = '0';
                section.style.paddingLeft = '0';
            }
        });
    });
});
