const listaNomes = ['Jodebergues', 'Moshé', 'Joquebede', 'Malaquias', 'Deres', 'Joio', 'Daniel'];
const form = document.querySelector('form');
const input = document.getElementById('inp');
const ul = document.getElementById('lista');
const info = document.getElementById('info');
const resetForm = document.querySelector('button[type = reset]');

window.onload = () => mostrar();

function mostrar(){
    const infos = listaNomes.map(nome => {
        return `<li>${nome}</li>`;
    })    
    ul.innerHTML = infos.join('');   
}

const mostraNomes = (name) => {
    let li = document.querySelectorAll('li');
    let hasResult = false;
    for(let nome of li){
        if(nome.innerText.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))){
            nome.style.display = 'block';
            info.style.display = 'none';
            hasResult = true;
        } else {
            nome.style.display = 'none';
        }
    }

    if(!hasResult){
        info.style.display = 'block', info.innerHTML = `Nenhum resultado para "${name}"`;
    } 
}

form.addEventListener('submit', e => e.preventDefault());

input.addEventListener('keyup', () => {
    let nomeDigitado = input.value;
    mostraNomes(nomeDigitado);
})

resetForm.addEventListener('click', () => {
    info.style.display = 'none';
    mostrar();
})