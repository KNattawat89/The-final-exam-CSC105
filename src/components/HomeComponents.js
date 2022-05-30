import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, Badge} from 'reactstrap';
function RenderCard({item}) {

    return(
        <Card>
            <CardImg width="200px" height="500px" src={item.image} alt={item.name} />
            <CardBody style={{minHeight: "200px"}}>
            <CardTitle>
            <Badge color="danger">
                {item.news}
            </Badge>
            <br/>
                {item.name}</CardTitle>
            <CardText>
            {item.description} 
            </CardText>
            </CardBody>
        </Card>
    );

}

const Home = (props) => {
    return(
       <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.photo} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.news} />
                </div>
               </div>
           </div>
    );
}
export default Home;