const boxes = document.querySelectorAll('.box');
// true = X, false = O
let turn = true;
boxes.forEach((box) =>
    box.addEventListener('click', () => {
        const activeImg = box.firstElementChild;

        if (turn) {
            activeImg.setAttribute('src', 'svg-icons/x-icon.svg');
            turn = false;
        } else {
            activeImg.setAttribute('src', 'svg-icons/o-icon.svg');
            turn = true;
        }
    })
);
