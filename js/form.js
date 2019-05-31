  $("#wedding_form").submit(function(e) {
  	var output = {
  		name: $("#name").val(),
  		phone: $("#phone").val(),
  		address: $("#address").val(),
  		attendance: $("[name='attendance']:checked").val(),
  		persons: $("#persons").val(),
  		children: $("#children").val(),
  		vegetarian: $("[name='vegetarian']:checked").val(),
  		message: $("#message").val()
  	};
  	console.log(output);
		db.ref(Date.now()).set(output);
		$('#thank_modal').modal('open');
		$('#wedding_form')[0].reset();
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false;
  });
	$('input[type=radio][name=attendance]').on('change', function() {
		if (this.value == 1) {
			$("#persons").closest('div.row').show();
			$("#children").closest('div.row').show();
			$("[name=vegetarian]").closest('div.row').show();
		}
		else {
                    if (this.value == 0) {
                        $("#address").prop("required", true);
                        $("#address").closest('div.row').show();
                    }
                    else {
                        $("#address").removeAttr("required");
                        $("#address").closest('div.row').hide();
                    }
                    $("#persons").closest('div.row').hide();
                    $("#children").closest('div.row').hide();
                    $("[name=vegetarian]").closest('div.row').hide();
		}
	});

