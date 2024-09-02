import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [showModal, setShowModal] = useState({ notifications: false, messages: false, profile: false, options: false });

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    const buttonStyle = (path) => ({
        borderRadius: '50px',
        backgroundColor: activeLink === path ? 'black' : 'white',
        color: activeLink === path ? 'white' : 'black',
    });

    const handleModalClose = (modal) => {
        setShowModal({ ...showModal, [modal]: false });
    };

    const handleModalShow = (modal) => {
        setShowModal({ ...showModal, [modal]: true });
    };

    const modalStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
    };

    return (
        <div>
            <Navbar expand="lg" className="bg-white navbar-light">
                <Container fluid>
                    <Navbar.Brand><Link to={'/'} style={{ textDecoration: 'none' }}>
                        <i className="fa-brands fa-pinterest text-danger"></i>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Button variant='text' className='ms-2'
                                style={buttonStyle('/')}
                                onClick={() => handleLinkClick('/')}
                            >
                                <Nav.Link as={Link} to="/" className='fw-bolder' style={{ color: buttonStyle('/').color }}>
                                    Home
                                </Nav.Link>
                            </Button>
                            <Button variant='text'
                                className='ms-2'
                                style={buttonStyle('/explore')}
                                onClick={() => handleLinkClick('/explore')}
                            >
                                <Nav.Link as={Link} to="/explore" className='fw-bolder' style={{ color: buttonStyle('/explore').color }}>
                                    Explore
                                </Nav.Link>
                            </Button>
                            <Button variant='text'
                                className='ms-2'
                                style={buttonStyle('/createimage')}
                                onClick={() => handleLinkClick('/createimage')}
                            >
                                <Nav.Link as={Link} to="/createimage" className='fw-bolder' style={{ color: buttonStyle('/createimage').color }}>
                                    Create
                                </Nav.Link>
                            </Button>
                        </Nav>
                        <Form className="d-flex ms-2">
                            <Form.Control
                                type="search"
                                placeholder="🔍 Search"
                                className="me-2"
                                aria-label="Search"
                                style={{
                                    width: '950px',
                                    borderRadius: '50px',
                                    color: 'black'
                                }}
                            />
                        </Form>
                    </Navbar.Collapse>
                    <IconButton aria-label="Notifications" title="Notifications" onClick={() => handleModalShow('notifications')}>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton aria-label="Messages" title="Message" onClick={() => handleModalShow('messages')}>
                        <TextsmsIcon />
                    </IconButton>
                    <IconButton aria-label="Your Profile" title="Your Profile" onClick={() => handleModalShow('profile')}>
                        <AccountCircleIcon />
                    </IconButton>
                    <IconButton aria-label="Accounts and more options" title="Accounts and more options" onClick={() => handleModalShow('options')}>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </Container>
            </Navbar>

            {/* Notifications Modal */}
            <Modal show={showModal.notifications} onHide={() => handleModalClose('notifications')} dialogClassName="modal-left">
                <Modal.Header closeButton>
                    <Modal.Title>Notifications</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your notifications will appear here.</p>
                </Modal.Body>
            </Modal>

            {/* Messages Modal */}
            <Modal show={showModal.messages} onHide={() => handleModalClose('messages')} dialogClassName="modal-left">
                <Modal.Header closeButton>
                    <Modal.Title>Messages</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your messages will appear here.</p>
                </Modal.Body>
            </Modal>

            {/* Profile Modal */}
            <Modal show={showModal.profile} onHide={() => handleModalClose('profile')} dialogClassName="modal-left">
                <Modal.Header closeButton>
                    <Modal.Title>Your Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your profile details will appear here.</p>
                </Modal.Body>
            </Modal>

            {/* Options Modal */}
            <Modal show={showModal.options} onHide={() => handleModalClose('options')} dialogClassName="modal-left">
                <Modal.Header closeButton>
                    <Modal.Title>More Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Additional options will appear here.</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Header;
