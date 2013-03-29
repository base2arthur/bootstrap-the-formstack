;(function($) {
	$(function() {
		$('.fsBody link').remove();
		$('.fsBody style').remove();

		$('.fsPage')
			.removeClass('fsPage')
			.addClass('row-fluid');

		$('.fsSection')
			.removeClass('fsSection');

		$('.fs1Col')
			.removeClass('fs1Col')
			.addClass('row-fluid');

		// $('.fs2Col')
		// 	.removeClass('fs2Col')
		// 	.addClass('span6');

		// $('.fs3Col')
		// 	.removeClass('fs3Col')
		// 	.addClass('span4');

		// $('.fs4Col')
		// 	.removeClass('fs4Col')
		// 	.addClass('span3');

		$('.fsRow.fsFieldRow.fsLastRow')
			.removeClass('fsRow')
			.removeClass('fsFieldRow')
			.removeClass('fsLastRow')
			.addClass('row-fluid');
			
		$('.fsOptionLabel > input[type="checkbox"]').each(function(el, i) {
			$(this)
				.parent()
				.removeClass('fsOptionLabel')
				.addClass('checkbox');
		});

		$('.fsOptionLabel > input[type="radio"]').each(function(el, i) {
			$(this)
				.parent()
				.removeClass('fsOptionLabel')
				.addClass('radio');
		});

		$('.radio.horizontal')
			.removeClass('horizontal')
			.addClass('inline');

		$('.checkbox.horizontal')
			.removeClass('horizontal')
			.addClass('inline');

		$('.fsSupporting')
			.removeClass('fsSupporting')
			.addClass('help-block');
			
		$('.fsSubmitButton')
			.removeClass('fsSubmitButton')
			.addClass('btn');


		$('input', $('.fsBody')).attr('style', '');

		$('.fieldset-content')
			.removeClass('fieldset-content')
			.addClass('controls').addClass('controls-row');


		function restructure_fields(container_class, span_class, context, new_div) {
			var container = $('div.' + container_class, context);
			$('input, label, select', container).addClass(span_class);
			var new_label = $('label', container).clone();
			$('label', container).remove();
			new_div.append(new_label);

			$('input, select', container).unwrap();
		}
			
		$('.fsSubFieldGroup').each(function(i, el) {

			$(this).addClass('controls').addClass('controls-row').removeClass('fsSubFieldGroup');
			var new_div = $('<div class="controls controls-row" />').insertAfter($(this));

			var classes = {
				'fsFieldCity': 'span4',
				'fsFieldState': 'span1',
				'fsFieldZip' : 'span2'
			}

			for (var container_class in classes) {
				restructure_fields(container_class, classes[container_class], $(this), new_div);
			}

		});
	});
})(jQuery);