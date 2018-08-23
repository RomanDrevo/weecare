import React from 'react';
import './Header.module.scss'
import ResponsiveComponent from "../../framework/components/ResponsiveComponent";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";


class Header extends ResponsiveComponent {

    onToggle = () => {
        console.log('toggle...')
    }

    renderDesktop() {
        const {} = this.props

        return (
            <Navbar onToggle={this.onToggle} className="header" fixedTop inverse collapseOnSelect>

                <Navbar.Header className="">
                    <div className="profile-button-wrapper pull-left">
                        <div className="flex flex-column">
                            <select className="pull-left mt2">
                                <option>eng</option>
                                <option>heb</option>
                            </select>
                            <Link to="/personal">
                                <div className="personal-info">אזור אישי</div>
                            </Link>
                        </div>

                    </div>

                    <Navbar.Toggle/>

                    <Navbar.Brand className="pull-right">
                        <div className="logo-wrapper">

                            {/*Brand*/}

                            <img className="logo" src={require('../../assets/images/wecare.png')} alt="logo"/>
                        </div>

                    </Navbar.Brand>

                </Navbar.Header>


                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            דף הבית
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            אודות
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            התחבר
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    renderMobile() {
        return <div>Mobile Header</div>
    }
}

export default Header;
