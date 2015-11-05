# rs-scroll-to

The default method prescribed by the AngularJS documentation for allowing anchor links to function normally involves assigning the anchor to $location.hash() and calling $anchorScroll() to cause the page to jump to the anchor.

Rather than doing that you can use the rs-scroll-to directive to make an element clickable so it will animate the scroll to the target at a speed you can specify on the element. Just specify the DOM selector with rs-scroll-to and optionally specify the scroll speed (in millisecs) with rs-scroll-delay. If the latter is unspecified the scroll will take 400ms.

``<a rs-scroll-to="#some-element-id" rs-scroll-delay="1000">Click to Scroll</a>``

You can see an example of the directive in action on this post:

[http://edwecate.com/article/Pass-BackEnd-Values-into-Angular-FrontEnd](http://edwecate.com/article/Pass-BackEnd-Values-into-Angular-FrontEnd)
