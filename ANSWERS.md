## Self-Study/Essay Questions

- [X] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes is used to catch bugs with typechecking, preventing bad data types to be passed as props. Javascript is very loose around data and authorise all data types to be pass down as props. You want to make sure you are actually passing the right data to your component so it can just so his thing.

- [X] Describe a life-cycle event in React?

The React component lifecycle has 3 phases - Mounting, Updating & Unmounting. It enables React to make sure it using the right data and mounting the right component to the DOM.

- [X] Explain the details of a Higher Order Component?

A Higher Order Component (HOC) is an advanced React JS pattern that allows us the capability of reusing component logic. To be more exact and put rather simply, an HOC is a function that receives a Component as an argument and returns a new component. This paradigm allows us developers the ability to encapsulate some shared functionality between components and avoid repeating ourselves.

- [X] What are three different ways to style components in React? Explain some of the benefits of each.

CSS - Very easy to use / hard to maintain + reusability.
SASS/LESS - Easy to maintain
CSS in JS - Super reusable / all styling a component needs