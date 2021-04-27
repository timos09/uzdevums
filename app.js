const POP_UP = document.getElementById('popUp');
let pirkums = [];

window.addEventListener('load', () => {
    pirkums = JSON.parse(localStorage.getItem("pirkums") || "[]");
    console.log(pirkums)
    render();
});

document.getElementById('jaunaPirkuma').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('pievienotPirkumu').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let pirkuma = {pirkums: pirkums.value, cena: autors.value};

    pirkums.value = "";
    cena.value = "";

    pirkums.push(pirkuma);

    render();
})

function render() {
    let veikals = document.getElementById('veikals');
    veikals.innerHTML = "";

    for(let i = 0; i < pirkums.length; i++) {
        let pirkuma = `
        <div class="pirkuma">
            <h3>Virsraksts: ${pirkums[i].virsraksts}</h3>
            <h4>Autors: ${pirkums[i].autors}</h4>
        </div>`;

        biblioteka.innerHTML += pirkums;
    }

    localStorage.setItem("pirkumas", JSON.stringify(pirkums))
}