$(document).ready(function(){
	$.fn.enterKey = function (fnc) {
	    return this.each(function () {
	        $(this).keypress(function (ev) {
	            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
	            if (keycode == '13') {
	                fnc.call(this, ev);
	            }
	        })
	    })
	};
	$("#tarea").enterKey(function(e){
    	$(this).trigger('enterEvent');
  		e.preventDefault();
		localStorage.task=document.getElementById("tarea").value;
		var lastSibling = $('#todo-list > .todo-wrap:last-of-type > input').attr('id');
  		var newId = Number(lastSibling) + 1;
		if(localStorage.task == ""){
			alert("Debes anotar una tarea");
		}else{
			$("#items").append('<div><input type="checkbox" id="'+newId+'"/><label for="'+newId+'" class="todo">' + localStorage.task + '</label><span class="delete-item" title="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span></div>');
			$("#tarea").val("");
		};
		$('.delete-item').click(function(){
		  var parentItem = $(this).parent();
		  $(parentItem).remove(); 
		});
		$ ("input").click(function(){
		var pItem = $(this).parent("div");
		$("#cItems").append(pItem);
		});
		
	});
	$("#1").click(function(e){
		e.preventDefault();
		$(".1").remove();
		$("#cItems").append('<span class="todo-wrap"><input type="checkbox" id="1" checked/><label for="1" class="todo">Ir de compras</label><span class="delete-item" title="remove"><i class="fa fa-trash-o" aria-hidden="true"></i></span></span>');
		 
	});
	$('.delete-item').click(function(){
	  var parentItem = $(this).parent();
	  $(parentItem).remove(); 
	});
})


      
  