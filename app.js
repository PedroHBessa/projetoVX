//////////////////GLOBAL VAR CREATION///////////////////////////////

var numTr = 0;
var tr = 'tr';
numTr;
var bool = true;
var numberTr;
var trPai;
var x;



//////////////////FUNCTION CREATION////////////////////////////
	//function which trigger the form
	function formTrigger(){

		trPai = document.querySelector('.trPai');
		trPai.innerHTML = "";
		var selectForm = document.querySelector('.selectForm').value;	
		numTr = 0;

		
		for( var i = 0; i < selectForm ; i++  ){
			
			numTr++;
			var form = 'TR'+numTr+':<div class="tr'+numTr+'" id="tr'+numTr+'"><form class="form"> <select class="list" id="list'+numTr+'" name="list" onchange="optionTrigger('+numTr+');"><option selected disabled="disabled" ></option><option value="image">Image</option><option value="text">Text</option><option value="line">Line</option><option value="split">Split</option> </select></form></div>'
			
			$(trPai).append(form);		

		}
		
	}
	//function which trigger the option inside a select tag
	function optionTrigger(num){
		x = num - 1;
	
		select = document.querySelector("#list"+num);
		trPai = document.querySelector('.trPai');

		if(trPai.children[x].children[1]!==undefined){	
		trPai.children[x].children[1].remove();
		}

		if(select.value === "image"){
			addImgBlock(num);}
			if(select.value === "text"){
			addTxtBlock(num);}
			if(select.value === "line"){
			addLineBlock(num);}
			if(select.value === "split"){
			addSplitBlock(num);}
		}
	

	 function addImgBlock(num){

	 	 $("#tr"+num).append(divBlock.imgBlock)
	 	 
	 }

	 function addTxtBlock(num){
	 	 $("#tr"+num).append(divBlock.txtBlock);
	 }

	 function addLineBlock(num){
	 	 $("#tr"+num).append(divBlock.lineBlock);
	 }

	 function addSplitBlock(num){
	 	 $("#tr"+num).append(divBlock.splitBlock);
	 }



	 //////////////OBJECTS CREATION///////////////////////
	 //object which contains the blocks of data
	 var imageObj = {
	 	
	 	tdWidth: 600,	 	
	 	imgName: "shape_top",
	 	imgExt:".png'",	 	
	 	imgWidth: 600,
	 	imgHeight: 33,

	 	
	 	concatImgObj: function(){
	 		var imageHTML = "<tr><td> width='"+this.tdWidth+"'><img src='"+this.imgName+"."+this.imgExt+"' width='"+this.imgWidth+"' height='"+this.imgHeight+"' style='display: block; border: 0;' alt=''></td></tr>"
	 		return imageHTML;
	 	}

	 }

	 var divBlock = {
	 	imgBlock: '<form class="formImage" id="formImage"><div class="imgBlock"><div class="imagem"> <br> <label for="imgName">Image Name:</label> <input type="text" id="" /><input type="radio" name="extension" /> <label for="extension">.jpg</label> <input type="radio" name="extension" /> <label for="extension">.png</label> <br><br> <label for="link">LINK SRC:</label> <input type="text" id="" /> <br><br><button>Send</button></form></div>',
	 	txtBlock: '<form class="formText" id="formText"><div class="txtBlock"> <br> <label for="text">Text:</label> <input type="text" /><input type="radio" name="fontFamily" /> <label for="fontFamily">globotipo_textoblack</label> <input type="radio" name="fontFamily" /> <label for="fontFamily">globotipo_textoregular</label> <br><br><label for="fontSize">Font Size:</label> <input type="text" /> <br><br> <label for="lineHeight">Line Height:</label> <input type="text" /> <br><br> <label for="color">Color:</label> <input type="text" /> <br><br> <label for="textAlign">Text Align:</label> <input type="text" /> <br><br><button>Send</button></div></form>',
	 	lineBlock: '<form class="formLine" id="formLine"><div class="lineBlock"> <br> <label for="lineHeight">Line Height:</label> <input type="text" /> <br><br><button>Send</button></div></form>',
 	 	splitBlock: '<form class="formSplit" id="formSplit"><div class="splitBlock"> <br> <label for="tr">TR:</label> <select id="" name=""><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select> <br><br> <label for="tr">TD:</label><select id="" name=""><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select> <br><br><button>Send</button></div></form>'
	 }






      
