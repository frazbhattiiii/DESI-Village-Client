import React from 'react';
import orderConfirmation from './orderConfirmed.png';
import { useSelector } from "react-redux";
function SuccessPayment ( props ) {
  const {error}= useSelector(state => state.cart);
    localStorage.setItem('cart', JSON.stringify([]));

    return (
                <>
                    {!error?
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="text-center">Thank you for your order!</h3>
                                        <img src={orderConfirmation} alt="orderConfirmation" className="img-fluid" width='350'/>
                                        <p className="text-center">You will receive shortly an email for confirmation</p>
                                        <p className="text-center">You can also check your order status on the <a href="/profile">Orders</a> page.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:<h2>Some Technical Error occurred while placing your order</h2>}
        </>
    );
}

export default SuccessPayment;