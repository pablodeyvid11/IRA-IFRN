document.quantidade = 0;
document.arrayId = [];

function calcular() {
    let somaProdutoChNota = 0;
    let somaCh = 0;
    let ira;
    try {
        document.arrayId.map(valor => {
            if (valor != "NONE") {
                let idCh = `${valor}_CH`;
                let idNota = `${valor}_NOTA`;

                let Ch = document.getElementById(idCh).value + "";
                let Nota = document.getElementById(idNota).value + "";

                if (Ch.match(/\d+/) && Nota.match(/\d+/)) {
                    somaProdutoChNota += (Ch - 0) * (Nota - 0);
                    somaCh += Ch - 0;
                } else {
                    throw "Valor não infomado!";
                }
            }
        });
        ira = somaProdutoChNota / somaCh;
    } catch (exc) {
        ira = NaN;
    }

    if (isNaN(ira)) {
        document.getElementById("IRA").innerHTML = `Favor, preencha todos os campos ou verifique os valores informados`;
    } else {
        document.getElementById("IRA").innerHTML = `IRA = ${ira}`;
    }
}

function adicionar() {
    let adicionar = `
    <div class="campo_nota" id = "${document.quantidade}_div">
            <input class="campo_nota" type="number" value="" onChange="onChange('${document.quantidade}_CH')" id="${document.quantidade}_CH" placeholder="Carga horária em horas">
            <input class="campo_nota" type="number" value="" onChange="onChange('${document.quantidade}_NOTA')" id="${document.quantidade}_NOTA" placeholder="Nota">
            <button class="botao_apagar" id="${document.quantidade}_x" onclick="apagar(${document.quantidade})">X</button>
        </div>
    `;

    document.getElementById("campo_notas").innerHTML += adicionar;
    document.arrayId.push(document.quantidade);
    document.quantidade++;
}

function onChange(id) {
    let valorAtual = document.getElementById(id).value;
    document.getElementById(id).setAttribute("value", valorAtual);
    document.getElementById("IRA").innerHTML = "";
}

function apagar(idNumber) {
    document.getElementById(idNumber + "_div").innerHTML = "";
    document.arrayId[idNumber] = "NONE";
    document.getElementById("IRA").innerHTML = "";
}