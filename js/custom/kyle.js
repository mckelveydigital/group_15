$(document).ready(function(){
	
	$("#webticker").webTicker({
	    height:'75px', 
	    duplicate:true, 
	    rssfrequency:0, 
	    startEmpty:false
	}); 


	    $("#ease-financeticker").click(function(){
        $("#webticker").webTicker('transition', 'ease');
    });

	    $("#linear-financeticker").click(function(){
        $("#webticker").webTicker('transition', 'linear');
    });

});