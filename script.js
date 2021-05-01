document.quantidade = 0;

function calcular() {
    let somaProdutoChNota = 0;
    let somaCh = 0;
    for (let i = 0; i < document.quantidade; i++) {
        let idCh = `${i}_CH`;
        let idNota = `${i}_NOTA`;

        let Ch = document.getElementById(idCh).value-0;
        let Nota = document.getElementById(idNota).value-0;
        somaProdutoChNota += Ch * Nota;
        somaCh += Ch;
    }
    console.log("Soma Produto CH & Nota:  " + somaProdutoChNota);
    console.log("Soma CH: " + somaCh);

    let ira = somaProdutoChNota/ somaCh;
    console.log("IRA = " + ira);

    document.getElementById("IRA").innerHTML = `IRA = ${ira}`;
}

function adicionar() {
    let adicionar = `
    <div class="campo_nota">
            <input class="campo_nota" type="number" value="" onChange="onChange('${document.quantidade}_CH')" id="${document.quantidade}_CH" placeholder="Carga horária em horas">
            <input class="campo_nota" type="number" value="" onChange="onChange('${document.quantidade}_NOTA')" id="${document.quantidade}_NOTA" placeholder="Nota">
            <button onclick="apagar()">X</button>
        </div>
    `;
    
    document.getElementById("campo_notas").innerHTML+= adicionar;
    document.quantidade++;
}

function onChange(id) {
    let valorAtual = document.getElementById(id).value;
    document.getElementById(id).setAttribute("value", valorAtual);
}

function apagar(){
    
}