const choices = document.getElementById('choices');
const choicePlayer = document.getElementById('choice-player');
const choiceComputer = document.getElementById('choice-computer');
const result = document.querySelector('.result h2');

let player;
let computer;

[...choices.children].forEach(choice => {
    choice.addEventListener('click', () => {
        player = choice.textContent;
        computer = ['✊', '✌️', '🤚'][Math.floor(Math.random() * 3)];

        choicePlayer.textContent = player;
        choiceComputer.textContent = computer;

        if (player == computer) {
            result.textContent = '🎈 Draw 🎈';
        } else if ((player == '✊' && computer == '✌️') || (player == '✌️' && computer == '🤚') || (player == '🤚' && computer == '✊')) {
            result.textContent = '🎉 You Win 🎉';
        } else {
            result.textContent = '💀 You Lose 💀';
        }
    });
    choice.addEventListener('click', () => document.querySelector('.result h3').removeAttribute('style'), { once: true });
});
