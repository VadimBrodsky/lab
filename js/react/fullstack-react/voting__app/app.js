const seedProducts = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: Math.floor(Math.random() * 101),
    submitterAvatarUrl: 'http://placehold.it/30x30',
    productImageUrl: 'http://placehold.it/200x200',
  },
  {
    id: 2,
    title: 'Green Crab',
    description: 'On-demand sand castle destruction expertise.',
    url: '#',
    votes: Math.floor(Math.random() * 100),
    submitterAvatarUrl: 'http://placehold.it/30x30',
    productImageUrl: 'http://placehold.it/200x200',
  },
  {
    id: 3,
    title: 'Purple ninja',
    description: 'For all the stealth needs',
    url: '#',
    votes: Math.floor(Math.random() * 100),
    submitterAvatarUrl: 'http://placehold.it/30x30',
    productImageUrl: 'http://placehold.it/200x200',
  },
];

class ProductList extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.handleProductUpvote = this.handleProductUpvote.bind(this);
  }
  */
  
  // initial state, using property initializers
  state = { products: [] };
  
  // react component lifecycle method
  componentDidMount() {
    // after the call to constructor always use methods to modify state
    this.setState({ products: seedProducts });
  };
  
  // arrow function, don't need to bind `this`
  handleProductUpvote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, { votes: product.votes + 1 });
      } else {
        return product;
      }
    });
    this.setState({ products: nextProducts });
  };
  
  render() {
    const productComponents = this.state.products
    .sort((a, b) => (b.votes - a.votes))
    .map((product) => (
      <Product
        key={`product-${product.id}`}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpvote}
       />
    ));
    
    return (
      <div className='ui unstackable items'>
        {productComponents}
      </div>
    );
  };
};

class Product extends React.Component {
  /* 
  constructor(props) {
    // call this first
    super(props);
    
    // here we bind this to component to be used in the method
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  */ 
  
  /*
  handleUpVote() {
    // this does not refer to the component, need to bind it
    this.props.onVote(this.props.id);
  }
  */
  
  // Uses Property Initializers via Babel Transform Class Properties
  // Don't need to bind `this`
  // arrow function binds this implicitly
  handleUpVote = () => (this.props.onVote(this.props.id));
  
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src={this.props.submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  };
};

// add in what and where
ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);