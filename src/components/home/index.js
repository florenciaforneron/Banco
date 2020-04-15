import React, {Component} from 'react';
import { Grid, Col, Row} from 'react-flexbox-grid';
import { Container, Typography, Card, TextField, FormControl,  FormControlLabel, Button, InputLabel} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import './styles.css';

class Login extends Component{


    constructor(props) {
        super(props);
        this.state = {
            mail:'',
            password:'',
            logueado: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.name === 'logueado' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
    render(){
        return(
            <div className="formulario">  
                <form >
                    <h1>Login</h1>
                    <TextField
                        label="Ingrese Email"
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        autoFocus
                        checked={this.state.mail}
                        onChange={this.handleChange}
                        />
                        <br></br>
                      
                    <TextField 
                        label="Ingrese Contraseña" 
                        type="password"
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        autoFocus/>
                        <br></br>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        >Ingresar</Button>    
                </form>
            </div>     
        );
    }
}

export default Login;