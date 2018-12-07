import React, {Component} from 'react';
import './Layout.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import {Container, Row} from 'reactstrap';


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

                <Container >
                <Row>
                    <main>
                        {this.props.children}
                    </main>
                </Row>
                </Container>
            </div>
        )
    }
}

export default Layout;