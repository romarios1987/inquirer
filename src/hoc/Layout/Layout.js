import React, {Component} from 'react';
import './Layout.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import { ListGroup, ListGroupItem } from 'reactstrap';


class Layout extends Component {

    state = {
        menu: false
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    };

    render() {
        return (
            <div className='Layout'>
                <NavBar
                    isOpen={this.state.menu}
                    onClose={this.menuCloseHandler}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;