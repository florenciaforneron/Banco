import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../actions/sucursalActions"
import { bindActionCreators } from "redux";

class SucursalForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                direccion: '',
                ciudad: '',
                region: '',
                telefono: '',
                correoElectronico: ''
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
                <p> Ingrese Nueva sucursal: </p>
                <input name="direccion" placeholder="Direccion" onChange={this.handleInputChange} value={this.state.direccion} /><br />
                < input name="ciudad" placeholder="Ciudad" onChange={this.handleInputChange} value={this.state.ciudad} /><br />
                < input name="region" placeholder="Region/Estado" onChange={this.handleInputChange} value={this.state.region} /><br />
                < input name="telefono" placeholder="Telefono" onChange={this.handleInputChange} value={this.state.telefono} /><br />
                < input name="correoElectronico" placeholder="Correo Electonico" onChange={this.handleInputChange} value={this.state.correoElectronico} /><br />
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

export default connect(mapStateToProps, mapDispatchToProps)(SucursalForm)
