
import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter
    , Row, Col, Container, FormFeedback, Combobox
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Main from './maincomponent';
import Home from './HomeComponent';
import { combineForms } from 'react-redux-form';
import { Control, LocalForm, Errors, Field } from 'react-redux-form';
import Files from 'react-files';
import {Loading} from './redux/LoadingComponent';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card >
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}


export function RenderComment({ comments , addComment, dishId}) {
    console.log("!!!!RenderComment!!!");
    if (comments != null) {
        console.log("RenderComment!!!", comments);
        return (
            <div className="col-12 col-md-5 m-1">

                <h4 >Comments!!! </h4>

                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>  {comment.author}    {comment.date} </p>
                            </li>
                        );
                    })
                    };
                    <CommentForm  dishId={dishId}  addComment={addComment} />
                </ul>

            </div>
        );
    }
    else {
        console.log("@@@@@RenderComment!!!", comments);
        return (
            <div> </div>
        );

    }
}





export const DishDetail = (props) => {
    console.log("Render Component .....", props, props.dish);
   if(props.isLoading)
   {
   return (
<div className="container"> 
<div className="row">
    <Loading />
    </div>
</div>
   );
   }
   else if(props.errMess) {
    return (
        <div className="container"> 
        <div className="row">
           <h4> {props.errMess}  </h4>
            </div>
        </div>
    );
   }
    if (props.dish != null)
        return (
            <div className="container">

                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>{props.dish.name}</h2>
                    </div>
                </div>


                <div className="row">

                    <RenderDish dish={props.dish} />
                    <RenderComment comments={props.comment} 
                    
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                    <div className="col-6">

                    </div>
                    <div className="col-6">
                        {/* <Button onClick={<CommnetForm />}>Submit </Button> */}
                    </div>
                </div>

            </div>


        );
    else {
        return (
            <div> </div>
        );

    }



}
// export default DishDetail;


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return await response.json(); // parses JSON response into native JavaScript objects
}

var myJson = "Hii";
export class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {
                isNavOpen: false,
                isModalOpen: false,
                error: null,
                isLoaded: false,
                items: []
            };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async buttoncheck() {
        console.log("In componentDidMount");
        const response = await fetch("http://192.168.0.150:5001/rec/v1/trends/shimla");
        console.log(response);
        var tempJson = await response.json();
        myJson = tempJson;
        console.log(JSON.stringify(myJson));
        console.log(JSON.stringify(response.status));
        return myJson;


    }

    async postbuttoncheck() {
        console.log("In  POST componentDidMount");
        const response = await postData("http://18.139.172.247:8000/token-auth/", { username: "test1", password: "Suvidha@123" });
        // Files.WriteLine(JSON.stringify(response));
        // fs.WriteLine(JSON.stringify(response));
        // fs.Close();
        // const myJson = await response.json();
        // console.log(JSON.stringify(myJson));
        console.log(JSON.stringify(response.status));
    }









    // For API 
    async componentDidMount() {
        console.log("In componentDidMount");
        const response = await fetch("http://192.168.0.150:5001/rec/v1/trends/shimla");
        console.log(response);
        var tempJson = await response.json();
        myJson = tempJson;
        console.log(JSON.parse(myJson));
        console.log(JSON.stringify(myJson));
        console.log(JSON.stringify(response.status));


        // console.log("In componentDidMount");
        // //const response = await fetch("http://192.168.0.150:5001/rec/v1/trends/shimla");
        // const response = await fetch("http://18.139.172.247:8000/token-auth/");
        // console.log(response);
        // // const myJson = await response.json();
        // console.log(JSON.stringify(response.status));



        // fetch("192.168.0.168/datanextapitest/datanext/flows/flows")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true
        //                 // items: result.items
        //             });
        //             console.log("In API", result);
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.

        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //             console.log("In erro", error);
        //         }
        //     )


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
        // console.log("Current State is " + JSON.stringify(values));
        // alert("Current State is " + JSON.stringify(values));


        this.toggleModal();
       this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }





    render() {

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);


        const { error, isLoaded, items } = this.state;
        // if (error) {

        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
        //     console.log(items);
      

        myJson = this.buttoncheck();

        // for (const product of myJson.json) {
        //     console.log(product);
        // }
        // const options = this.buttoncheck.map((item, index) => <li key={index}>{`${item.album_id} in ${item.text}`}</li>)
        // return (
        //     <ul>
        //         {options}
        //     </ul>
        // );



        return (
            <div >
                <Row>
                    <div className="col-4">
                    </div>
                    <div className="col-8">
                        <Button onClick={this.toggleModal}>Submit Comment</Button>
                        <Button onClick={this.buttoncheck}>Check</Button>
                    </div>
                    {/* <div>
                        {
                            myJson.map((experience, i) => {
                                return (
                                    <div key={i}>
                                        <div>
                                            <a href={experience.album_id}>
                                                <img src={experience.text} alt={experience.title} />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div> */}
                </Row >
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
                                            <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                                <option> 1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Control.select>
                                        </Row>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col md="8">
                                        <Row>
                                            <Label htmlfor="Author"> Author</Label>
                                        </Row>
                                        <Row className="form-group">
                                            <Control.text model=".author" id="author" name="author" className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }} />
                                            <Errors
                                                className="text-danger"
                                                model=".yourname"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="8">
                                        <Row className="form-group">
                                            <Label htmlfor="comment"> Comment </Label>
                                            <Control.textarea model=".comment" id="commnet" name="comment" className="form-control"
                                                validators={{
                                                    required, minLength: minLength(10), maxLength: maxLength(50)
                                                }} />
                                            <Errors
                                                className="text-danger"
                                                model=".comment"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 10 characters',
                                                    maxLength: 'Must be 50 characters or less'
                                                }}
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                                <Button type="submit" onClick="Submit()" value="submit" className="bg-primary" > Submit </Button>
                            </LocalForm>

                        </ModalBody>
                    </Modal>
                </Container>
            </div >
        );

        ///
    }
}








