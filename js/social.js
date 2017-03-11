var SOCIAL = (function(){
	function _init()
	{
		document.querySelectorAll('.social').forEach(function(item, index){
			item.addEventListener('click', function(){
				var name = String(this.getAttribute('id')),
					Name = name.charAt(0).toUpperCase()+name.slice(1);
				alert(Name+' profil in construction.');
			});
		});
	}
	return{
		init: _init
	}
})();