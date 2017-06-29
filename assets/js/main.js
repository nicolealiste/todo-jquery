$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var task=$("#tarea").val();
		var lastSibling = $('#todo-list > .todo-wrap:last-of-type > input').attr('id');
  		var newId = Number(lastSibling) + 1;
		if(task == ""){
			alert("Debes anotar una tarea");
		}else{
			$("#items").append('<div><span class="editing todo-wrap"><input type="checkbox" id="'+newId+'"/><label for="'+newId+'" class="todo"><i class="fa fa-check"></i>' + task + '</label></span></div>');

		}
	})
})

      
  