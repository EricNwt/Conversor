document.getElementById('entradaRomana').addEventListener('entrada', converterRomanoParaArabico);
document.getElementById('entradaArabica').addEventListener('entrada', converterArabicoParaRomano);

function converterRomanoParaArabico() {
    var numeroRomano = document.getElementById('entradaRomana').value.toUpperCase();
    var numeroArabico = romanoParaArabico(numeroRomano);

    if (numeroArabico !== null) {
        document.getElementById('resultadoArabico').textContent = "Resultado: " + numeroArabico;
    } else {
        document.getElementById('resultadoArabico').textContent = "Número romano inválido!";
    }
}

function converterArabicoParaRomano() {
    var numeroArabico = parseInt(document.getElementById('entradaArabica').value);
    var numeroRomano = arabicoParaRomano(numeroArabico);

    if (numeroRomano !== null) {
        document.getElementById('resultadoRomano').textContent = "Resultado: " + numeroRomano;
    } else {
        document.getElementById('resultadoRomano').textContent = "Número arábico inválido!";
    }
}

function romanoParaArabico(numeroRomano) {
    var romanoParaArabico = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    var numeroArabico = 0;
    var valorAnterior = 0;

    for (var i = numeroRomano.length - 1; i >= 0; i--) {
        var valorAtual = romanoParaArabico[numeroRomano[i]];

        if (valorAtual === undefined) {
            return null; // Número romano inválido
        }

        if (valorAtual < valorAnterior) {
            numeroArabico -= valorAtual;
        } else {
            numeroArabico += valorAtual;
            valorAnterior = valorAtual;
        }
    }
    return numeroArabico;
}

function arabicoParaRomano(numeroArabico) {
    var arabicoParaRomano = {
        1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC',
        100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };
    var numeroRomano = '';

    if (numeroArabico < 1 || numeroArabico > 3999) {
        return null; // Número arábico inválido
    }

    var valoresArabicos = Object.keys(arabicoParaRomano).sort(function(a, b) { return b - a; });

    for (var i = 0; i < valoresArabicos.length; i++) {
        while (numeroArabico >= valoresArabicos[i]) {
            numeroRomano += arabicoParaRomano[valoresArabicos[i]];
            numeroArabico -= valoresArabicos[i];
        }
    }
    return numeroRomano;
}
