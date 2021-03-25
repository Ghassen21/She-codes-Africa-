import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { signout } from "../../redux/actions/authActions";

import { connect } from "react-redux";

class AdminBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, signout } = this.props;
    return (
      <Nav>
        <LinkContainer to="/blogs">
          <Nav.Link>Blogs</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/events">
          <Nav.Link>Upcoming events</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Admin Profile" id="collasible-nav-dropdown">
          <LinkContainer to="/addAdmin">
            <NavDropdown.Item>Add Admin</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/addBlogs">
            <NavDropdown.Item>Add Blog</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/addEvents">
            <NavDropdown.Item>Add Event</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/addCodingResources">
            <NavDropdown.Item>Add Coding Resources</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/webinar">
            <NavDropdown.Item>Webinar</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/">
            <NavDropdown.Item onClick={signout}>Logout</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { signout };

export default connect(mapStateToProps, mapDispatchToProps)(AdminBoard);
