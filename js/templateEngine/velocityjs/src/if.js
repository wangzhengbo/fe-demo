var Velocity = require('velocityjs');

console.log(Velocity.render('#if($css_pureui)hello world#end'))
console.log(Velocity.render('#if($css_pureui)hello world#{else}Haha#end'))
console.log(Velocity.render('#if($css_pureui)hello world#elseHaha#end'))
console.log(Velocity.render('#if($css_pureui)hello world#else Haha#end'))
console.log(Velocity.render('#if($css_pureui)hello world#end', {css_pureui: 1}))
console.log(Velocity.render('$css_pureui', {}))
console.log(Velocity.render('$!css_pureui', {}))
console.log(Velocity.render('$css_pureui', {css_pureui: 'abc'}))
