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
		var task=$("#tarea").val();
		var lastSibling = $('#todo-list > .todo-wrap:last-of-type > input').attr('id');
  		var newId = Number(lastSibling) + 1;
		if(task == ""){
			alert("Debes anotar una tarea");
		}else{
			$("#items").append('<div><span class="editing todo-wrap"><input type="checkbox" id="'+newId+'"/><label for="'+newId+'" class="todo">' + task + '</label><span class="delete-item" title="remove"><button>x</button></span></span></div>');

		}
	});
})


      
  