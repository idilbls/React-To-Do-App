import React, {Component} from 'react';
import "./App.css"

// Common React Hooks methods, useState & useEffect 


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      newItem: "",
      list: [],

    }
  }

  deleteItem(id){
    //item will be deleted here
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !==id);
    this.setState({
      list: updatedList
    })
  }
  updateInput(key, value){
    //update react state
    this.setState({
      [key]: value
    })
  }

  addItem(){
  //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice() //copy 

    };
    //copy current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }

  render(){
    return(
      <div>
        <div className="mydiv">
          <p className="additem">Add an Item...</p>
          <br />
           <input
          className="input"
          type = "text"
          placeholder = "Type item here..."
          value = {this.state.newItem}
          onChange = {e => this.updateInput("newItem", e.target.value)} 
            />
            
            <button
            className="click"
            onClick = {() => this.addItem()} 
            >
            Add Item
            </button>
            <br/>
            <div className="items">
            <ul className=  "listeleme" >
              {this.state.list.map(item =>{
                return(
                  <li 
                  className="element"
                  key ={item.id}>
                    {item.value}
                    <button className="delete"
                    onClick={() => this.deleteItem(item.id)}>X
                    </button>
                  </li>
                  
                );
              })}
            </ul>
            </div>
        </div>

      </div>
    )
  }
}

export default App