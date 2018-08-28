import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '..//NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/BackDrop';
import Aux from '../../../hoc/Aux';
const sideDrawer = (props) =>{

    let otherClasses = [classes.SideDrawer,classes.Close]

    if(props.open){
        otherClasses=[classes.SideDrawer,classes.Open]
    }


    return (
        <Aux>
            <BackDrop show={props.open}  clicked={props.closed}/>
            <div className={otherClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                    </nav>
            </div>
        </Aux>
    );

}

export default sideDrawer;