 $(document).ready(function($) {
 		var btn1 = "#scene_01 ";	
 	$(btn1).on({
 		mouseenter: function(){

 			  TweenMax.to("#cta", 1, {   scale:1.03, ease: Elastic.easeOut, delay: 0.1});
 			  // TweenMax.to("#cta2", 1, {  scale:1.03, ease: Elastic.easeOut, delay: 0.1});
 			 //TweenMax.to("#p2img4", 1, {  y:0, scale:1.07, ease: Elastic.easeOut, delay: 0.1});
 			// TweenMax.to("#p2img3", 1, {  y:0, scale:1.07, ease: Elastic.easeOut, delay: 0.1});
 			// TweenMax.to("#p3img3", 1, {  y:0, scale:1.07, ease: Elastic.easeOut, delay: 0.1});
 			// TweenMax.to("#p4img3", 1, {  y:0, scale:1.07, ease: Elastic.easeOut, delay: 0.1});

	
		
 		},
 		mouseleave: function(){

 			  TweenMax.to("#cta", 1, { scale:1, ease: Elastic.easeOut, delay: 0.0});
 			 //  TweenMax.to("#cta2", 1, { scale:1, ease: Elastic.easeOut, delay: 0.0});
 			 //TweenMax.to("#p2img4", 1, { y:0,scale:1, ease: Elastic.easeOut, delay: 0.0});
 			// TweenMax.to("#p2img3", 1, { y:0,scale:1, ease: Elastic.easeOut, delay: 0.0});
 			// TweenMax.to("#p3img3", 1, { y:0,scale:1, ease: Elastic.easeOut, delay: 0.0});
 			// TweenMax.to("#p4img3", 1, { y:0,scale:1, ease: Elastic.easeOut, delay: 0.0});

		
 		}
 	});	
	var stepCounter = 0;
	var pause = 0;

	var sc_01				   		= "#scene_01";

    var p1img1				   		= "#p1img1";
    var p1img2				   		= "#p1img2";
    var p1img3				   		= "#p1img3";
    var p2img1				   		= "#p2img1";
    var p2img2				   		= "#p2img2";
    var p3img1				   		= "#p3img1";
    var p3img2				   		= "#p3img2";
    var p4img1				   		= "#p4img1";
    var p4img2				   		= "#p4img2";
    var p4img3				   		= "#p4img3";
    var p4img4				   		= "#p4img4";
    var p5img1				   		= "#p5img1";
    var p6img1				   		= "#p6img1";
    var tapa				   		= "#tapa";
    var tapa2				   		= "#tapa2";
    var logo				   		= "#logo";
    var logo1				   		= "#logo1";
    var logo2				   		= "#logo2";
    var cta				    		= "#cta";
    var cta2				    		= "#cta2";
    var fondo1				   		= "#fondo1";
    var fondo3				   		= "#fondo2";
    var fondo3				   		= "#fondo3";
    var fondo4				   		= "#fondo4";
    var fondo5				   		= "#fondo5";
    var cota				   		= "#cota";



	
    
	resetItems();
	startAnimation();	

	function animateNext(pause) {
		stepCounter++;
		TweenMax.delayedCall(pause, startAnimation);
	}
	function resetItems() {				
		

		TweenMax.set([fondo], 			{x: 0, y:0, scale:1, autoAlpha:1, });
		TweenMax.set([fondo1], 			{x: 0, y:0, scale:1.2, autoAlpha:1, transformOrigin:"50% 50%" });




	
		TweenMax.set([logo], 			{x: 0, y:0, scale:1.2, autoAlpha:0, transformOrigin:"50% 20%"});

		TweenMax.set([p2img1], 			{x: 0, y:0, scale:1.2, autoAlpha:0, transformOrigin:"50% 80%" });

		TweenMax.set([p2img2], 			{x: 0, y:0, scale:1.2, autoAlpha:0, transformOrigin:"50% 30%" });

		TweenMax.set([tapa2], 			{x: 300, y:0, scale:1, autoAlpha:0, });
		TweenMax.set([cota], 			{x: 0, y:0, scale:1, autoAlpha:0, });

		TweenMax.set([cta], 			{x: 0, y:0, scale:1.2, autoAlpha:0,  transformOrigin:"50% 95%" });



	

		


	}	
	
	function videoEndsNow ()
	{
	    animateNext(0);
	}

	function startAnimation() {
		switch(stepCounter) {
			case(0):
				



				TweenMax.to(fondo, .7, { autoAlpha: 1, scale:1, x:0, y:0, ease:Power2.easeOut, delay:0});

				TweenMax.to(fondo1, 12, { autoAlpha: 1, scale:1, x:0, y:0, ease:Power2.easeOut, delay:0});


				TweenMax.to(logo, .7, { autoAlpha: 1, scale:1, x:0, y:0, ease:Power2.easeOut, delay:1});

				TweenMax.to(p2img2, .7, { autoAlpha: 1, scale:1, x:0, y:0, ease:Power2.easeOut, delay:1.5});





				TweenMax.to(p2img1, .7, { autoAlpha: 1, scale:1, x:0, y:0, ease:Power2.easeOut, delay:2});

				TweenMax.to(cta, .7, { autoAlpha: 1, scale:1, x:0, x:0, ease:Power2.easeOut, delay:2.5});




				





		
                
              animateNext(11 );
			break;  			 
			case(1):
				stepCounter = 2;
				pause = 0;
				startAnimation();
				resetItems();		
			break;
			default:
				stepCounter = 0;
				startAnimation();				
			break;
		}
	}


	   


	
	     // var clickArea = document.getElementById('tapa');

      //    var clickArea2 = document.getElementById('tapa2');
        
        
      //    clickTAGvalue = dhtml.getVar('clickTAG', '');
      //    landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');
      //    clickArea.onclick = function() {
      //    window.open(clickTAGvalue,landingpagetarget);
      //    }


  
        
      //    clickTAGvalue2 = dhtml.getVar('clickTAG2', '');
      //    landingpagetarget = dhtml.getVar('landingPageTarget', '_blank');
      //    clickArea2.onclick = function() {
      //    window.open(clickTAGvalue2,landingpagetarget);
      //    }


});