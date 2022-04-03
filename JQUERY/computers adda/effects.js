$(document).ready(function(){

//display effects
	 $("#show").click(function(){
	 $("p").hide(2000,function(){
	 $('input[type="text"]').hide(10000,function(){
	 $('p').show(10000,function(){
	 $('input[type="text"]').show();

});
	 	});
	         });     });

//fade effects
	 $('#fade').click(function(){
	 $('p').fadeOut("slow",function(){
	 $('input[type="text"]').fadeTo(function(){
	 $('h1').fadeTo(2000,0.2);
	 				});
	 			});
	 		});
//sliding effects	
     $('#slide').click(function(){
	 $('h5').slideDown(4000);

	 
});
});