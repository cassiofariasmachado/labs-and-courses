import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (event) => {
        switch (event.key) {
            case 'Enter':
                event.shiftKey ? props.handleSearch() : props.handleAdd()
                break;
            case 'Escape':
                props.handleClear()
                break;
            default:
                return false
                break;
        }
    }

    return (
        <div role="form" className="to-do-form">
            <Grid cols="12 9 10">
                <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                    value={props.description}
                    onKeyUp={keyHandler}
                    onChange={props.handleChange} />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                <IconButton style="info" icon="search" onClick={props.handleSearch} />
                <IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid>
        </div>
    )
}