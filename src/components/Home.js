import React, { Component } from 'react'
import {Layout} from 'antd';
import { connect } from 'react-redux'
import { loadCustomer } from '../actions';

import { loadTalha } from '../actions';

class Home extends Component {

    render() {
        
        
        const { dispatch, customer,talha } = this.props
        
        return (
            <div>

            <div>Hello World</div>

            <h1>{ this.props.customer.address }</h1>

            <h1>{ this.props.talha.address }</h1>

            <ul>
                { customer.list.map( (item, index) => (
                    <li key={index}>{item.name}</li>
                    ))}

                   { talha.list.map( (item, index) => (
                    <li key={index}>{item.name}</li>
                    ))}
            </ul>

            <input type="button" value="Click Here" onClick={ () => dispatch(loadCustomer()) }/>

            <input type="button" value="Click Here to load talha" onClick={ () => dispatch(loadTalha()) }/>


            

            </div>
        )
    }
}

const mapStateToProps = state => ({
    customer: state.customerReducer,
    talha:state.talhaReducer,
    
})

export default connect(mapStateToProps)(Home)