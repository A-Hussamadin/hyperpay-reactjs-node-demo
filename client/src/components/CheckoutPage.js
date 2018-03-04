import React, { Component } from 'react';
import axios from 'axios';
class CheckoutPage extends Component {
    state = {
        checkoutId: null,
        loading: true
    }
    componentDidMount() {
        axios.post("/api/checkout", ).then(res => {
            this.setState({
                checkoutId: res.data.id,
                loading: false
            })
        })
    }
    renderPaymentform = () => {
        console.log('Loading ')
        const script = document.createElement("script");

        script.src = `https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=${this.state.checkoutId}`;
        script.async = true;

        document.body.appendChild(script);

        const form = document.createElement("form")
        form.action = "http://localhost:3000/result";
        form.setAttribute("class", "paymentWidgets");
        form.setAttribute("data-brands", "VISA MASTER AMEX")
        document.body.appendChild(form);
    }
    render() {
        if (!this.state.loading) {
            return (
                <div >
                    {this.renderPaymentform()}
                </div>
            );
        } else {
            return (
                <div> Still Loading</div>
            )
        }
    }
}

export default CheckoutPage;