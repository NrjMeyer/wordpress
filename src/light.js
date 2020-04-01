import React, {Component, useState, useEffect } from 'react';
import './App.css';
import firebase from './Firebase';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: {}
    }
    
  }

  componentDidMount(){
    const data = firebase.database().ref("lights");
    data.on('value', (snapshot) =>{
      let newLights = snapshot.val();
      let newState = [];
      for(let light in newLights){
        newState[light] = {
          name: newLights[light].name,
          state: newLights[light].state
        };
      }
      this.setState({
        lights: newState
      })
      console.log(this.state.lights);
    });
  }

  render(){
    const data = firebase.database().ref("lights");
    const lights =  this.state.lights;
    const handleChange = (event) => {
      data.child(event.target.name).update({'state':event.target.checked})
    };
    const peopleLis = Object.keys(lights).map(person =>
    // expression goes here:
    <FormControlLabel
          key={person}
          value="start"
          onChange={handleChange}
          control={<Switch checked={lights[person].state} color="secondary" />}
          label={lights[person].name}
          name={person}
          labelPlacement="start"
        />
    );
    return(
      peopleLis  
    );
  }
}

class Light extends Component  {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('lights');
    this.state = {
      lights: []
    };
  }

  render(){
    return(
      <FormControl component="fieldset">
        <FormLabel component="legend">Lumière dans la maison</FormLabel>
          <FormGroup>
            <Toggle/>
          </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>  
      );
  }
}

export default Light;