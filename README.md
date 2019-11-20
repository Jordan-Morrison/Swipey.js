# Swipey.js
A simple and super lightweight (1.29kb) JS library to add swipe gestures to your app.

## Installation
### Vanilla JS
Download the [latest release](https://github.com/Jordan-Morrison/Swipey.js/releases/latest) and include the script in your HTML
```javascript
<script src="./swipey.js"></script>
```

### React
Install the module into your project
```bash
$ npm install swipey.js
```
Import the module
```javascript
import swipey from 'swipey.js';
```

## Basic Usage
### Vanilla JS
Select the element you wish to be able to swipe on and pass it into ```swipey.add``` with a callback function to be fired off when a valid swipe occurs.
```javascript
let element = document.querySelector(".yourElement");

swipey.add(element, myCallback);

function myCallback(ev){
    //Do some stuff
    console.log(ev);
}
```
### React
Swipey in React works the exact same as Vanilla JS. If you are using functional components then the [useRef hook](https://reactjs.org/docs/hooks-reference.html#useref) is recommended to select the element you wish to swipe on.
```javascript
function App() {

    const element = useRef(null);

    swipey.add(element.current, myCallback);

    function myCallback(ev) {
        console.log(ev);
    }

  return (
    <div ref={element} className="App">
        <p>some stuff</p>
    </div>
  );
}
```

## Customization
> ```swipey.add``` also accepts an **optional** object for better customization.

The default options are as follows:
```javascript
{
    vertical: true,
    horizontal: true,
    diagonal: true,
    swipeDistance: 100
}
```
You may override these defaults by passing your custom options into ```swipey.add``` as a 3rd parameter.
> In this case the minimum swipe distance will be 25 pixels and will only allow horizontal swipes.
```javascript
swipey.add(element, myCallback, {
    swipeDistance: 25,
    vertical: false,
    diagonal: false
})
```

## Returned Data
The callback passed into ```swipey.add``` will be fired with an event object passed in. The object will contain the following information:
- **swipeLength**: The length of the swipe in *pixels*
- **direction**: A string value with the direction of the swipe; ```up```, ```down```, ```left```, ```right```, ```up-right```, ```up-left```, ```down-right``` or ```down-left```
- **target**: A DOM reference to the element that was swiped on. This is useful for cases where you have multiple swipeable objects and need to know which object was swiped on
> An example of what the returned object will look like
```javascript
{
    swipeLength: 177.55073067405448,
    direction: "down-left",
    target: div.App
}
```

