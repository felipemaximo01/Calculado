var inicio = 0;
var resul = 0;
var simbolo;
var tela = document.getElementById("tela");
var number = 0;


function botao(caract){
    if(caract == 'C'){
        tela.innerText = 0;
        number = 0;
        simbolo = null;
    }
    else if(caract == '←'){
        if(number == 0){

        }else{
            if(number.length === 2){
                tela.innerText = 0;
                number = 0;
                simbolo=null;
            }else{
                tela.removeChild(tela.lastChild);
                number = number.substring(0, number.length - 1);
           }
        }
    }
    else if(caract == '/'){
        if(number == 0){

        }
        else{
            simbolo = caract;
            resul = parseInt(number);
            tela.innerText = 0;
            number = 0;
        }
        
    }
    else if(caract == 'x'){
        if(number == 0){

        }
        else{
            simbolo = caract;
            resul = parseInt(number) ;
            tela.innerText = 0;
            number = 0;
        }
        
    }
    else if(caract == '+'){
        if(number == 0){

        }
        else{
            simbolo = caract;
            resul = parseInt(number);
            tela.innerText = 0;
            number = 0;
        }
       
    }
    else if(caract == '-'){
        if(number == 0){

        }
        else{
            simbolo = caract;
            resul = parseInt(number);
            tela.innerText = 0;
            number = 0;
        }
        
    }
    else if(caract == '='){
        console.log(simbolo);
        switch(simbolo){
            case '/':
                resul = resul/parseInt(number);
                tela.innerText = resul;
                simbolo = null;
                number = resul;
                break;
            case 'x':
                resul = resul*parseInt(number);
                tela.innerText = resul;
                simbolo = null;
                number = resul;
                break;
            case '+':
                resul = parseInt(resul) + parseInt(number);
                tela.innerText = resul;
                simbolo = null;
                number = resul;
                break;
            case '-':
                resul = resul-parseInt(number);
                tela.innerText = resul;
                simbolo = null;
                number = resul;
                break;
        }
    }else{
        if(number == 0){
            tela.innerText = caract;
            number = number+""+ caract;
        }else{
            var num = document.createTextNode(caract);
            tela.appendChild(num);
            number = number+""+ caract;
        }
    }
}