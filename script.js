// true = X, false = O
let turn = true;
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
    const start = () => {
        if (!player.classList.contains('turn')) {
            player.classList.toggle('turn');
        }
    };
    const reset = () => {
        player.classList.remove('turn');
        score.textContent = 0;
        turn = true;
    };
    const scoreChange = (robot) => {
        // eslint-disable-next-line no-unused-expressions
        robot
            ? (player.textContent = 'Computer')
            : (player.textContent = 'Player O');
    };
    return { icon, addWin, toggle, start, scoreChange, reset };
};

const Game = ((p1, p2) => {
    let gameActive = true;
    let gameboard = [null, null, null, null, null, null, null, null, null];
    const boxes = document.querySelectorAll('.box');

    // Add icon to list
    const Add = (box, icon) => {
        const index = box.getAttribute('data');
        gameboard[index] = icon;
    };

    const resetBoard = () => {
        gameboard = [null, null, null, null, null, null, null, null, null];
        boxes.forEach((item) => {
            const img = item.firstElementChild;
            img.setAttribute('src', '');
        });
        p1.reset();
        p2.reset();

        p1.start();
    };

    const checkWin = () => {
        const players = [p1, p2];

        players.forEach((pl) => {
            const sign = pl.icon;

            // Check for a win
            if (
                // horizontal
                (gameboard[0] === sign &&
                    gameboard[1] === sign &&
                    gameboard[2] === sign) ||
                (gameboard[3] === sign &&
                    gameboard[4] === sign &&
                    gameboard[5] === sign) ||
                (gameboard[6] === sign &&
                    gameboard[7] === sign &&
                    gameboard[8] === sign) ||
                // vertical
                (gameboard[0] === sign &&
                    gameboard[3] === sign &&
                    gameboard[6] === sign) ||
                (gameboard[1] === sign &&
                    gameboard[4] === sign &&
                    gameboard[7] === sign) ||
                (gameboard[2] === sign &&
                    gameboard[5] === sign &&
                    gameboard[8] === sign) ||
                // diagonal
                (gameboard[0] === sign &&
                    gameboard[4] === sign &&
                    gameboard[8] === sign) ||
                (gameboard[2] === sign &&
                    gameboard[4] === sign &&
                    gameboard[6] === sign)
            ) {
                pl.addWin();
                gameActive = false;
            }
        });
    };
    const gameScreen = document.querySelector('main');
    const selectMode = document.querySelector('.selectMode');

    // Change to game screen
    const buttons = document.querySelectorAll('.selectMode > button');
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            selectMode.style.visibility = 'hidden';
            gameScreen.classList.add('main-animation');

            p1.start();

            // eslint-disable-next-line no-unused-expressions
            btn === buttons[1] ? p2.scoreChange(true) : p2.scoreChange(false);
        });
    });

    boxes.forEach((box) =>
        box.addEventListener('click', () => {
            const activeImg = box.firstElementChild;
            if (!activeImg.getAttribute('src') && gameActive) {
                if (turn) {
                    activeImg.setAttribute('src', 'svg-icons/x-icon.svg');
                    turn = false;
                    Add(box, p1.icon);
                } else {
                    activeImg.setAttribute('src', 'svg-icons/o-icon.svg');
                    Add(box, p2.icon);
                    turn = true;
                }
                p1.toggle();
                p2.toggle();
                checkWin();
            }
        })
    );

    const restart = document.querySelector(
        'main > div:last-of-type > button:first-of-type'
    );
    const back = document.querySelector(
        'main > div:last-of-type > button:last-of-type'
    );

    restart.addEventListener('click', resetBoard);
    back.addEventListener('click', () => {
        gameScreen.classList.remove('main-animation');
        selectMode.style.visibility = 'visible';
        resetBoard();
    });
})(Player('x'), Player('o'));
