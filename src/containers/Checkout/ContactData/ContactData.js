import { Component } from 'react';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
    state = {
        ingredients: null,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data:</h4>             
                <form>
                    <input type="text" name="name" placeholder="Enter Full Name" />
                    <input type="email" name="email" placeholder="Enter Your Email" />
                    <input type="text" name="street" placeholder="Enter Your Address" />
                    <input type="text" name="postalCode" placeholder="Enter Your Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;