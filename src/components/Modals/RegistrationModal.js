import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from "react-bootstrap/FormGroup";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal, Button } from 'react-bootstrap';
import { Context } from '../..';
import './RegistrationModal.css';


const RegistrationModal = (props) => {
    const [User_nick, setUser_nick] = useState('');
    const [User_pass, setUser_pass] = useState('');
    const [User_name, setUser_name] = useState('');
    const [User_surname, setUser_surname] = useState('');
    const {store} = useContext(Context)
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{transform: `scale(1)`}}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <Form >
                            <Form.Group className="mb-3" >
                                <Form.Label>Логин</Form.Label>
                                <Form.Control 
                                    onChange={e => setUser_nick(e.target.value)}
                                    value={User_nick}
                                    type="text"
                                    placeholder="Логин" 
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your login with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control 
                                    onChange={e => setUser_pass(e.target.value)}
                                    value={User_pass}
                                    type="password"
                                    placeholder="Пароль" 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Имя</Form.Label>
                                <Form.Control 
                                    onChange={e => setUser_name(e.target.value)}
                                    value={User_name}
                                    type="text"
                                    placeholder="Имя" 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control 
                                    onChange={e => setUser_surname(e.target.value)}
                                    value={User_surname}
                                    type="text"
                                    placeholder="Фамилия" 
                                />
                            </Form.Group>                      
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="2">
                            <Button variant="primary"  
                                onClick={() => {
                                    store.registration(User_nick, User_pass, User_name, User_surname);
                                    store.checkAuth()
                                }}>
                                Регистрация
                            </Button>
                        </Col>
                    </Row>
                </Container>
                
            </Modal.Footer>
        </Modal>
        )
    }
        {/* <div className={active ? 'modal active' : 'modal'} onClick={() =>  setActive(false)}>
            <div className='modal_content' onClick={(e) => e.stopPropagation()}>
                <input
                    onChange={e => setUser_nick(e.target.value)}
                    value={User_nick} 
                    type="text" 
                    placeholder="Логин" 
                />
                <input
                    onChange={e => setUser_pass(e.target.value)}
                    value={User_pass} 
                    type="password" 
                    placeholder="Пароль" 
                />
                <input
                    onChange={e => setUser_name(e.target.value)}
                    value={User_name} 
                    type="text" 
                    placeholder="Имя" 
                />
                <input
                    onChange={e => setUser_surname(e.target.value)}
                    value={User_surname} 
                    type="password" 
                    placeholder="Фамилия" 
                />
        
                <button onClick={() => {
                    store.registration(User_nick, User_pass, User_name, User_surname);
                    store.checkAuth()
                } }>Регистрация</button>
                
                <button onClick={() => {
                    setActive(false)
                } }>Выйти</button>
            </div>
        </div> */}

 
export default RegistrationModal;