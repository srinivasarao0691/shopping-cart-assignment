import React from 'react';
import { signInFields } from './signInFields';
import useForm from '../../Hooks/useForm';
import useError from '../../Hooks/useError';
import Button from '../../Components/Styles/Button/Button';
import InputField from '../../Components/Styles/InputField/InputField';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import Modal from '../../Components/Styles/Modal/Modal';
import CartPage from '../Cart/Cart';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
export default function SignIn() {
    const initialFormValue = {
        email: '',
        password: '',
    }
    const { fieldValue, handleForm } = useForm(initialFormValue);
    const { error, handleError, handleSubmit } = useError(initialFormValue);
    const openCart = useSelector((state) => state.cart.openCart);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h5>Login</h5>
                        <p>Get Access to your Orders, Wishlist and Recommendations</p>
                    </div>
                    <div className="col-sm-6">
                        <Form>
                            {
                                (signInFields || []).map(field => {
                                    return (
                                        <FloatingLabel label={field.label} className="mb-3" key={field.id}>
                                            <InputField
                                                label={field.label}
                                                type={field.type}
                                                name={field.name}
                                                handleForm={handleForm}
                                                value={fieldValue[field.name] || field.value}
                                                error={error[field.name]}
                                                regex={field.regex}
                                                handleError={handleError}
                                                autoComplete={field.autoComplete}
                                                required={field.required}
                                            />
                                        </FloatingLabel>
                                    )
                                })
                            }
                        </Form>
                        <Button onClick={() => handleSubmit(fieldValue)}>SignIn</Button>
                    </div>
                </div>
            </div>
            {openCart &&
                <Modal>
                    <CartPage header={true} />
                </Modal>
            }
        </>
    )
}