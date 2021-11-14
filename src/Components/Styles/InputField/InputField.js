import React from 'react';
import Form from 'react-bootstrap/Form';
export default function InputField({
	type,
	name,
	value,
	label,
	handleForm,
	handleError,
	error,
	regex,
	autoComplete,
	required
}) {
	return (
		<>
			<Form.Control type={type} name={name} required={required}
				onChange={(e) => { handleForm(e); handleError(e, regex) }}
				value={value}
				autoComplete={autoComplete}
				placeholder={label}
				isInvalid={error}
				feedback={error}
				feedbackType={error ? "invalid" : "valid"}
			/>
			<Form.Control.Feedback type="invalid" tooltip>
				{error}
			</Form.Control.Feedback>
		</>
	);
}
