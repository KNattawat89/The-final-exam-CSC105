import React from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
function RenderCard({item}) {

    return(
        <Card>
            <CardImg width="200px" height="500px" src={item.image} alt={item.name} />
            <CardBody className="d-flex justify-content-center" style={{minHeight: "100px"}}>
                I will do my best!
            </CardBody>
        </Card>
    );

}

function RenderCardBody({item}) {
    return(
     <Card style={{width: "100%"}}>
         <CardTitle tag="h3" className="ms-3 mt-2">
             My Name:
         </CardTitle>
         <CardBody >
            {item.name}
            <br/>
            <div className="h3 mt-2">
               My education:
            </div>
            {item.college}
            <br/>
            {item.school}
         </CardBody>
     </Card>
    );
}

function RenderPhoto({photo}) {
    return(
        <Card>
                    <CardImg width="200px" height="500px" src={photo.image} alt={photo.name} />
                    <CardBody style={{minHeight: "200px"}}>
                      <CardTitle>{photo.name}</CardTitle>
                      <CardText>{photo.description}</CardText>
                    </CardBody>
                </Card>
    );
}


const About = (props) => {
    const a = props.about.filter((e2) => {
        return (e2.id >= 1 && e2.id <=3);
        })
        const b = props.about.filter((e2) => {
            return (e2.id >= 4 && e2.id <= 6);
            })
    return(
      <div className="container">
       <div className="row ms-2 h2">
           My profile
       </div>
       <hr/>
          <div className="row mt-5">
             <div className="col-6">
             <RenderCard item={props.aboutme} />
             </div>
             <div className="col-6 d-flex align-items-center">
               <RenderCardBody item={props.aboutme}/>
            </div>
            </div>
            <div className="col-12 mt-5 h2">
               My favorite subjects
            </div>
            <hr/>
            <div className="row mt-5">
                
                {a.map((e1) => { 
                 return (
                     <div className="col-4">
                        <RenderPhoto photo={e1}/>
                     </div>
                 )
                    })
                        
                }
            <div className="col-12 h2 mt-5">
              My favorite movies
            </div>
            <hr/>
            </div>
            <div className="row mt-5 mb-5">
                 {b.map((e2)=> {
                     return (
                         <div className="col-4"> 
                          <RenderPhoto photo={e2}/>
                         </div>
                     );
                 })}
            </div>
          </div>
         
    );
}
export default About;