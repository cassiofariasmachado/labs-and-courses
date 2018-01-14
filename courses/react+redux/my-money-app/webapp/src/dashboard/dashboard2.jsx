import React, { Component } from 'react'
import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debit: 0 }
    }

    componentWillMount() {
        this.getSummary()
    }

    getSummary() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then((res) => {
                this.setState(res.data)
            })
    }

    render() {
        const { credit, debit } = this.state

        return (
            <div>
                <ContentHeader title="Dashboard" subTitle="Versão 2.0" />
                <Content >
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debit}`} text="Total de débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debit}`} text="Total de débitos" />
                    </Row>
                </Content>
            </div>
        )
    }

}

export default Dashboard2