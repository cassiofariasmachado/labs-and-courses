import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector, formValues } from 'redux-form'

import { init } from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (total, current) => total + current
        return {
            sumOfCredits: this.props.credits.map(elem => +elem.value || 0).reduce(sum),
            sumOfDebits: this.props.debits.map(elem => +elem.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debits } = this.props
        const { sumOfCredits, sumOfDebits } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4'
                        placeholder='Informe o nome' readOnly={readOnly} />
                    <Field name='month' component={LabelAndInput} label='Mês' cols='12 4'
                        type='number' placeholder='Informe o mês' readOnly={readOnly} />
                    <Field name='year' component={LabelAndInput} label='Ano' cols='12 4'
                        type='number' placeholder='Informe o ano' readOnly={readOnly} />
                    <Summary credit={sumOfCredits} debit={sumOfDebits} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend="Créditos" />
                    <ItemList cols='12 6' list={debits} readOnly={readOnly}
                        field='debits' legend="Débitos" showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    }

}


const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ credits: selector(state, 'credits'), debits: selector(state, 'debits') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)