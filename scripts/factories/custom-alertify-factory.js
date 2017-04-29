// Phan Tiến Hưng
// Custom Alterify Factory
app.factory("Alertifier", function(alertify){
	return {
    error : function(message){
      alertify.alert(message);
			jQuery(".alertify .dialog div").addClass("error");
			jQuery(".alertify .dialog div.error").prepend("<div class='header'><span class='fa fa-exclamation vcenter'></span></div>");
			jQuery(".alertify .dialog div.error").addClass("animated shake");
    }
  }
});
