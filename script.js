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

const Game = ((p1, p2) => {
    // true = X, false = O
    let turn = true;

    const gameActive = true;
    const gameboard = [null, null, null, null, null, null, null, null, null];

    // Add icon to list
    const Add = (box, icon) => {
        const index = box.getAttribute('data');
        gameboard[index] = icon;
    };

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) =>
        box.addEventListener('click', () => {
            const activeImg = box.firstElementChild;
            if (!activeImg.getAttribute('src') && gameActive) {
                if (turn) {
                    activeImg.setAttribute('src', 'svg-icons/x-icon.svg');
                    turn = false;
                    Add(box, 'x');
                } else {
                    activeImg.setAttribute('src', 'svg-icons/o-icon.svg');
                    Add(box, 'o');
                    turn = true;
                }
                p1.toggle();
                p2.toggle();
            }
        })
    );

    // const checkWin = () => {};
    return { Add };
})(Player('x'), Player('o'));

const buttons = document.querySelectorAll('.selectMode > button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {});
});
