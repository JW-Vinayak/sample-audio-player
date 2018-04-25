var player = require('play-sound')(opts = {})

player.play('./sounds/mp.mp3', function(err){
	console.log(err);  
})
 