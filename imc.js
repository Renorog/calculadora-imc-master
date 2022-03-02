
const resultado = document.getElementById('resultado');


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const calcular = document.getElementById('calcular');

    if(nome !== '' && altura !== '' && peso !== ''){
       
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classsificacao = '';

        if(valorIMC < 18.5){
            classsificacao = 'abaixo do peso.';
        } else if(valorIMC < 25){
            classsificacao = 'com peso ideal. Parabéns!!!';
        } else if(valorIMC < 30){
            classsificacao = 'levemente acima do peso.';                                                                                
        } else if(valorIMC < 35){
            classsificacao = 'com obesidade grau I.';
        } else if(valorIMC < 40){
            classsificacao = 'com obesidade grau II.';
        } else {
            classsificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classsificacao}`;
    
        
    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}


calcular.addEventListener('click', imc);