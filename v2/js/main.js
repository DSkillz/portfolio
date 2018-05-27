var cntWd, sldWd, tb;
	$(function() {
		
		cntWd = $('article').innerWidth();
		tb = $('article p');
		sldWd = tb.outerWidth();
		
		$('article').mousemove(function(e)
		{
			tb.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
 		});
});