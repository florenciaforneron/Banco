import React, { Component } from 'react'
import SucursalForm from './SucursalForm'
import { connect } from "react-redux";
import * as actions from "../../actions/transactionActions"
import { bindActionCreators } from "redux";

class SucursalList extends Component {


    handleEdit = (index) => {
        this.props.updateSucursalIndex(index)
    }

    handleDelete = (index) => {
        this.props.deleteSucursal(index)
    }

    render() {
        return (
            <div>
                <SucursalForm />
                <hr />
                <table>
                    <tbody>
                        <p>Sucursales:</p>
                        {this.props.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.direccion}</td> 
                                <td>{item.ciudad}</td>
                                <td>{item.region}</td>
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
        updateSucursalIndex: actions.updateIndex,
        deleteSucursal: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SucursalList)