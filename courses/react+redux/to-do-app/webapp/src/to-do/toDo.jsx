import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ToDoForm from './toDoForm'
import ToDoList from './toDoList'

const URL = 'http://localhost:3000/api/todos'

export default class ToDo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(res => this.setState({ ...this.state, description, list: res.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(event) {
        this.setState({ ...this.state, description: event.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(res => {
                this.refresh()
            })
    }

    handleRemove(toDo) {
        axios.delete(`${URL}/${toDo._id}`)
            .then(res => this.refresh(this.state.description))
    }

    handleMarkAsDone(toDo) {
        axios.put(`${URL}/${toDo._id}`, { ...toDo, done: true })
            .then(res => this.refresh(this.state.description))
    }

    handleMarkAsPending(toDo) {
        axios.put(`${URL}/${toDo._id}`, { ...toDo, done: false })
            .then(res => this.refresh(this.state.description))
    }

    handleClear(toDo) {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <ToDoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <ToDoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }

}