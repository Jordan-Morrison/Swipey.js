const swipey = {

    points: {
        x: {
            start: 0,
            end: 0
        },
        y: {
            start: 0,
            end: 0
        }
    },

    add: function(swipeElement, callback, options){

        let defaultOptions = {
            diagonal: true,
            horizontal: true,
            vertical: true,
            swipeDistance: 100
        };

        options = Object.assign(defaultOptions, options);

        swipeElement.addEventListener('touchstart', function(ev) {
            swipey.points.x.start = ev.changedTouches[0].clientX;
            swipey.points.y.start = ev.changedTouches[0].clientY;
        }, false);

        swipeElement.addEventListener('touchend', function(ev) {
            swipey.points.x.end = ev.changedTouches[0].clientX;
            swipey.points.y.end = ev.changedTouches[0].clientY;
            
            swipey.calculateSwipes(callback, options);
        }, false);

        swipeElement.addEventListener('mousedown', function(ev) {
            swipey.points.x.start = ev.clientX;
            swipey.points.y.start = ev.clientY;
        }, false);

        swipeElement.addEventListener('mouseup', function(ev) {
            swipey.points.x.end = ev.clientX;
            swipey.points.y.end = ev.clientY;
            
            swipey.calculateSwipes(callback, options);
        }, false);
    
    },

    calculateSwipes: function(callback, options){
        let xDiff = swipey.points.x.start - swipey.points.x.end;
        let yDiff = swipey.points.y.start - swipey.points.y.end;

        if (Math.abs(xDiff) > options.swipeDistance || Math.abs(yDiff) > options.swipeDistance){
            
            if (options.diagonal && Math.abs(xDiff) > options.swipeDistance && Math.abs(yDiff) > options.swipeDistance){
                callback({
                    swipeLength: Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2)),
                    direction: (yDiff > 0 ? "up" : "down") + "-" + (xDiff > 0 ? "left" : "right") 
                });
            }

            else if (options.horizontal && Math.abs(xDiff) > options.swipeDistance){
                callback({
                    swipeLength: Math.abs(xDiff),
                    direction: xDiff > 0 ? "left" : "right"
                });
            }

            else if (options.vertical && Math.abs(yDiff) > options.swipeDistance){
                callback({
                    swipeLength: Math.abs(yDiff),
                    direction: yDiff > 0 ? "up" : "down"
                });
            }
        }

    }

};