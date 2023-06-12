// true = X, false = O
let turn = true;
// eslint-disable-next-line prefer-const

// Player factory function
const Player = (icon) => {
    const player = document.querySelector(`.scoreBoard > .player-${icon}`);
    const score = document.querySelector(`.${icon}-score`);
    const addWin = () => {
        score.textContent++;
    };
    const toggle = () => {
        player.classList.toggle('turn');
    };
    return { icon, addWin, toggle };
};

const playerX = Player('x');
const playerO = Player('o');

const Game = ((p1, p2) => {
    const gameActive = true;
    const gameboard = [null, null, null, null, null, null, null, null, null];
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) =>
        box.addEventListener('click', () => {
            const activeImg = box.firstElementChild;
            if (!activeImg.getAttribute('src') && gameActive) {
                if (turn) {
                    activeImg.setAttribute('src', 'svg-icons/x-icon.svg');
                    console.log(p1.classList);
                    turn = false;
                } else {
                    activeImg.setAttribute('src', 'svg-icons/o-icon.svg');

                    turn = true;
                }
                p1.toggle();
                p2.toggle();
            }
        })
    );
    // const Add = (index, icon) => {
    //     gameboard[index] = icon;
    // };

    const checkWin = () => {};
    // return { Add };
})(playerX, playerO);

// Game;
