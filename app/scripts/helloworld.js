/** @jsx React.DOM */

// Creating a component called Hello
var Hello = React.createClass({

  render: function() {
    // Will expect an attribute called "location"
    return <div>
              <h1>Hello {this.props.location}!!</h1>
            </div>;
  }
});

console.log(React);
// Rendering Hello component onto the DOM
React.render(
  <Hello location="World" />, 
  document.body
);