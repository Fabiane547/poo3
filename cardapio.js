// JavaScript Document

$(document).ready(function(){
	/* tipos e tamanho de lasanha */
	$("#bolo").on("click", function(){
		if(($("#bolo").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".boloT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".boloT").slideUp("slow")
		}
	});
	$("#qp").on("click", function(){
		if(($("#qp").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".qpT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".qpT").slideUp("slow")
		}
	});
	$("#fCremoso").on("click", function(){
		if(($("#fCremoso").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".fCremosoT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".fCremosoT").slideUp("slow")
		}
	});
	$("#fBacon").on("click", function(){
		if(($("#fBacon").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".fBaconT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".fBaconT").slideUp("slow")
		}
	});
	$("#fCream").on("click", function(){
		if(($("#fCream").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".fCreamT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".fCreamT").slideUp("slow")
		}
	});
	$("#fPalmito").on("click", function(){
		if(($("#fPalmito").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".fPalmitoT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".fPalmitoT").slideUp("slow")
		}
	});
	$("#costela").on("click", function(){
		if(($("#costela").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".costelaT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".costelaT").slideUp("slow")
		}
	});
	$("#costelaB").on("click", function(){
		if(($("#costelaB").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".costelaBT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".costelaBT").slideUp("slow")
		}
	});
	$("#camarao").on("click", function(){
		if(($("#camarao").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".camaraoT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".camaraoT").slideUp("slow")
		}
	});
	$("#vege").on("click", function(){
		if(($("#vege").is(":checked"))==true){
			$(this).parent().parent().parent().addClass("alert").addClass("alert-success").attr('role','alert')
			$(".vegeT").slideDown("slow")
		}else{
			$(this).parent().parent().parent().removeClass("alert").removeClass("alert-success").removeAttr('role','alert')
			$(".vegeT").slideUp("slow")
		}
	});
	/*botões mais e menos*/
	$("#menos09").on("click", function(){
		var id1=$("#op09");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais09").on("click", function(){
		var id1=$("#op09");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos10").on("click", function(){
		var id1=$("#op10");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais10").on("click", function(){
		var id1=$("#op10");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos11").on("click", function(){
		var id1=$("#op11");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais11").on("click", function(){
		var id1=$("#op11");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos12").on("click", function(){
		var id1=$("#op12");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais12").on("click", function(){
		var id1=$("#op12");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos13").on("click", function(){
		var id1=$("#op13");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais13").on("click", function(){
		var id1=$("#op13");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos14").on("click", function(){
		var id1=$("#op14");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais14").on("click", function(){
		var id1=$("#op14");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos15").on("click", function(){
		var id1=$("#op15");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais15").on("click", function(){
		var id1=$("#op15");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos16").on("click", function(){
		var id1=$("#op16");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais16").on("click", function(){
		var id1=$("#op16");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos17").on("click", function(){
		var id1=$("#op17");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais17").on("click", function(){
		var id1=$("#op17");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos18").on("click", function(){
		var id1=$("#op18");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais18").on("click", function(){
		var id1=$("#op18");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	$("#menos19").on("click", function(){
		var id1=$("#op19");
		if(parseInt(id1.text())>0){
			var quant=parseInt($(id1).text());
			var res=quant-1;
			$(id1).text(res);
		}
	});
	$("#mais19").on("click", function(){
		var id1=$("#op19");
		var quant=parseInt($(id1).text());
		var res=quant+1;
		$(id1).text(res);
	});
	
	function paraReal(real){
        var  total = 'R$' + real.toFixed(2).replace('.', ',').split('').reverse().map((v, i) => i > 5 && (i + 6) % 3 === 0 ? `${v}.` : v).reverse().join('');
        return total;
    }
	
	var data = new Date(), hora = data.getHours()
	if(hora<16 || hora>23){
		$("#enviar").hide()
		$(".botao").show()
		
	}
	else{
		$("#enviar").show()
		$(".botao").hide()
		$("#enviar").on("click",function(){
		var pedido="Olá, gostaria de pedir:%0a%0a*LASANHA*%0a";
		var valor=0.00, valorReal=0.00	
				
		var nome=$("#nome").val()
		var endereco=$("#endereco").val()
		var numero=$("#numero").val()
		var bairro=$("#bairro").val()
		var complemento=$("#complemento").val()
		var pagamento=$("input[name='pagamento']:checked").val()
		var observacoes=$("#observacoes").val()
		var b01=parseInt($("#op09").text()),
			b02=parseInt($("#op10").text()),
			b03=parseInt($("#op11").text()),
			b04=parseInt($("#op12").text()),
			b05=parseInt($("#op13").text()),
			b06=parseInt($("#op14").text()),
			b07=parseInt($("#op15").text()),
			b08=parseInt($("#op16").text()),
			b09=parseInt($("#op17").text()),
			b10=parseInt($("#op18").text()),
			b11=parseInt($("#op19").text())
		
		var taxa=5.00
		var desconto=$("#desconto").val()
		var erro=""
		var error=0
		if(nome.length<=3 || nome.indexOf('')==-1){
			error++
			erro+="Digite seu nome corretamente.<br>"	
		}
		if(endereco.length<=3 || endereco.indexOf('')==-1){
			error++
			erro+="Digite seu endereço corretamente.<br>"
		}
		if(numero.length==0){
			error++
			erro+="Número da residência é obrigatório.<br>"
		}
		if(bairro==""){
			error++
			erro+="Digite seu bairro corretamente.<br>"
		}
		else{
			$(".validate").html("").hide()
		}
			
			
		if(error!=0){
			$(".validate").html(erro).show();
			stop()
		}else{
		if($("#bolo").is(":checked")==true){
			pedido+="Bolonhesa - "
			if($("#boloP").is(":checked")==true){
				pedido+="pequena (R$10,00)%0a"
				valor+=10.00
			}
			else if($("#boloM").is(":checked")==true){
				pedido+="média (R$22,00)%0a"
				valor+=22.00
			}
			else if($("#boloG").is(":checked")==true){
				pedido+="grande (R$45,00)%0a"
				valor+=45.00
			}
			
		}
		if($("#qp").is(":checked")==true){
			pedido+="Queijo e presunto de peru - "
			if($("#qpP").is(":checked")==true){
				pedido+="pequena(R$10,00)%0a"
				valor+=10.00
			}
			else if($("#qpM").is(":checked")==true){
				pedido+="média (R$20,00)%0a"
				valor+=20.00
			}
			else if($("#qpG").is(":checked")==true){
				pedido+="grande (R$40,00)%0a"
				valor+=40.00
			}
			
		}
		if($("#fCremoso").is(":checked")==true){
			pedido+="Frango cremoso - "
			if($("#fCremosoP").is(":checked")==true){
				pedido+="pequena(R$10,00)%0a"
				valor+=10.00
			}
			else if($("#fCremosoM").is(":checked")==true){
				pedido+="média (R$22,00)%0a"
				valor+=22.00
			}
			else if($("#fCremosoG").is(":checked")==true){
				pedido+="grande (R$45,00)%0a"
				valor+=45.00
			}
			
		}
		if($("#fBacon").is(":checked")==true){
			pedido+="Frango com bacon - "
			if($("#fBaconP").is(":checked")==true){
				pedido+="pequena(R$12,00)%0a"
				valor+=12.00
			}
			else if($("#fBaconM").is(":checked")==true){
				pedido+="média (R$25,00)%0a"
				valor+=25.00
			}
			else if($("#fBaconG").is(":checked")==true){
				pedido+="grande (R$45,00)%0a"
				valor+=45.00
			}
			
		}
		if($("#fCream").is(":checked")==true){
			pedido+="Frango com cream cheese - "
			if($("#fCreamP").is(":checked")==true){
				pedido+="pequena(R$15,00)%0a"
				valor+=15.00
			}
			else if($("#fCreamM").is(":checked")==true){
				pedido+="média (R$30,00)%0a"
				valor+=30.00
			}
			else if($("#fCreamG").is(":checked")==true){
				pedido+="grande (R$60,00)%0a"
				valor+=60.00
			}
			
		}
		if($("#fPalmito").is(":checked")==true){
			pedido+="Frango com palmito - "
			if($("#fPalmitoP").is(":checked")==true){
				pedido+="pequena(R$15,00)%0a"
				valor+=15.00
			}
			else if($("#fPalmitoM").is(":checked")==true){
				pedido+="média (R$30,00)%0a"
				valor+=30.00
			}
			else if($("#fPalmitoG").is(":checked")==true){
				pedido+="grande (R$60,00)%0a"
				valor+=60.00
			}
			
		}
		if($("#costela").is(":checked")==true){
			pedido+="Costela - "
			if($("#costelaP").is(":checked")==true){
				pedido+="pequena(R$12,00)%0a"
				valor+=12.00
			}
			else if($("#costelaM").is(":checked")==true){
				pedido+="média (R$25,00)%0a"
				valor+=25.00
			}
			else if($("#costelaG").is(":checked")==true){
				pedido+="grande (R$45,00)%0a"
				valor+=45.00
			}
			
		}
		if($("#costelaB").is(":checked")==true){
			pedido+="Costela com bacon - "
			if($("#costelaBP").is(":checked")==true){
				pedido+="pequena(R$15,00)%0a"
				valor+=15.00
			}
			else if($("#costelaBM").is(":checked")==true){
				pedido+="média (R$30,00)%0a"
				valor+=30.00
			}
			else if($("#costelaBG").is(":checked")==true){
				pedido+="grande (R$65,00)%0a"
				valor+=65.00
			}
			
		}
		if($("#camarao").is(":checked")==true){
			pedido+="Camarão rosa - "
			if($("#camaraoP").is(":checked")==true){
				pedido+="pequena(R$20,00)%0a"
				valor+=20.00
			}
			else if($("#camaraoM").is(":checked")==true){
				pedido+="média (R$40,00)%0a"
				valor+=40.00
			}
			else if($("#camaraoG").is(":checked")==true){
				pedido+="grande (R$85,00)%0a"
				valor+=85.00
			}
			
		}
		if($("#vege").is(":checked")==true){
			pedido+="Vegetariana - "
			if($("#vegeP").is(":checked")==true){
				pedido+="pequena(R$15,00)%0a"
				valor+=15.00
			}
			/*else if($("#vegeM").is(":checked")==true){
				pedido+="média (R$40,00)%0a"
				valor+=40.00
			}
			else if($("#vegeG").is(":checked")==true){
				pedido+="grande (R$85,00)%0a"
				valor+=85.00
			}*/
			
		}
		pedido+="%0a%0a*BEBIDA:*%0a"
			if(b01!=0){
				var vop01=parseFloat(b01)*3.00
				valor=valor+vop01
				valorReal=paraReal(vop01)
				if(b01==1)
					pedido+=b01+" Água Mineral 1,5l (valor: "+valorReal+")%0a"
				else
					pedido+=b01+" Águas Minerais 1,5l (valor: "+valorReal+")%0a"
			}
			if(b02!=0){
				var vop02=parseFloat(b02)*7.00
				valor=valor+vop02
				valorReal=paraReal(vop02)
				if(b02==1)
					pedido+=b02+" Coca-cola 1l (valor: "+valorReal+")%0a"
				else
					pedido+=b02+" Cocas-cola 1l (valor: "+valorReal+")%0a"
			}
			if(b03!=0){
				var vop03=parseFloat(b03)*10.00
				valor=valor+vop03
				valorReal=paraReal(vop03)
				if(b03==1)
					pedido+=b03+" Sukita 2l (valor: "+valorReal+")%0a"
				else
					pedido+=b03+" Sukitas 2l (valor: "+valorReal+")%0a"
			}
			if(b04!=0){
				var vop04=parseFloat(b04)*10.00
				valor=valor+vop04
				valorReal=paraReal(vop04)
				if(b04==1)
					pedido+=b04+" Fanta uva 2l (valor: "+valorReal+")%0a"
				else
					pedido+=b04+" Fantas uva 2l (valor: "+valorReal+")%0a"
			}
			if(b05!=0){
				var vop05=parseFloat(b05)*8.00
				valor=valor+vop05
				valorReal=paraReal(vop05)
				if(b05==1)
					pedido+=b05+" Guaraná 1,5l (valor: "+valorReal+")%0a"
				else
					pedido+=b05+" Guaranás 1,5l (valor: "+valorReal+")%0a"
			}
			if(b06!=0){
				var vop06=parseFloat(b06)*6.00
				valor=valor+vop06
				valorReal=paraReal(vop06)
				if(b06==1)
					pedido+=b06+" Heineken long neck (valor: "+valorReal+")%0a"
				else
					pedido+=b06+" Heinekens long neck (valor: "+valorReal+")%0a"
			}
			if(b07!=0){
				var vop07=parseFloat(b07)*5.00
				valor=valor+vop07
				valorReal=paraReal(vop07)
				if(b07==1)
					pedido+=b07+" Budweiser long neck (valor: "+valorReal+")%0a"
				else
					pedido+=b07+" Budweisers long neck (valor: "+valorReal+")%0a"
			}
			if(b08!=0){
				var vop08=parseFloat(b08)*5.00
				valor=valor+vop08
				valorReal=paraReal(vop08)
				if(b08==1)
					pedido+=b08+" Bohemia long neck (valor: "+valorReal+")%0a"
				else
					pedido+=b08+" Bohemias long neck (valor: "+valorReal+")%0a"
			}
			if(b09!=0){
				var vop09=parseFloat(b09)*8.00
				valor=valor+vop09
				valorReal=paraReal(vop09)
				if(b09==1)
					pedido+=b09+" Skol sense (valor: "+valorReal+")%0a"
				else
					pedido+=b09+" Skol sense (valor: "+valorReal+")%0a"
			}
			if(b10!=0){
				var vop10=parseFloat(b10)*28.00
				valor=valor+vop10
				valorReal=paraReal(vop10)
				if(b10==1)
					pedido+=b10+" Caixinha itaipava (valor: "+valorReal+")%0a"
				else
					pedido+=b10+" Caixinhas itaipava (valor: "+valorReal+")%0a"
			}
			if(b11!=0){
				var vop11=parseFloat(b11)*33.00
				valor=valor+vop11
				valorReal=paraReal(vop11)
				if(b11==1)
					pedido+=b11+" Caixinha Bohemia (valor: "+valorReal+")%0a"
				else
					pedido+=b11+" Caixinhas Bohemia (valor: "+valorReal+")%0a"
			}
			if(bairro!=""){
				var b2=$("#bairro").val().split("-")
				if(b2[0]==1){
					taxa=5.00
					bairro=b2[1]
				}else if(b2[0]==2){
					taxa=6.00
					bairro=b2[1]
				}else if(b2[0]==3){
					taxa=7.00
					bairro=b2[1]
				}else if(b2[0]==4){
					taxa=8.00
					bairro=b2[1]
				}
			}
			
			
			
			if(b01==0 && b02==0 && b03==0 && b04==0 && b05==0 && b06==0 && b07==0 && b08==0 && b09==0 && b10==0 && b11==0)
			pedido+=" Sem bebidas.%0a"
			pedido+="%0a*INFORMAÇÕES PARA ENTREGA*%0a"
			pedido+="Nome: "+nome+"%0a"
			pedido+="Endereço: "+endereco+", nº: "+numero+"%0a"
			pedido+="Bairro: "+bairro+"%0a"
			if(complemento!=""){
				pedido+="Complemento: "+complemento+"%0a"	
			}
			pedido+="Forma de pagamento: "+pagamento+"%0a"
			if(desconto==="ENTREGAGRATIS"){
				pedido+="Cupom: ENTREGA OFF.%0a"
				taxa=0.00
			}
			if(desconto==="DESCONTO10"){
				pedido+="Cupom: 10% de desconto.%0a"
				valor=valor*0.9
			}
			
			if(observacoes.length!=0)
				pedido+="Observações: "+observacoes+"%0a"
			
			if(taxa==0.0)
				pedido+="TAXA DE ENTREGA: *GRÁTIS*"
			else
				pedido+="TAXA DE ENTREGA: *"+paraReal(taxa)+"*"
			valor+=taxa
			pedido+="%0a%0aTOTAL: "+paraReal(valor)
			
			var site="https://api.whatsapp.com/send?phone=5596991804573text="+pedido.replace(" ","%20")
			window.location.href = site;
		}
	})
	}
})