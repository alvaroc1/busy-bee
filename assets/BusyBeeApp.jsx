import React from 'react';
import Home from './Home';
import ChildPage from './ChildPage';
export default class BusyBeeApp extends React.Component {
  
  state = {
    page: 'home',
    childName: '',
    children: [],
  };
  
  saveNewChild = childName => {
    this.setState({
      children: [...this.state.children, childName], 
      newChild: '', 
      addingChild: false
    });
  };
  
  removeChild = childName => {
    this.setState({
      page: 'home',
      children: this.state.children.filter(c => c != childName)
    })
  };
  
  render () {
    
    return (
      <div>
        {this.state.page == 'child' && 
          <ChildPage onBackButtonTap={() => this.setState({page: 'home'})} 
              onRequestRemoveChild={this.removeChild}
              childName={this.state.childName} />
        
        }
        {this.state.page == 'home' && 
          <Home children={this.state.children} 
              onChildTap={childName => this.setState({page: 'child', childName: childName})}
              onSaveNewChild={childName => this.saveNewChild(childName)}/>
          
        }
      </div>
      
    );
  }
  
}
