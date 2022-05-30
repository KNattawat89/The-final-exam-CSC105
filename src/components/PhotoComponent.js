
import React, { Component } from "react";
import { flushSync } from "react-dom";

import {
    Card, CardImg, CardText, CardBody, CardTitle, Button, ModalBody, ModalFooter, ModalHeader, Modal, Form, FormGroup, Label, Input, Col
    , FormFeedback
} from 'reactstrap';

class PhotoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPhoto: null,
            username: "",
            commented: "",
            score: 0,
            amountlike: 0,
            isNavOpen: false,
            isModalOpen: false,
            touched: {
                username: false,
                commented: false,
                score: false,

            }

        };
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        // this.handleCommentedChange = this.handleCommentedChange.bind(this);
        // console.log(this.state.score);
    }



    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    // handleCommentedChange(event) {
    //  this.state.commented = event.target.value;
    // }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (name == "score") {
            this.setState({
                [name]: value
            })
            if (value == 6) {
                this.setState({
                    [name]: 5
                });
            } else if (value == -1) {
                this.setState({
                    [name]: 0
                })
            }

        } else {
            this.setState({
                [name]: value
            })
        }
    }
    validate(username, commented, score) {
        const errors = {
            username: '',
            commented: '',
            score: 0,

        };
        if (this.state.touched.username && username.length < 3)
            errors.username = 'Username should be >= 3 characters';
        else if (this.state.touched.username && username.length > 10)
            errors.username = 'Username should be <= 10 characters';
        if (this.state.touched.commented && commented.length < 20)
            errors.commented = 'Comment should be >= 20 characters';
        else if (this.state.touched.commented && commented.length > 100)
            errors.commented = 'Comment should be <= 100 characters';
        if (this.state.touched.score && score < 1)
            errors.score = 'Score should be > 0';
        else if (this.state.touched.score && score > 6)
            errors.score = 'Score should be < 6';
        return errors;

    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    onPhotoSelect(photo) {
        this.setState({ selectedPhoto: photo });
    }

    handleLogin(event) {
        this.toggleModal();
        alert(`Username: ${this.state.username}`);
        event.preventDefault();

    }



    renderPhoto(photo) {
        if (photo != null)
            return (
                <div>
                    <Card>
                        <CardImg top src={photo.image} alt={photo.name} />
                        <CardBody>
                            <CardTitle>{photo.name}</CardTitle>
                            <CardText>{photo.description}</CardText>
                            <Button color="danger"
                                onClick={this.toggleModal}
                            >Comment&Like</Button>
                        </CardBody>
                    </Card>

                </div>
            );
        else
            return (
                <div></div>
            );
    }

    // countlike() {
    //     return (
    //        this.state.amountlike += 1
    //     );
    // }

    // renderCommentForm(photo) {
    //   if(photo != null) 
    //   return(
    //      <div>
    //          <Form>
    //          <FormGroup row>
    //             asdadsa
    //          </FormGroup>
    //          </Form>
    //      </div>
    //   );
    // }

    render() {
        function onSubmit(values,event) {
            event.preventDefault();
            // this.toggleModal();
            alert(`Username: ${values}`);
        }
        const errors = this.validate(this.state.username, this.state.commented);
        const p = this.props.info.map((photo) => {
            return (

                <div className="col-12 col-md-5 m-1">
                    <Card key={photo.id}
                        onClick={() => this.onPhotoSelect(photo)}>
                        <CardImg style={{ objectFit: "cover" }} width="200px" height="500px" src={photo.image} alt={photo.name} />
                    </Card>
                </div>

            );
        });

        return (
            <div className="container">
                <div className="row">
                    {p}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderPhoto(this.state.selectedPhoto)}
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Comment&Like</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(e)=>onSubmit(this.state.username,e)}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    valid={errors.username === ''}
                                    invalid={errors.username !== ''}
                                    onBlur={this.handleBlur('username')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.username}</FormFeedback>

                            </FormGroup>


                            <FormGroup>
                                <Label type="text">Score</Label>
                                <Input type="number" id="score" name="score"
                                    placeholder="Username"
                                    value={this.state.score}
                                    valid={errors.score === 0}
                                    invalid={errors.score !== 0}
                                    onBlur={this.handleBlur('score')}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.score}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Col md={12}>
                                    <Label type="text" md={2}> Comment</Label>
                                </Col>
                                <Col md={12}>
                                    <Input type="textarea" id="commented" name="commented"
                                        rows="12"
                                        placeholder="Comment"
                                        value={this.state.commented}
                                        valid={errors.commented === ''}
                                        invalid={errors.commented !== ''}
                                        onBlur={this.handleBlur('commented')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.commented}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10 }}>
                                    <Button color="warning" className="me-3" > Like</Button>

                                    <Button type="submit" color="primary">
                                        Send Comment
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        );
    }
}

export default PhotoComponent;