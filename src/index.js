const $ = require('jquery');

export function init(options) {
    $(options.element).each((index, item) => {
        let el = $(item);
        el.data('fadeAnimation', new ScrollAnim(el, options))
    })
}

class ScrollAnim {
    constructor(item, options) {
        this.item = item;       
        this.targetOffset = options.offset; 
        this.delay = options.delay; 
        this.children = [];
        this.window = $(window);

        let children = this.item.find(options.children);
        for(let i = 0; i < children.length; i++) {
            this.children.push({
                element: $(children[i]),
            });
        }

        //Callbacks
        this.onEnter = options.onEnter;

        //Events
        this.window.on('resize', this.resize.bind(this));
        this.window.on('scroll', this.scroll.bind(this));
        this.resize();

        

    }

    resize() {
        this.windowHeight = this.window.height();

        let child;
        for(let i = 0; i < this.children.length; i++) {
            child = this.children[i];
            child.offsetTop = child.element.offset().top;
            child.height = child.element.outerHeight();
        }

        this.scroll();
    }

    scroll() {
        let _child,
        viewportTop = this.window.scrollTop(),
        viewportBottom = viewportTop + this.windowHeight;

        for(let i = 0; i < this.children.length; i++) {
            let child = this.children[i].element,
                childHeight = this.children[i].height * this.targetOffset,
                childOffsetTop = this.children[i].offsetTop;             

            if(childOffsetTop + childHeight  < viewportBottom) {
                
                if(typeof this.onEnter === 'function') {
                    this.onEnter(i, child);
                } else {
                    child.addClass('active');
                    child.css({
                        'animation-delay': `${i * this.delay}ms`
                    })
                }

                //Child has been animated. Remove from array
                delete this.children[i];
            }
        }
        //Re-build array so indexes will reset
        this.children = this.children.filter(() => { return true; });
    }
}