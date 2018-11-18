$("ul").on("click","li",function (event) {
	event.stopPropagation();
	$(this).toggleClass("selected");
});

$("ul").on("click","span",function (event) {
	event.stopPropagation();
	$(this).parent().remove();
});

$("input").on("keypress",function (event) {
	if (event.which == "13") {
		var input= $(this).val();
		$("input").val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ input +"</li>");
	}
});