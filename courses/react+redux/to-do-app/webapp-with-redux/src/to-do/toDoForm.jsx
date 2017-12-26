import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from '../to-do/toDoActions'

class ToDoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(event) {
        const { add, search, description, clear } = this.props;
        switch (event.key) {
            case 'Enter':
                event.shiftKey ? search() : add(description)
                break;
            case 'Escape':
                clear()
                break;
            default:
                return false
                break;
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { changeDescription, add, search, description, clear } = this.props;
        return (
            <div role="form" className="to-do-form">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                        value={this.props.description}
                        onKeyUp={this.keyHandler}
                        onChange={changeDescription} />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" onClick={() => add(description)} />
                    <IconButton style="info" icon="search" onClick={search} />
                    <IconButton style="default" icon="close" onClick={clear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.toDo.description
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm)