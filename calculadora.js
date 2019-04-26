const calculadora = {
    'valor_1' : null,
    'op' : null,
    'valor_2' :null,
    'result' : null,
}
   
function funcao(num){

    if(calculadora.valor_1 == null){
        calculadora.valor_1 = num;

        campoTexto = document.querySelector('#campoTexto');
        campo = document.createElement('p');
        campo.setAttribute('id','campo');
        campoTexto.appendChild(campo);
        
        span = document.createElement('span');
        texto = document.createTextNode(num);
        span.appendChild(texto);
        campo.appendChild(span);      
        
    }

    else if(calculadora.valor_2 == null){
        calculadora.valor_2 = num;
        
        span = document.createElement('span');
        texto = document.createTextNode(num);
        span.appendChild(texto);
        campo.appendChild(span);
        
    }
    
}


function operacao(operacao){
	calculadora.op = operacao;
    
    span = document.createElement('span');
    texto = document.createTextNode(operacao);
    span.appendChild(texto);
    campo.appendChild(span);
       
}

function limpar(){
    campo = document.querySelector('#campo'); 
	calculadora.valor_1 = null;
	calculadora.op = null;
	calculadora.valor_2 = null;
    calculadora.result = null;
    
    campo = document.querySelector('#campo');
    campo.remove();

}

function resultado(result){

    campo = document.querySelector('#campo');

	 if(calculadora.valor_1 !== null && calculadora.valor_2 !== null  && calculadora.op == '+'){
        calculadora.result = calculadora.valor_1 + calculadora.valor_2;  
        
        span = document.createElement('span');
        texto = document.createTextNode( '=' + calculadora.result);
        span.appendChild(texto);
        campo.appendChild(span);
        
     
	}
	else if(calculadora.valor_1 !== null && calculadora.valor_2 !== null  && calculadora.op == '-'){
        calculadora.result = calculadora.valor_1 - calculadora.valor_2;

        span = document.createElement('span');
        texto = document.createTextNode('=' + calculadora.result);
        span.appendChild(texto);
        campo.appendChild(span);
        
	}
	else if(calculadora.valor_1 !== null && calculadora.valor_2 !== null  && calculadora.op == '/'){
        calculadora.result = calculadora.valor_1 / calculadora.valor_2;

        span = document.createElement('span');
        texto = document.createTextNode('=' + calculadora.result);
        span.appendChild(texto);
        campo.appendChild(span);
        
    }
    else if(calculadora.valor_1 !== null && calculadora.valor_2 !== null && calculadora.op == '*'){
        calculadora.result = calculadora.valor_1 * calculadora.valor_2;

        span = document.createElement('span');
        texto = document.createTextNode('=' + calculadora.result);
        span.appendChild(texto)
        campo.appendChild(span);
        
    }
	
    
    const resultado = calculadora.result;
}

