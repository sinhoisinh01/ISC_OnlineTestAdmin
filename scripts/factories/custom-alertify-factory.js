// Phan Tiến Hưng
// Custom Alterify Factory
app.factory("Alertifier", function(alertify){
	return {
		alert : function(type,message){
			if(type === "confirm"){
				alertify.alert(message);
				jQuery(".alertify .dialog div").addClass("error");
				jQuery(".alertify .dialog div.error").prepend("<div class='header'><span class='fa fa-exclamation vcenter'></span></div>");
				jQuery(".alertify .dialog div.error").addClass("animated shake");
			}
			else if(type === "error"){
				alertify.alert(message);
				jQuery(".alertify .dialog div").addClass("error");
				jQuery(".alertify .dialog div.error").prepend("<div class='header'><span class='fa fa-exclamation vcenter'></span></div>");
				jQuery(".alertify .dialog div.error").addClass("animated shake");
			}
			else if(type === "success"){
				alertify.alert(message);
				jQuery(".alertify .dialog div").addClass("error");
				jQuery(".alertify .dialog div.error").prepend("<div class='header'><span class='fa fa-exclamation vcenter'></span></div>");
				jQuery(".alertify .dialog div.error").addClass("animated shake");
			}
			else if(type === "warn"){
				alertify.alert(message);
				jQuery(".alertify .dialog div").addClass("error");
				jQuery(".alertify .dialog div.error").prepend("<div class='header'><span class='fa fa-exclamation vcenter'></span></div>");
				jQuery(".alertify .dialog div.error").addClass("animated shake");
			}
		},
		confirm: function(type,message,ok,cancel){
			if(type === "warn"){
				alertify.confirm(message, function () {
						ok();
					}, function() {
						cancel();
				});
				jQuery(".alertify .dialog div").addClass("warn");
				var button = jQuery(".alertify .dialog div.warn nav button");
				jQuery(".alertify .dialog div.warn nav").append(button[1]);
				jQuery(".alertify .dialog div.warn nav").append(button[0]);
				jQuery(".alertify .dialog div.warn").prepend("<div class='header'><span class='fa fa-exclamation-triangle vcenter'></span></div>");
				jQuery(".alertify .dialog div.warn").addClass("animated bounce");
			}
		},
		toast : function(type,message){
			if(type === "confirm"){
				alertify.delay(10000).log(message);
				jQuery(".alertify-logs div").removeClass("default").addClass("error");
				jQuery(".alertify-logs").css("margin-left","calc(50% - "+(jQuery(".alertify-logs").width() / 2)+"px)");
			}
			else if(type === "error"){
				alertify.delay(10000).log(message);
				jQuery(".alertify-logs div").removeClass("default").addClass("error");
				jQuery(".alertify-logs").css("margin-left","calc(50% - "+(jQuery(".alertify-logs").width() / 2)+"px)");
			}
			else if(type === "success"){
				alertify.delay(10000).log(message);
				jQuery(".alertify-logs div").removeClass("default").addClass("error");
				jQuery(".alertify-logs").css("margin-left","calc(50% - "+(jQuery(".alertify-logs").width() / 2)+"px)");
			}
			else if(type === "warn"){
				alertify.delay(10000).log(message);
				jQuery(".alertify-logs div").removeClass("default").addClass("error");
				jQuery(".alertify-logs").css("margin-left","calc(50% - "+(jQuery(".alertify-logs").width() / 2)+"px)");
			}
		},
		showMessage : function(type,message,container){
			jQuery(container).addClass("message error");
			jQuery(container).append("<p>"+message+"</p>");
		}
  }
});
