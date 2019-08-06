import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCustomer } from '../actions';

class Home extends Component {

    render() {

        const { dispatch, customer } = this.props
        return (
            <div>

            <div>Hello World</div>

            <h1>{ this.props.customer.address }</h1>

            <ul>
                { customer.list.map( (item, index) => (
                    <li key={index}>{item.name}</li>
                    ))}
            </ul>

            <input type="button" value="Click Here" onClick={ () => dispatch(loadCustomer()) }/>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    customer: state.customerReducer
})

export default connect(mapStateToProps)(Home)