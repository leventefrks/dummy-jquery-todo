$(function() {

/* add item */
  $(function() {
	  $('.header__button').click(function() {
		var item = $('.header__input-field').val();

			if(item) {
			  $('.container--todo').fadeIn(300);
		    $('.container--list-todo').append('<li class="container__listitem"><i class="fa fa-sticky-note" aria-hidden="true"></i>'+ item +'<div class="container__listitem-buttons"><button type="button" class="container__listitem-info"><i class="fa fa-lg fa-info"></i></button><button type="button" class="container__listitem-remove"><i class="fa fa-lg fa-trash-o"></i></button><button type="button" class="container__listitem-complete"><i class="fa fa-lg fa-check-circle-o"></i></button></div></li>');
			  $('.header__input-field').val('');
	  	}
	  });
  });

/* complete item */
  $(function() {
		  $('.container__list').on('click','.container__listitem-complete', function() {
			  $('.container--completed').fadeIn(300);
			  $(this).closest('.container__listitem').appendTo('.container--list-completed');
				$(this).closest('.container__listitem-complete').replaceWith('<button type="button"><i class="fa fa-lg fa-check-circle"></i></button>');
				hideContainer(event);
		  });
   });

/* remove item */
  $(function() {
	  $('.container__list').on('click','.container__listitem-remove', function(event) {
      $(this).closest('.container__listitem').remove();
        hideContainer(event);
	  });
	});

/* toggle containers */
  $(function() {
		$('.container__title').click(function() {
			if ($(this).parent('.container').find('.container__listitem').length > 0 ) {
 		    $(this).parent('.container').find('.container__list').slideToggle();
 			}
		});
 	 });

	 /* hide element */
	function hideContainer(e){
		if( $(e.delegateTarget).has('.container__listitem').length == 0){
			$(e.delegateTarget).closest('.container').fadeOut(300);
		}
	}
});
