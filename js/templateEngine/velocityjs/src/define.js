var Velocity = require('velocityjs');

console.log(Velocity.render('#define($block)\nHello $who#end\n#set($who = "World!")\n$block\n#set($who = "Velocity!")\n$block'))