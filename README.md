# Scroll Animation

This package will check if the specified elements are visible in your viewport. If so, a class and an increased animation-duration will be added per element in milliseconds.

Example:  
```<div class="slide" style="animation-duration: 0ms"></div>```  
```<div class="slide" style="animation-duration: 75ms"></div>```  
```<div class="slide" style="animation-duration: 150ms"></div>```  

The incremented value will be reset back to 0ms after element(s) have entered.


## Install
``` npm install @michaelkoelewijn91/scrollanimate```  
``` yarn add @michaelkoelewijn91/scrollanimate```

## How to use
```
var Anim = require('@michaelkoelewijn91/scrollanimate');
$(() => {
    Anim.init({
        element: '.slides',
        children: '.slide',
        delay: 75, //In milliseconds
        offset: .5 //How much of the element must be visible in order to trigger the event
    })
})
```

#### Options
| Key | Value | Default | Description |
| --- | ---   |   ---   |     ---     |
| element | string | .js-scroll-animate | The wrapper containing the animated items |
| children | string | .js-scroll-animate-item | These are the items that need to be animated | 
| delay | int | 75 | Delay in ```milliseconds``` that gets added incrementally to each item in sequence. |
| offset | float | 0.5 | How much of the element needs to be visible in order to trigger the event |

#### Events
| Key | Params | Description |
| --- | ---   |   ---   |     ---     |
| onEnter | (index, item) | Gets fired each time a new item becomes visible. Using this will stop adding the active class and the animation-duration property so you can add your own logic. |