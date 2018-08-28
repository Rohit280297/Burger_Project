import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{

    state={showSideDrawer:false}
    sideDrawerClosedhandler =() =>{
        this.setState({showSideDrawer:false})
    }

    toggleSideDrawerHandler = () =>{
        const curr_state = this.state.showSideDrawer;
        this.setState({showSideDrawer:!curr_state})
    }
    render(){
        return(
            <Aux>
                <ToolBar toggleSideDrawer={this.toggleSideDrawerHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler}/>
                    <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;