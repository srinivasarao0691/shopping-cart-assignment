import React from 'react';
import { signUpFields } from './signUpFields';
import useForm from '../../Hooks/useForm';
import useError from '../../Hooks/useError';
import Button from '../../Components/Styles/Button/Button';
import InputField from '../../Components/Styles/InputField/InputField';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import Modal from '../../Components/Styles/Modal/Modal';
import CartPage from '../Cart/Cart';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
export default function SignUp() {
    const initialFormValue = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    const { fieldValue, handleForm } = useForm(initialFormValue);
    const { error, handleError, handleSubmit } = useError(initialFormValue);
    const openCart = useSelector((state) => state.cart.openCart);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h5>SignUp</h5>
                        <p>We do not share your personal details</p>
                    </div>
                    <div className="col-sm-6">
                        <Form>
                            {
                                (signUpFields || []).map((field,index) => {
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
                        <Button onClick={() => handleSubmit(fieldValue)}>SignUp</Button>
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