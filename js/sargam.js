/init_menu_posY = $(window).height() - total_offset;

$(window).load(function() {
	//$("#master-menu").css({'top':init_menu_posY+"px"});
	 
	var hauteur_bandeau_actu = 35;
	var hauteur_menu_visible = 55;
	var total_offset = hauteur_bandeau_actu + hauteur_menu_visible;
	var init_menu_posY = 0;
	var scroll_menu_anim = false;
	
	
	//hello
	function jqUpdateSize(){
    // Get the dimensions of the viewport
    var width = $(window).width();
    var height = $(window).height();
	init_menu_posY = height - total_offset;
	//$('#master-menu').css({'top':init_menu_posY+"px"});
	
	var base_height = $(window).height();
  	var scroll_from_top = $(window).scrollTop();
	
		if ($('#landing-convention').length > 0 ) scroll_menu_anim = true;
		
	/***Menu Scroll Animations	**/
	if(scroll_from_top+total_offset >= base_height)
		{
			
			
			
			$('#logo-img').fadeIn();
  			$('#logo-img').css({'transform':'scale(1)', '-webkit-transform': 'scale(1)'});
  			$('#content-nav-left').css({'margin-right':'50px'});
            $('#content-nav-right').css({'margin-left':'50px'});
            $('#user-nav').css({'height':'97px','opacity':1});
			
			
			$('#master-menu').css({'top':"0px"});
			//$('#infos').text( scroll_from_top + base_height);
		}
		
	else
		{
			//$('#master-menu').css({'top':init_menu_posY+"px"});
			
			
			
			$('#logo-img').fadeOut();
  			$('#logo-img').css({'transform':'scale(0)', '-webkit-transform': 'scale(0)'});
  			$('#content-nav-right').css({'margin-left':'0px'});
            $('#content-nav-left').css({'margin-right':'0px'});
            $('#user-nav ').css({'height':'0px','opacity':0});
			
			var menu_posY = init_menu_posY - scroll_from_top ;
			$('#master-menu').css({'top':menu_posY+"px"});
			
		}
		
	/** End Menu Scroll Animations**/
	
	/** EachDiv Aniamtions**/
	
		$(".block-content").each(function(){
			//console.log ( $(this).offset().top + "anim");
			if ( ( $(window).scrollTop()  < $(this).offset().top + $(this).height() - 150) && $(window).scrollTop() + $(window).height() > $(this).offset().top +100 ) { //$(this).height()+ $(this).offset().top-150  > $(window).scrollTop()

				$(this).css({'transform':'scale(1,1)','opacity':1, '-webkit-transform': 'scale(1,1)'});
			}else {
				$(this).css({'transform':'scale(0.5,1)','opacity':0, '-webkit-transform': 'scale(0.5,1)'});
			}
		});
		
		/** end Each Div Aniation**/	
		
		
		


};
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size
$(window).scroll(jqUpdateSize);	

	$(".stats2 li").hover(function(element){
  			//alert(element);
  			$(this).css({'transform':'scale(1)','box-shadow': '1px 1px 12px #555','opacity':1, '-webkit-transform': 'scale(1)'});
  		},function(){
 			$(this).css({'transform':'scale(1)','opacity':1,'box-shadow': '0px 0px 0px #555', '-webkit-transform': 'scale(1)' });
	})	







	//Gestion actus
	var openActu = function () {
		 var init_position = $(window).scrollTop()+$(window).height();
		 var target_position = $(window).scrollTop();
		 public_target_actu_position = target_position;
		  $('#livebar').css({"top":init_position+"px","display":"block","overflow":"auto","height":"100%"});
		  /*$('html, body').animate({
            	scrollTop: 0
       	 	});*/

			$('#livebar #actu-part1,#actu-main').css({"margin-top":200,"margin-bottom":200,})
			$('#livebar #actu-part1,#actu-main').animate({"margin-top":0,"margin-bottom":0},1200);

       	    $('#livebar').animate({
            	"top": target_position
       	 	},750);
			$('#landing-convention,#landing-intro,#master-menu,#main-content').animate({
            	"opacity": 0
       	 	},1500);
       	 	$("#livebar-footer").slideUp(250);

       	 	$("html,body").css({"overflow":"hidden","height":"100%"});

	};

	var closeActu = function () {
		 var target_position = $(window).scrollTop()+$(window).height();
		/* $('html, body').animate({
            	scrollTop: 0
       	 	});*/
       	  // $('#livebar').slideDown(1500);
       	     $('#livebar').animate({
            	"top": target_position
       	 	},750,function() {
    			$(this).css({"display":"none"});
 			 });
			$('#landing-convention,#landing-intro,#master-menu,#main-content').animate({
            	"opacity": 1
       	 	},1500);

			$("#livebar-footer").slideDown(250);

			$("html,body").css({"overflow":"auto","height":"auto"});
       	  //$('#livebar').slideUp(500);
	};

	$('#livebar').css({"display":"none"});
	$("#open-actu,.af-box H3").click(openActu);
	$("#close-actu").click(closeActu)

	//read more escamotable
	$("#actu-main .read-more").click(function(){
		//alert("click detecté!");
		var bt_less = $(this).parent().find(".read-less");
		var actu_block = $(this).parent().parent();
		var more_content = actu_block.find(".actu-more-content");
		var article_texte = actu_block.find(".article-texte");
		var defaut_content = "";
		bt_less.css("display","block");
		$(this).css("display","none");
		actu_block.css({"overflow":"visible","height":"auto"});
		more_content.css('opacity',0).slideDown({duration :800}).animate({opacity:1},{queue:false,duration:'slow'});
		article_texte.slideUp({duration :800}).animate({opacity:0},{queue:false,duration:'slow'});

	});

	$("#actu-main .read-less").click(function(){
		//alert("click detecté!");
		var bt_more = $(this).parent().find(".read-more");
		var actu_block = $(this).parent().parent();
		var more_content = actu_block.find(".actu-more-content");
		var article_texte = actu_block.find(".article-texte");
		//actu_block.css({"overflow":"visible","height":"auto"});
		bt_more.css("display","block");
		$(this).css("display","none");
		article_texte.slideDown({duration :800}).animate({opacity:1},{queue:false,duration:'slow'});
		more_content.slideUp({duration:800});
	});

/*** End Live Bar Actions***/

	
	
	
	
	
	/** Simple Button Animations **/
	
$("#GrulesButton").click(function(){
	$('#Genrules').toggle("slow");
});


$(".stats2").click(function(){
	var activetab = $(this).attr("rel");
	$("#" + activetab).toggle("slow");
});

	
	/**Master-menu hover Animations **/
	
	
	
	
	


/*

	init_menu_posY = $(window).height() - total_offset;
	
	
	var initMenu_new = function() {
		$('#master-menu').css({'top':init_menu_posY+"px"});
	}
initMenu_new();

	

	
	$(window).resize(function(){
		initMenu_new(true);
		//gestionMenu();
	});
	
	*/
	
	
	
	/*
	var base_height = $(window).height();
  			var scroll_from_top = $(window).scrollTop();
	
	
	var cur_menu_pos = $("master-menu").position();
	if(scroll_from_top+total_offset >= base_height || !scroll_menu_anim )
		{
			$('#master-menu').css({top:"0px"});
			$('#infos').text( scroll_from_top + base_height);
		}
		
	else
		{
			$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size
$('#infos').text( scroll_from_top + base_height);
		}
	*/
	
	});
	
	
	

		$('.bouton-bleu').hover(function() {
		
		$(this).animation({'background-color' : '#da0057'});
	}, function() {
		$(this).animation({'background-color' : '#25b0b0'});
	/*** END Simple Button Animations **/
	});
		
		