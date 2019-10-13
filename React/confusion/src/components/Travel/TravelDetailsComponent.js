import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImgOverlay, CardImg, CardTitle, CardSubtitle, CardFooter,CardColumns, Row, Col } from 'reactstrap';


function RenderImage({ dish }) {
    return (
        <div className="col-12">
            <Card style={{ width: '80%', height: '20%' }}>
                <Row>

                    <CardImg bottom src={dish.image} alt={dish.name} style={{ width: '80%', height: '20%', bottom: 0, top: 20 }} />



                    <CardImgOverlay >
                        <CardTitle>{dish.name}</CardTitle>
                        {/* <CardColumns>{dish.description}</CardColumns> */}
                        {/* <CardFooter className="mb-2 bottom text-muted">{dish.name}</CardFooter> */}
                    </CardImgOverlay>



                </Row>
                <CardFooter className="mb-2 bottom text-muted">{dish.name}</CardFooter>
            </Card>


            {/* <Card >


                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card> */}
        </div>
    );

}

function RenderImage1({ leaders }) {
    if (leaders != null) {
        console.log("Render@@@", leaders);
        {
            leaders.map((leader) => {
                console.log("Render!!!@@@", leader);
                console.log("@@Render!!!@@@", leader.image);
                return (
                    <div>
                        <ul key={leader.id}>
                            <Card >
                                {/* // <CardImg top src={leader.image} alt={leader.name} /> */}
                                <CardBody>
                                    <Card.Subtitle className="mb-2 text-muted">{leader.name}</Card.Subtitle>
                                    <CardTitle>{leader.name}</CardTitle>
                                    <CardText>{leader.description}</CardText>
                                </CardBody>

                            </Card>
                        </ul>
                    </div>

                );
            })
        }
    }
    else {
        return (
            <div> SUDHIR</div>
        );
    }

}

function TravelDetails(props) {
    console.log(props);
    const leader = props.leaders;
    // const leaders = props.leaders.map((leader) => {
    return (
        <div>

            <RenderImage dish={leader} />
        </div>

    );
    //});




    return (
        <div> {leader}</div>

    );



}
export default TravelDetails;