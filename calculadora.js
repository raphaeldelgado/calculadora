var numero1
var numero2
var numerodovisor1
var numerodovisor2 = null
var operador = null
var resultado

 function botao(numero)
{
	if (operador == null) 
	{
		numerodovisor1 = document.getElementById('visor').value;
		document.getElementById('visor').value = numerodovisor1 + (numero);
		numerodovisor1 = document.getElementById('visor').value;
		numero1 = numerodovisor1;
	}
	else if (numerodovisor2 == null)
	{
		numerodovisor2 = "";
		document.getElementById('visor').value = numerodovisor1 + operador + numerodovisor2 + (numero);
		numerodovisor2 = numerodovisor2 + (numero);
		numero2 = numerodovisor2;
	}
	else
	{
		document.getElementById('visor').value = numerodovisor1 + operador + numerodovisor2 + (numero);
		numerodovisor2 = numerodovisor2 + (numero);
		numero2 = numerodovisor2;
	}

	
}

function operacao(sinal)
{
	//numero1 = document.getElementById('visor').value;
	operador = (sinal);
	//numerodovisor = numero1 + operador;
	//document.getElementById('visor').value = numerodovisor1
}

function calcular()
{
	switch (operador)
	{
		case '*':
			resultado = numero1 * numero2;
			break;
		case '/':
			resultado = numero1 / numero2;
			break;
		case '-':
			resultado = numero1 - numero2;
			break;
		case '+':
			resultado = parseFloat(numero1) + parseFloat(numero2);
			break;
	}
	document.getElementById('visor').value = resultado;
	//return true;
}

function zerar()
{
	numero1 = "";
	numero2 = "";
	numerodovisor1 = "";
	numerodovisor2 = null;
	operador = null;
	resultado = "";
	visor.value = "";
}