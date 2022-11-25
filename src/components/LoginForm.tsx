import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import { Context } from "..";
import RegistrationModal from "./Modals/RegistrationModal";
import './LoginForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from "react-bootstrap/FormGroup";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';



const LoginForm: FC = () => {
    const [modalActive, setModalActive] = useState(false);
    const [User_nick, setUser_nick] = useState<string>('');
    const [User_pass, setUser_pass] = useState<string>('');
    const {store} = useContext(Context)

    const [modalShow, setModalShow] = React.useState(false);
    return (
        
        <>
        
        <Container>
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
                        <FormGroup className="mb-3">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs lg="3">
                                        <Button size="lg" variant="primary" onClick={() => {
                                                store.login(User_nick, User_pass);
                                            } }>
                                            Войти
                                        </Button>
                                    </Col>
                                    <Col xs lg="3">
                                        <Button size="lg" variant="primary" onClick={() => setModalShow(true)}>
                                            Регистрация
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                            
                        </FormGroup>
                    
                    </Form>
                </Col>
            </Row>
            
        </Container>
        
        



        <RegistrationModal show={modalShow}
            onHide={() => setModalShow(false)} /></>

    );
};

export default observer(LoginForm);