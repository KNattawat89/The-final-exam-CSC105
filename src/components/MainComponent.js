import React, { Component } from "react";
import {Navbar, NavbarBrand } from "reactstrap";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {info} from "../shared/info";
import PhotoComponent from "./PhotoComponent";
import { home } from "../shared/home";
import Home from "./HomeComponents";
import About from "./AboutComponent";
import {aboutme} from "../shared/aboutme";
import { Switch, Route, Redirect } from "react-router-dom";
class  MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: info,
            selectedPhoto: null,
            photo: home[0],
            news: home[1],
            aboutme: aboutme[0],
            about: aboutme,
        }
    }

    onPhotoSelect(photo) {
        this.setState({ selectedPhoto: photo});
    }

    render() {
    return(
       <div>
           <Header/>
            <div>
                <Switch>
                    <Route path='/home' component={() =>  <Home photo={this.state.photo} news={this.state.news}/>}/>
                    {/* <Home photo={this.state.photo} news={this.state.news}/> */}
                    <Route exact path='/aboutme' component={() => <About aboutme={this.state.aboutme} about={this.state.about}/>}/>
                    {/* <About aboutme={this.state.aboutme} about={this.state.about}/> */}
                    <Route exact path='/photoGallery' component={() =>  <PhotoComponent info={this.state.info} selectedPhoto={this.state.selectedPhoto} onClick={(PhotoId) => this.onPhotoSelect(PhotoId)} />}/>
                    {/* <PhotoComponent info={this.state.info} selectedPhoto={this.state.selectedPhoto} onClick={(PhotoId) => this.onPhotoSelect(PhotoId)} /> */}
                    <Redirect to="/home" />
               </Switch>
           </div>
           <Footer/>
       </div>
    );
}
}
export default MainComponent;