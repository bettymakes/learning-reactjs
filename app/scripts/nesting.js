/** @jsx React.DOM */


/* ========================================================================
  Basic Nesting Example
=========================================================================*/

// Creating Child component
var Child = React.createClass({

  render: function() {
    return <h2>I am the child</h2>;
  }
});

// Create Parent component & nesting Child within the Parent
var Parent = React.createClass({
  render: function() {
    return <div> 
              <h1>I am the all-powerful parent!</h1>
              <Child />
            </div>;
  }
});

// Rendering Parent component
React.render(
  <Parent />, document.getElementById('nesting-1')
);



/* ========================================================================
  Blog Post Nesting Example
=========================================================================*/

// Declare object for Blog Post (using this to populate data in the component)
var blogPost = {
  title: 'The Greatest Pokemon',
  article: 'What a coveted title! There are many candidates that are worthy ' +
  'of posessing such an honourable title. To be crowned the Great Pokemon Ever ' + 
  'is far better than being crowned Miss Universe at the annual PokeUniverse ' +
  'Pageant. Their fate is in your hands now. Submit your votes!',
  comments: ['MewTwo, Duh!', 'That\'s easy! Jigglypuff has got this hands down!',
  'Charmander - too cute for words!', 'Ew, Charmander\'s useless. Tepig!']
};

// Creating Comment component (child component)
var Comment = React.createClass({
  render: function() {
    return  <li>{this.props.votes}</li>;
  }
});

// Creating Post component & nesting Comment component within 
var Post = React.createClass({
  render: function() {
    return (
      <article>
        <h3>{this.props.content.title}</h3>
        <p>{this.props.content.article}</p>
        <hr />
        <h4>Votes</h4>
        <ul>
          <Comment votes={this.props.content.comments[0]} />
          <Comment votes={this.props.content.comments[1]} />                
          <Comment votes={this.props.content.comments[2]} />             
          <Comment votes={this.props.content.comments[3]} />              
        </ul>
      </article>
    );
  }
});

React.render(
  <Post content={blogPost} />, document.getElementById('nesting-2')
);



