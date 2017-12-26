import React, { Component } from 'react'

export default class Field extends Component {

    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <p>
                    <label>{this.state.value}</label>
                </p>
                <p>
                    <input onChange={this.handleChange} value={this.state.value} />
                </p>
            </div>
        )

    }

}