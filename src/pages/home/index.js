import React, {Component} from 'react';
import { Grid, Col, Row} from 'react-flexbox-grid';
import { Container, Typography, Card, TextField, FormControl,  FormControlLabel, Button} from '@material-ui/core';
import './styles.css';

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
    render(){
        return(
            <Container > 
            <div className="formulario">
            <Card>
                <Grid>               
                    <Typography component="h1" variant="h5" color="primary">
                    <h1>Login</h1>
                    </Typography>
                <form autoComplete="off">
                    <TextField 
                        id="mail" 
                        label="Ingrese Email"
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        autoFocus
                        />
                    <TextField 
                        id="password" 
                        label="Ingrese Contraseña" 
                        type="password"
                        variant="outlined" 
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        autoFocus/>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        >Ingresar</Button>    
                </form>
                </Grid>
            </Card>
            </div>
        </Container>      
        );
    }
  

}

export default Login;