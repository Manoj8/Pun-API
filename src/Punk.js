import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faAlignCenter} from '@fortawesome/free-solid-svg-icons'
import connect from "react-redux"
import './App.css';

class Punk extends Component {
  state = {
    i1: [],
    fav:false
  };

  componentDidMount() {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then(res => res.json())
      .then(json => {
        const j1 = JSON.parse(JSON.stringify(json));
        this.setState({
          i1: j1
        });
      });
  }

  hearts=(pub)=>{
      const currentState = this.state.fav;
      console.log(pub);
      this.setState({ fav: !currentState });
        // this.props.image_url=pub;
        console.log(this.state.fav);
        // this.props.dispatch({type:"FAV_IMAGE"})
        
      }
  


  render() {
    const { i1 } = this.state;
    const p1 = i1.map(publish => {
      // console.log(publish);

      const pp1 = publish.image_url;
      // console.log(pp1);
      if(pp1.search("keg")===-1){
      return (
        <div key={publish.id} >
          <Card className="card">
          <FontAwesomeIcon icon={faHeart} id={publish.id} className={this.state.fav ? "like": ""} onClick={(event)=>{this.hearts(publish)}}/>
          <img variant="top" src={publish.image_url} />
            <Card.Body>
              <h3>{publish.name}</h3>
              <h5>
                {publish.tagline}
              </h5>
              <p>
                {publish.description}
              </p>
            </Card.Body>
          </Card>
        </div>
      );
    }});

    return (<div className="App">{p1}</div>);
  }
}

const mapStateToProps=state=>({
  image_url:state.image_url
});

export default (Punk);
