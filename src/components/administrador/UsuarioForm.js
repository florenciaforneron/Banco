import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../actions/usuarioActions"
import { bindActionCreators } from "redux";

class UsuarioForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                nombres: '',
                apellidos:'',
                numDocumento:'',
                fechaNac:'',
                direccionUsuario: '',
                ciudadUsuario: '',
                regionUsuario: '',
                telefonoUsuario: '',
                correoElectronicoUsuario: '',
                tipoPerfil:''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertTransaction(this.state)
        else
            this.props.updateTransaction(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <p> Ingrese Nuevo Usuario: </p>
                <input name="nombres" placeholder="Nombre" onChange={this.handleInputChange} value={this.state.nombres} /><br />
                < input name="apellidos" placeholder="Apellido" onChange={this.handleInputChange} value={this.state.apellidos} /><br />
                < input name="numDocumento" placeholder="Numero de Documento" onChange={this.handleInputChange} value={this.state.numDocumento} /><br />
                < input name="fechaNac" placeholder="Fecha de Nacimiento" onChange={this.handleInputChange} value={this.state.fechaNac} /><br />
                <input name="direccionUsuario" placeholder="Direccion" onChange={this.handleInputChange} value={this.state.direccionUsuario} /><br />
                < input name="ciudadUsuario" placeholder="Ciudad" onChange={this.handleInputChange} value={this.state.ciudadUsuario} /><br />
                < input name="regionUsuario" placeholder="Region/Estado" onChange={this.handleInputChange} value={this.state.regionUsuario} /><br />
                < input name="telefonoUsuario" placeholder="Telefono" onChange={this.handleInputChange} value={this.state.telefonoUsuario} /><br />
                < input name="correoElectronicoUsuario" placeholder="Correo Electonico" onChange={this.handleInputChange} value={this.state.correoElectronicoUsuario} /><br />
                < input name="tipoPerfil" placeholder="Tipo de perfil" onChange={this.handleInputChange} value={this.state.tipoPerfil} /><br />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertTransaction: actions.insert,
        updateTransaction: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsuarioForm)
