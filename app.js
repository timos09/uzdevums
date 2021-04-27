const POP_UP = document.getElementById('popUp');
let pirkumas = [];

window.addEventListener('load', () => {
    pirkumas = JSON.parse(localStorage.getItem("pirkumas") || "[]");
    console.log(pirkumas)
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

    pirkumas.push(pirkuma);

    render();
})

function render() {
    let veikals = document.getElementById('veikals');
    veikals.innerHTML = "";

    for(let i = 0; i < pirkumas.length; i++) {
        let pirkuma = `
        <div class="pirkuma">
            <h3>Virsraksts: ${pirkumas[i].virsraksts}</h3>
            <h4>Autors: ${pirkumas[i].autors}</h4>
        </div>`;

        biblioteka.innerHTML += pirkuma;
    }

    localStorage.setItem("pirkumas", JSON.stringify(pirkumas))
}