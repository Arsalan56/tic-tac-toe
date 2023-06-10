const boxes = document.querySelectorAll('.box');
// true = X, false = O
let turn = true;
// eslint-disable-next-line prefer-const

// Player factory function
const Player = (icon) => {
    const score = document.querySelector(`.${icon}-score`);
    const addWin = () => {
        score.textContent++;
    };
    return { icon, addWin };
};

const Game = (() => {
    const gameboard = [null, null, null, null, null, null, null, null, null];

    const Add = (index, icon) => {
        gameboard[index] = icon;
    };

    return { Add };
})();

const playerX = Player('x');
const playerO = Player('o');

boxes.forEach((box) =>
    box.addEventListener('click', () => {
        const activeImg = box.firstElementChild;
        if (!activeImg.getAttribute('src')) {
            if (turn) {
                activeImg.setAttribute('src', 'svg-icons/x-icon.svg');
                turn = false;
            } else {
                activeImg.setAttribute('src', 'svg-icons/o-icon.svg');
                turn = true;
            }
        }
    })
);
