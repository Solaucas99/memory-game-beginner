const game = {
    aleatoryNumbersComputed: [],
    playerNumbersComputed: []
}

const geraAleatorio = (max, min) => (Math.random() * (max - min) + min).toFixed();
let number = 0;
let jogando = false;
let completo = false;


const selecionaButCpt = [].slice.call(document.querySelectorAll(".cpt"));
const selecionaButUsr = [].slice.call(document.querySelectorAll(".usr"));

const computerJoga = () => {
    if (jogando === true) return alert ("Jogo em andamento");
    jogando = true;
    const intervalo = setInterval(() => {
        setTimeout(() => selecionaButCpt[number].classList.add("green"), 100)
        setTimeout(() => selecionaButCpt[number].classList.remove("green"), 500)
        number = parseFloat(geraAleatorio(0,8));
        game.aleatoryNumbersComputed.push(number);
        console.log(game.aleatoryNumbersComputed);
        if (game.aleatoryNumbersComputed.length === 5) {
            clearInterval(intervalo);
            setTimeout(() => {
                jogadorJoga();
            }, 1000)
        }
    }, 1000); 
    completo = true;
}


const jogadorJoga = () => {
    alert("Comece o jogo")
    document.addEventListener("click", (e) => {
        if (!completo) return alert("Clique em iniciar jogo...")
        console.log(e.target)
        const el = e.target;
        if (el.classList.contains("usr")) {
            game.playerNumbersComputed.push(parseFloat(el.dataset.memory))
            console.log(game.playerNumbersComputed)
            if (game.playerNumbersComputed.length === 5) comparaJogo();
        }
        e.stopImmediatePropagation();
    })
}

const comparaJogo = () => {
    const convertePlayers = JSON.stringify(game.playerNumbersComputed);
    const converteAleatory = JSON.stringify(game.aleatoryNumbersComputed);
    if (convertePlayers === converteAleatory) alert('Você venceu!');
    else alert("Você perdeu!");
    limpaEstado();
}

const limpaEstado = () => {
    game.playerNumbersComputed = [];
    game.aleatoryNumbersComputed = [];
    number = 0;
    jogando = false;
    completo = false;
}

const iniciaJogo = computerJoga;

const id = document.getElementById("iniciaJogo");
id.addEventListener("click", (e) => {
    iniciaJogo();
    e.stopImmediatePropagation();
})