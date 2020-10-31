//////////////////VAR CREATION///////////////////////////////




//////////////////FUNCTION CREATION////////////////////////////
	
	function formTrigger(){
		var tr1Pai = document.querySelector('.tr1Pai');
		tr1Pai.innerHTML = "";
		var selectForm = document.querySelector('.selectForm').value;
		var numTr = 0;
		
		for( var i = 0; i < selectForm ; i++  ){
			
			numTr++;
			var form = 'TR'+numTr+':<div class="tr1"><form class="form"> <select id="list" name="list" onchange="optionTrigger();"><option selected disabled="disabled" ></option><option value="image">Image</option><option value="text">Text</option><option value="line">Line</option><option value="split">Split</option> </select></form></div>'
			
			$(tr1Pai).append(form);

		}
		
	}

	function optionTrigger(){
		
		
		
		$('.formImage').remove();
		$('.formText').remove();
		$('.formLine').remove();
		$('.formSplit').remove();

		select = document.querySelector("#list");

		if(select.value === "image"){
			addImgBlock();}
			if(select.value === "text"){
			addTxtBlock();}
			if(select.value === "line"){
			addLineBlock();}
			if(select.value === "split"){
			addSplitBlock();}
		}
	

	 function addImgBlock(){
	 	 $(".blockRoot").append(divBlock.imgBlock);
	 }

	 function addTxtBlock(){
	 	 $(".blockRoot").append(divBlock.txtBlock);
	 }

	 function addLineBlock(){
	 	 $(".blockRoot").append(divBlock.lineBlock);
	 }

	 function addSplitBlock(){
	 	 $(".blockRoot").append(divBlock.splitBlock);
	 }

	 //////////////OBJECTS CREATION///////////////////////

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
	 	imgBlock: '<form class="formImage"><div class="imgBlock"><div class="imagem"> <br> <label for="imgName">Image Name:</label> <input type="text" id="" /><input type="radio" name="extension" /> <label for="extension">.jpg</label> <input type="radio" name="extension" /> <label for="extension">.png</label> <br><br> <label for="link">LINK SRC:</label> <input type="text" id="" /> <br><br><button>Send</button></form></div>',
	 	txtBlock: '<form class="formText"><div class="txtBlock"> <br> <label for="text">Text:</label> <input type="text" /><input type="radio" name="fontFamily" /> <label for="fontFamily">globotipo_textoblack</label> <input type="radio" name="fontFamily" /> <label for="fontFamily">globotipo_textoregular</label> <br><br><label for="fontSize">Font Size:</label> <input type="text" /> <br><br> <label for="lineHeight">Line Height:</label> <input type="text" /> <br><br> <label for="color">Color:</label> <input type="text" /> <br><br> <label for="textAlign">Text Align:</label> <input type="text" /> <br><br><button>Send</button></div></form>',
	 	lineBlock: '<form class="formLine"><div class="lineBlock"> <br> <label for="lineHeight">Line Height:</label> <input type="text" /> <br><br><button>Send</button></div></form>',
 	 	splitBlock: '<form class="formSplit"><div class="splitBlock"> <br> <label for="tr">TR:</label> <select id="" name=""><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select> <br><br> <label for="tr">TD:</label><select id="" name=""><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option> </select> <br><br><button>Send</button></div></form>'
	 }






      
