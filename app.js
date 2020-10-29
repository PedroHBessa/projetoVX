

function disparaFuncaoOption1(){

	var imagem = document.querySelector(".imagem");
var texto = document.querySelector(".texto");
var linhas = document.querySelector(".linhas");
var dividir = document.querySelector(".dividir");
var divpai = document.querySelector(".divpai");
var select = document.querySelector("#list");

	imagem.style.display = "none";
	texto.style.display = "none";
	linhas.style.display = "none";
	dividir.style.display = "none";

	if(select.value === "imagem"){
		imagem.style.display = "block";
		$(".tr1Pai").append(imagem);
		}

		else if(select.value === "texto"){
		texto.style.display = "block";
		$(".tr1mPai").append(texto);	
		}

		else if(select.value === "linhas"){
		linhas.style.display = "block";
		$(".tr1Pai").append(linhas);	
		}

		else if(select.value === "dividir"){
		dividir.style.display = "block";
		$(".tr1Pai").append(dividir);	
		}
	 }



	 function disparaFuncaoOption2(){

	var imagem2 = document.querySelector(".imagem2");
var texto2 = document.querySelector(".texto2");
var linhas2 = document.querySelector(".linhas2");
var dividir2 = document.querySelector(".dividir2");
var divpai2 = document.querySelector(".divpai2");
var select2 = document.querySelector("#list2");



	imagem2.style.display = "none";
	texto2.style.display = "none";
	linhas2.style.display = "none";
	dividir2.style.display = "none";

	if(select2.value === "imagem2"){
		imagem2.style.display = "block";
		$(".tr2Pai").append(imagem2);
		}

		else if(select2.value === "texto2"){
		texto2.style.display = "block";
		$(".tr2Pai").append(texto2);	
		}

		else if(select2.value === "linhas2"){
		linhas2.style.display = "block";
		$(".tr2Pai").append(linhas2);	
		}

		else if(select2.value === "dividir2"){
		dividir2.style.display = "block";
		$(".tr2Pai").append(dividir2);	
		}
	 }





