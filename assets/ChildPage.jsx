import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
export default class ChildPage extends React.Component {
  
  render () {
    const contextButton = 
      <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          onChange={() => this.props.onRequestRemoveChild(this.props.childName)}>
        <MenuItem primaryText='Kill Child' value='kill'/>
      </IconMenu>;
      
    return (
      <div>
        <AppBar title={this.props.childName} 
            onLeftIconButtonTouchTap={this.props.onBackButtonTap} 
            iconElementLeft={<IconButton><NavigationArrowBack/></IconButton>}
            iconElementRight={contextButton} />
        
      </div>
    );
  }
  
}
