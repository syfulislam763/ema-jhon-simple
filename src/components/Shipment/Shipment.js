import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/UseAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => { 
        console.log(data) 
    }
    const auth = useAuth();

    return (
        <form className="Shipment-css" onSubmit={handleSubmit(onSubmit)}>
              
            <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Your name"/>
            {errors.name && <span className="error">name is required</span>}

            <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Your Email"/>
            {errors.email && <span className="error">email is required</span>}

            <input name="AddressLine1" ref={register({ required: true })} placeholder="Your Address1"/>
            {errors.AddressLine1 && <span className="error">AddressLine1 is required</span>}

            <input name="AdderssLine2" ref={register} placeholder="AddressLine2"/>

            <input name="city" ref={register({ required: true })} placeholder="Enter Your City"/>
            {errors.city && <span className="error">city is required</span>}

            <input name="country" ref={register({ required: true })} placeholder="Country"/>
            {errors.country && <span className="error">country is required</span>}

            <input name="zipcode" ref={register({ required: true })} placeholder="Zip Code"/>
            {errors.zipcode && <span className="error">zipcode is required</span>}
              
            <input type="submit" />
        </form>
    );
};

 export default Shipment;