import React, { Component } from 'react'
import UsuarioForm from './UsuarioForm'
import { connect } from "react-redux";
import * as actions from "../../actions/usuarioActions"
import { bindActionCreators } from "redux";

class UsuarioList extends Component {


    handleEdit = (index) => {
        this.props.updateUsuarioIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteUsuario(index)
    }

    render() {
        return (
            <div>
                <UsuarioForm />
                <hr />
                <table>
                    <tbody>
                        <p>Usuarios</p>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.nombres}</td> 
                                <td>{item.apellidos}</td>
                                <td>{item.numDocumento}</td>
                                <td><button onClick={() => this.handleEdit(index)}>Editar</button></td>
                                <td><button onClick={() => this.handleDelete(index)}>Borrar</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUsuarioIndex: actions.updateIndex,
        deleteUsuario: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsuarioList)