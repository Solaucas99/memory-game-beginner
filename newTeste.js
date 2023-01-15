const game = {
    aleatoryNumbersComputed: [],
    playerNumbersComputed: []
}

const aleatorio = (max, min) => (Math.random() * (max - min) + min).toFixed();
let number = 0;

const setaTimeOut = (i) => {
    setTimeout((i) => {
        number = parseFloat(aleatorio(1,9));
        game.aleatoryNumbersComputed.push(number);
        console.log(game.aleatoryNumbersComputed);
    }, i * 1000)
}

const iniciaJogo = () => {
    for (let i = 0; i < 5; i++) {
        setaTimeOut(i);
        console.log('olá')
    }
}


iniciaJogo()