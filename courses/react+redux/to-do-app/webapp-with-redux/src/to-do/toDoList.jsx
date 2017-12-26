import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from '../to-do/toDoActions'

const ToDoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(toDo => (
            <tr key={toDo._id}>
                <td className={toDo.done ? 'marked-as-done' : ''}>{toDo.description}</td>
                <td>
                    <IconButton style="success"
                        icon="check"
                        onClick={() => props.markAsDone(toDo)}
                        hide={toDo.done} />
                    <IconButton style="warning"
                        icon="undo"
                        onClick={() => props.markAsPending(toDo)}
                        hide={!toDo.done} />
                    <IconButton style="danger"
                        icon="trash-o"
                        onClick={() => props.remove(toDo)}
                        hide={!toDo.done} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = (state) => ({
    list: state.toDo.list
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)