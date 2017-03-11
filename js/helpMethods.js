var HELPER = (function(){
	return {
		random: function(from, to)
		{
			var range = to-from;
			return Math.floor(Math.random()*range) + from;
		}
	};
})();