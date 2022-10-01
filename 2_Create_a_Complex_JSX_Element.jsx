/*
We must wrap up the whole elements in one parant element or we can also use a paranthesis for this purpose.

Define a new constant JSX that renders a div which contains the following elements in order:

An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.
*/

const JSX = <div>
  <h1>I'm tired</h1>
  <p>this is para</p>
  <ul>
    <li> Apple</li>
    <li> Ball</li>
    <li> Cat</li>
  </ul>
</div>