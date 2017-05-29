import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';

export default class Home extends React.Component {
    
  state = {
    addingChild: false,
    newChild: '',
    drawerOpen:false
  };
  
  cancelAddingChild = () => {
    this.setState({
      addingChild: false,
      newChild: ''
    });
  };
  
  
  saveNewChild = childName => {
    this.setState({
      newChild: '', 
      addingChild: false
    });
    this.props.onSaveNewChild(childName);
  };
  
  render () {
    const cardStyle = {
      margin: 10
    };
    
    const fabStyle = {
      position: 'absolute',
      right: 12,
      bottom: 30
    };
    
    const addChildButtons = [
      <FlatButton label='Cancel' primary={true} onClick={this.cancelAddingChild}/>,
      <FlatButton label='Save' primary={true} onClick={() => this.saveNewChild(this.state.newChild)}/>
    ];
    
    return (
      <div>
        <AppBar title='Busy Bee' onLeftIconButtonTouchTap={ev => this.setState({drawerOpen: true})}/>
        
        {this.props.something}
        
        {this.props.children.map((childName, i) => 
          <Card key={i} style={cardStyle} onTouchTap={() => this.props.onChildTap(childName)}>
            <CardHeader title={childName}/>
          </Card>
        )}
        <FloatingActionButton style={fabStyle} onClick={() => this.setState({addingChild: true})}>
            <ContentAdd/>
        </FloatingActionButton>
        <Dialog title='Add a Child' actions={addChildButtons} open={this.state.addingChild} 
            onRequestClose={this.cancelAddingChild}>
            
          <TextField floatingLabelText='Child Name' onChange={ev => this.setState({newChild: ev.target.value})} fullWidth={true}/>
        </Dialog>
        <Drawer open={this.state.drawerOpen} docked={false} onRequestChange={() => this.setState({drawerOpen: false})}>
          Log out
        </Drawer>
     </div>  
    );
  }                                                              
}
