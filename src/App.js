import React from 'react';
import './App.css';
import firebase from './Firebase';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import Light from './light'

export default function App() {
  /*const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });
  let lights = [];
  const data = firebase.database().ref("lights");
  data.on('value', (snapshot) =>{
    let newLights = snapshot.val();
    lights = newLights;
    console.log(lights)
  });
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };*/


  return (
    <Light/>
    
  );
}

