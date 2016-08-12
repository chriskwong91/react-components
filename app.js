
var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
      )}
  </ul>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done,
    });
  }
  onListItemHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal',
    };

    return (
      <li style={style} onClick=
      {this.onListItemClick.bind(this)} onMouseOver={this.onListItemHover.bind(this)}
      onMouseOut={this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>
      );
  }
}

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['kale', 'cucumbers', 'kimchi', 'banana', 'apple', 'water', 'dog', 'jk']}/>
  </div>
);


ReactDOM.render(<App />,
document.getElementById("app"));
