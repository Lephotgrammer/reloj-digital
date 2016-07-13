$(function() {
	$("#reloj").on(actual());
	$(".nombreCapital").click(function() {
		var click= this.checked;
		num = $(this).attr("data");
		if (click==true) {
			$("#horaCapital").append('<div id= "time' +num+ '" ></div>');
			capitales(num);
		}else {
			$("#time"+num).remove();
		}
	}); 
});
var num= 0;

function actual() {
    var fecha=new Date(); 
    var hora=fecha.getHours(); 
    var minuto=fecha.getMinutes(); 
    var segundo=fecha.getSeconds(); 
    var dia=fecha.getDay(); 
    var mes=fecha.getMonth(); 
   	var meses=new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var dias=new Array("Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb");
        if (hora<10) { 
            hora="0"+hora;
            }
        if (minuto<10) { 
            minuto="0"+minuto;
            }
        if (segundo<10) { 
            segundo="0"+segundo;
            }

	setTimeout("actual()",1000); 
    $("#reloj").html(hora+" : "+minuto+" : "+segundo);	
	$("#fecha").html(dias[dia]+ " , "+fecha.getDate()+ " de "+ meses[mes]);
}

var husoHorario= [
	{
		name:"Chicago",
		hora: 0
	},
	{
		name:"Sao Pablo",
		hora: 2
	},
	{
		name:"Santiago",
		hora: 2
	},
	{
		name:"Mexico D.F",
		hora: - 1
	},
	{
		name:"Caracas",
		hora: 1
	},
	{
		name:"Brasilia",
		hora: 2
	},
	{
		name:"Quito",
		hora: 0
	},
	{
		name:"Guayaquil",
		hora: 0
	},
	{
		name:"Santa Marta",
		hora: 1
	},
	{
		name:"Bogota",
		hora: 1
	}
]; 

function capitales(num) {
	var time=new Date(); 
    var h=time.getHours(); 
    var min=time.getMinutes(); 
    var seg=time.getSeconds(); 
   	if (h<10) { 
	    h="0"+h;
	}
	if (min<10) { 
	    min="0"+min;
	}
	if (seg<10) { 
	    seg="0"+seg;
	}

   	setTimeout('capitales('+num+')',1000);
    var husoCapital= husoHorario[num].name;
    var husoHora= husoHorario[num].hora;
   	var sumaHora = h + parseInt(husoHora);
    $("#time"+num).html('<p class= "nombre">'+husoCapital+'</p> <span class="hora">' + sumaHora + ' : ' +min+ ' : ' +seg+ '</span>');
}