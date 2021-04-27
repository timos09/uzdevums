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

    let pirkuma = {virsraksts: virsraksts.value, autors: autors.value};

    virsraksts.value = "";
    autors.value = "";

    gramatas.push(gramata);

    render();
})

function render() {
    let biblioteka = document.getElementById('pirkumas');
    biblioteka.innerHTML = "ass";

    for(let i = 0; i < gramatas.length; i++) {
        let gramata = `
        <div class="veikals">
            <h3>Virsraksts: ${gramatas[i].virsraksts}</h3>
            <h4>Autors: ${gramatas[i].autors}</h4>
        </div>`;

        biblioteka.innerHTML += gramata;
    }

    localStorage.setItem("gramatas", JSON.stringify(gramatas))
}