import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter
    , Row, Col, Container, FormFeedback
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                isNavOpen: false,
                isModalOpen: false
                // username: ' ',
                // password: ' ',
                // remember : ' '
            };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }
    handleLogin(event) {
        this.toggleModal();
        console.log(this.username.value);
        alert("Hi");
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    handleSubmit(values) {
        console.log("Current State is " + JSON.stringify(values));
        alert("Current State is " + JSON.stringify(values));

    }

    render() {

        return (
            <div >
                <Row>
                    <div className="col-4">
                    </div>
                    <div className="col-8">
                        <Button onClick={this.toggleModal}>Submit Comment</Button></div>
                </Row>
                <Container>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} isNavOpen>
                        <ModalHeader >Submit Comment </ModalHeader>
                        <ModalBody>

                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Col md="8">
                                        <Row>
                                            <Label htmlfor="rating"> Rating </Label>
                                        </Row>
                                        <Row className="form-group">
                                            <Control.select model=".rating" id="rating" name="rating" className="form-control"
                                            >
                                                <select>1</select>
                                                <select>2</select>
                                            </Control.select>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col md="8">
                                        <Row>
                                            <Label htmlfor="yourname"> Your Name </Label>
                                        </Row>
                                        <Row className="form-group">
                                            <Control.text model=".yourname" id="yourname" name="yourname" className="form-control"
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="8">
                                        <Row className="form-group">
                                            <Label htmlfor="comment"> Comment </Label>
                                            <Control.textarea model=".comment" id="commnet" name="comment" className="form-control"
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                                <Button type="submit" value="submit" className="bg-primary" >Login</Button>
                            </LocalForm>

                        </ModalBody>
                    </Modal>
                </Container>
            </div>
        );
    }
}
export default CommentForm;