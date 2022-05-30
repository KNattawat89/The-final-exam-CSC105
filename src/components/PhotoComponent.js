import React, { Component } from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class PhotoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPhoto: null,
        }
    }

    onPhotoSelect(photo) {
        this.setState({ selectedPhoto: photo});
    }

    renderPhoto(photo) {
        if (photo != null)
            return(
                <Card>
                    <CardImg top src={photo.image} alt={photo.name} />
                    <CardBody>
                      <CardTitle>{photo.name}</CardTitle>
                      <CardText>{photo.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const p = this.props.info.map((photo) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={photo.id}
                  onClick={() => this.onPhotoSelect(photo)}>
                  <CardImg style={{objectFit: "cover"}} width="200px" height="500px" src={photo.image} alt={photo.name} />
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
            </div>
        );
    }
}

export default PhotoComponent;