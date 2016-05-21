
function aleatoria(min, max)
{
 	var numero = Math.floor(Math.random()*(max - min + 1) + min);
 	return numero;
}
var piedra = 0;
var papel = 1;
var tijeras = 2;
var lagarto = 3;
var spock = 4;

var jugador1;
var maquina=0;
var selec = ["piedra", "Papel", "Tijeras", "Lagarto", "Spock"];

function play(jugador1)
{
	maquina = aleatoria(0,4);

	alert("Eliges " + selec[jugador1]);
	alert("\"Machine\" elige " + selec[maquina]);
	
	if (jugador1 == maquina)
	{
		alert("Empate");
	}
	else if (jugador1 == papel)
	{
		if (maquina == piedra )
		{
			alert("Ganas!");
		}
		else if(maquina == tijeras)
		{
			alert("Pierdes!");
		}
		else if (maquina == lagarto)
		{
			alert("Pierdes!");
		}
		else if(maquina == spock)
		{
			alert("Ganas!");
		}	
	}
	else if(jugador1 == papel)
	{
		if (maquina == piedra )
		{
			alert("Ganas!");
		}
		else if(maquina == tijeras)
		{
			alert("Pierdes!");
		}
		else if (maquina == lagarto)
		{
			alert("Pierdes!");
		}
		else if(maquina == spock)
		{
			alert("Ganas!");
		}	
	}
	else if (jugador1 == tijeras)
	{
		
		if (maquina == piedra )
		{
			alert("Pierdes!");
		}
		else if(maquina == papel )
		{
			alert("Ganas!");
		}
		else if (maquina == lagarto)
		{
			alert("Ganas!");
		}
		else if(maquina == spock)
		{
			alert("Pierdes!");
		}	
	}
	else if (jugador1 == lagarto)
	{
		
		if (maquina == piedra )
		{
			alert("Pierdes!");
		}
		else if(maquina == papel )
		{
			alert("Ganas!");
		}
		else if (maquina == tijeras)
		{
			alert("Pierdes!");
		}
		else if(maquina == spock)
		{
			alert("Ganas!");
		}	
	}
	else if (jugador1 == spock)
	{
		
		if (maquina == piedra )
		{
			alert("Ganas!");
		}
		else if(maquina == papel )
		{
			alert("Pierdes!");
		}
		else if (maquina == tijeras)
		{
			alert("Ganas!");
		}
		else if(maquina == lagarto)
		{
			alert("Pierdes!");
		}	
	}
}	


