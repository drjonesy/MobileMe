/*Developed by Ryan Jones*/
$("#inputText").attr("maxlength", 100);
		$("#displayText").html("dummy text");
		$("#inputText").html("dummy text");
		$("#fontStyle").change(function(){

			if($(this).val() === "muli"){
				$("#displayText").attr("class", "font-muli");
				$(this).toggleClass("font-muli");
				$("#displayText").html($("#inputText").val());
			}
			if($(this).val() === "indie_flower"){
				$("#displayText").attr("class", "font-indie-flower");
				$(this).toggleClass("font-indie-flower");
				$("#displayText").html($("#inputText").val());
			}
			if($(this).val() === "lobster"){
				$("#displayText").attr("class", "font-lobster");
				$(this).toggleClass("font-lobster");
				$("#displayText").html($("#inputText").val());
			}
			if($(this).val() === "poiret_one"){
				$("#displayText").attr("class", "font-poiret-one");
				$(this).toggleClass("font-poiret-one");
				$("#displayText").html($("#inputText").val());
			}
			if($(this).val() == "default"){
				$("#displayText").attr("class", "font-default");
				$(this).attr("class", "block field-app");
			}
		});

		$(".light-grey").click(function(){
			var color = $(this).css("background-color");		
			$("#displayText").css("color", color);
		});
		$(".dark-grey").click(function(){
			var color = $(this).css("background-color");		
			$("#displayText").css("color", color);
		});
		$(".blue-grey").click(function(){
			var color = $(this).css("background-color");		
			$("#displayText").css("color", color);
		});