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
    var fecha=new Date(); //Actualizar fecha.
    var hora=fecha.getHours(); //hora actual
    var minuto=fecha.getMinutes(); //minuto actual
    var segundo=fecha.getSeconds(); //segundo actual
    var dia=fecha.getDay(); //día actual
    var mes=fecha.getMonth(); //mes actual
   	var meses=new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	var dias=new Array("Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb");
        if (hora<10) { //dos cifras para la hora
            hora="0"+hora;
            }
        if (minuto<10) { //dos cifras para el minuto
            minuto="0"+minuto;
            }
        if (segundo<10) { //dos cifras para el segundo
            segundo="0"+segundo;
            }
         //ver en el recuadro del reloj:
	setTimeout("actual()",1000); 
    $("#reloj").html(hora+" : "+minuto+" : "+segundo);	
	$("#fecha").html(dias[dia]+ " , "+fecha.getDate()+ " de "+ meses[mes]);
}
//iniciar temporizador
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
	var time=new Date(); //Actualizar fecha.
    var h=time.getHours(); //hora actual
    var min=time.getMinutes(); //minuto actual
    var seg=time.getSeconds(); //segundo actual
   	if (h<10) { //dos cifras para la hora
	    h="0"+h;
	}
	if (min<10) { //dos cifras para el minuto
	    min="0"+min;
	}
	if (seg<10) { //dos cifras para el segundo
	    seg="0"+seg;
	}
    // var day=time.getDay(); //día actual
    // var month=time.getMonth(); //mes actual
   	setTimeout('capitales('+num+')',1000);
    var husoCapital= husoHorario[num].name;
    var husoHora= husoHorario[num].hora;
   	var sumaHora = h + parseInt(husoHora);
    $("#time"+num).html('<p class= "nombre">'+husoCapital+'</p> <span class="hora">' + sumaHora + ' : ' +min+ ' : ' +seg+ '</span>');
}