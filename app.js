
// import React from "react";
// import ReactDOM from "react-dom";

// var Apples =()=>(
//   <li>Apples</li>
// )

// var Carrots =()=>(
//   <li>Carrots</li>
// )

// var onListItemClick = (event) => {
//   console.log('clickitty')
// }

// var GroceryListItem =(props)=> (
//   <ul>
//   <li onClick={onListItemClick}>{props.items[0]}</li>
//   <li>{props.items[1]}</li>
//   <li>{props.items[2]}</li>
//   </ul>
// )

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bold: false
    };
}

onItemHover() {
  this.setState({
    bold: !this.state.bold
  });
}

render() {
  var style = {
    fontWeight: this.state.bold ? '800' : '200'
  }
  return <li style={style} onMouseOver={this.onItemHover.bind(this)} onMouseOut={this.onItemHover.bind(this)}>{this.props.item}</li>
}


}







var GroceryList = (props) => {
  return (
<ul>
{props.items.map(item => <GroceryListItem item={item}/>)}
</ul>
  )
}

ReactDOM.render(<GroceryList items={['Chili Picante', 'Happy', 'Salt']}/>, document.getElementById('app'))