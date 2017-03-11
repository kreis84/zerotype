var NAV =(function()
{
	var sections = $('main section'),
		scrollSpan = 0;
		
	function scrollTo(element)
	{
		var name = $(element).attr('href');
		$('html, body').animate({
			scrollTop: $(name).offset().top
		}, 500);
	};

	function fixMenu(scrollFromTop)
	{
		if(scrollFromTop > 95)
		{
			$('nav').addClass('menuFixed');
		}else
		{
			$('nav').removeClass('menuFixed');
		}
	};

	function upSign(scrollFromTop)
	{
		if(scrollFromTop > 200)
			$('#upSign').css({display: 'block'});
		else
			$('#upSign').css({display: 'none'});

	};

	function showSection(scrollFromTop)
	{
		var windowDistancePast = window.innerHeight + scrollFromTop;

		sections.each(function(index, element){
			var $element = $(element);
			var windowWidth = screen.availWidth;
			if(($element.offset().top < windowDistancePast) 
				&& !$element.hasClass('viewed'))
			{
					var rand = HELPER.random(-1000, 1000),
						titleRand = HELPER.random(-1000, 1000);
					if(windowWidth > 900) $element.css({opacity: '0', left: rand});
					var temp=$element.find('h1').css({opacity: '0', left: titleRand});
					setTimeout(()=>{
						$element.addClass('showAndCenter viewed');
						$element.find('h1').addClass('showAndCenter');
					},100);
			};
		});
	};

	return{
		init: function()
		{
			$(document).scrollTop(0);
			$('main section').css({opacity: '0'});

			$('nav a').on('click', function(event){	
				event.preventDefault();
				scrollTo(this);
			});

			$('#upSign').on('click', function(){
				$('body, html').animate({ scrollTop: '0'},500);
			});
			
			$(document).on('scroll', function(){
				var scrollFromTop = $(document).scrollTop();
				showSection(scrollFromTop);
			});
			showSection(0);
		}
	};
})();