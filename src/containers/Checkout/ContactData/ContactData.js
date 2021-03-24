import { Component } from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        ingredients: null,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
        totalPrice: 0
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, 
            customer: {
                name: 'Joshua Crowe',
                address: {
                    street: 'Teststree 1',
                    zipCode: '92660',
                    country: 'US'
                },
                email: 'jcrowe@sunpathfinancial.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false, purchasing: false})
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
            });        
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Enter Full Name" />
                <input type="email" name="email" placeholder="Enter Your Email" />
                <input type="text" name="street" placeholder="Enter Your Address" />
                <input type="text" name="postalCode" placeholder="Enter Your Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>             
        );
        if (this.state.loading) {
            form = <Spinner />
        } 
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data:</h4>             
                {form}
            </div>              
        )
    }
}

export default ContactData;