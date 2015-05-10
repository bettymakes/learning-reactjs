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

// Rendering Hello component onto the DOM
// Note to self: reactComponent function deprecated, is now render
React.render(
  <Hello location="World" />, 
  document.body
);