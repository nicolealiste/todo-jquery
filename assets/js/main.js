$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var task=$("#tarea").val();
		if(task == ""){
			alert("Debes anotar una tarea");
		}else{
			$("#items").append('<div><span class="left-align">' + task + '</span></div>');
		}
	})
})
