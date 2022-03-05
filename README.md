# animate.css-controller
Easily add animations in your project through animate.css by using this animate.js controller I've made. Once you add the files, simply add two classes and an ID to a div to animate a section! 

* animate.css - https://animate.style/
* Version - 4.1.1
* Licensed under the MIT license - http://opensource.org/licenses/MIT
* Copyright (c) 2020 Animate.css
*
* animate.css controller built by Chris Rainbow - https://github.com/chrisrainbow. Version 1.1. 

## INSTRUCTIONS

1. How to install
   Add animate.js script into the page just before </body> tag and add the animate.css stylesheet within the <head> tag. 

2. How to use it
   All animated divs should have:
   - A class of "animateSection"
   - A class of the animation style (see https://animate.style/ for the full list)
   - A ID on the element that is being animated

3. Edit the "animationlist" in animate.js

This javaScript array contains the most common animations in animate.css, but not all of them. Add or remove animations you need and minify .js the file when deployed on production. 

4. View the customization section to tinker with the animation style.


## HOW IT WORKS

The script works by scanning the page for divs that have a "animateSection" class. The script further takes in the animation style and the id of that block, and then renders that animation when the user comes into view of the component.

animate.css targets the ID of the div block, so the ID of that element needs to be defined.


## CDN / FILES
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"> or use the animate.css and animate.js in your project.


## CUSTOMIZATION

1. Delay animations
   Delay animation with custom CSS in the <head>:
   for example: #arrow1, #arrow2, #arrow3, #arrow4{ --animate-delay: 0.4s}

   Or use the following classes in the div to delay animations to get the desired action you want. 
   animate__delay-2s
   animate__delay-3s
   animate__delay-4s
   animate__delay-5s 

2. By default, the animation doesn't reoccur. However, this can be changed by removing the comments "//prevent recurrence" wrapping a block of code that enables    that function in the animate.js file.

3. Change when the animation fires when a user is in view by changing these option in the IntersectionObserver API in animate.js:
	 threshold: "0px" defines the percentage of pixels it encounters before the animation fires.

	 rootMargin: "0px 0px 0px 0px" (default) (in this context, rootmargin expands the radius of the target object that's considered "in view. It accepts either a      positive or negative integer.

   Learn more about the IntersectionObserver API in this article - https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/


## LEARN MORE
Learn more about the out of the box classes available with animate.css and see more examples on their webpage - https://animate.style/


## FURTHER NOTES
animate.css and the animate.css controller is compatibable with all major browsers EXCEPT Internet Explorer.
