$(function(){
	console.log('todoApp init...');

	$('#btnAdd').click(function() {
		console.log('btnAdd clicked...');
		
		var item = $('#item').val();
		
		if(item){
			$('.todo').fadeIn(300);
		  $('ul#todo').append('<li><i class="fa fa-sticky-note" aria-hidden="true"></i>'+ item +'<div class="buttons"><button type="button" id="btnInfo"><i class="fa fa-lg fa-info"></i></button><button type="button" id="btnRemove"><i class="fa fa-lg fa-trash-o"></i></button><button type="button" id="btnComplete"><i class="fa fa-lg fa-check-circle-o"></i></button></div></li>');
			$('#item').val('');	
		}
	});
	
	$('ul').on('click','#btnRemove' ,function() {
		console.log('btnRemove clicked...');
    $(this).closest('li').remove();
	});

	 $('ul').on('click','#btnComplete', function() {
		 console.log('btnComplete clicked...');
		 $('.completed').fadeIn(300);
		 $(this).closest('li').appendTo('#completed');
	   $(this).closest('#btnComplete').replaceWith('<button type="button" id="btnCompleted"><i class="fa fa-lg fa-check-circle"></i></button>');
		 console.log('todo length:  ' + $('#todo').length);
		 console.log('complete length:  '+ $('#complete').length);	 
	 });
	 
	 $('h3').click(function(){
		console.log('task title clicked...');
		  if ($(this).parent('.container').find('ul li').length > 0 ) {
		    $(this).parent('.container').find('ul').slideToggle();
			}
	 });
	 
	  if (($('.completed').length == 0 ) || ($('.todo').length == 0 )) {
			 $(this).fadeOut(300);
		 }
	 
});