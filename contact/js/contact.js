jQuery(document).ready(function($) { 
	function defineHeight() {
		var img = $('img.contImg');
		var imgHeight = img.height();
		var uncle = $('.uncle');
		var unHeight = uncle.height();
		var height = imgHeight + unHeight;
		$('div.brother').attr('style', 'height:' + height + 'px');
		console.log(imgHeight + unHeight);
	}
	$(window).load(defineHeight);
	$(window).resize(defineHeight);
});