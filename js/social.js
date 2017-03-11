var SOCIAL = (function(){
	function _init()
	{
		document.querySelectorAll('.social').forEach(function(item, index){
			item.addEventListener('click', function(){
				alert(this.getAttribute('id')+' profil in construction.');
			});
		});
	}
	return{
		init: _init
	}
})();