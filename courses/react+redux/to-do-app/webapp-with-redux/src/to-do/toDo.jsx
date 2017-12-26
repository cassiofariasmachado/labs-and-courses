import React from 'react'

import PageHeader from '../template/pageHeader'
import ToDoForm from './toDoForm'
import ToDoList from './toDoList'

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <ToDoForm />
        <ToDoList />
    </div>
)