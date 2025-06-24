'use client';

import MyButton from '@/components/Common/MyButton/MyButton';
import { useForm } from '@/hooks/useForm';

const Form = () => {
	// Hook useForm
	const {
		name,
		email,
		tel,
		option,
		date,
		formState,
		onInputChange,
		onResetForm,
	} = useForm({
		name: '',
		email: '',
		tel: '',
		option: '',
		date: '',
	});

	// Handle submit
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formState);
		alert(JSON.stringify(formState));
		onResetForm();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Nombre'
				name='name'
				id='name'
				value={name}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<input
				type='email'
				placeholder='Email'
				name='email'
				id='email'
				value={email}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<input
				type='tel'
				placeholder='Teléfono'
				name='tel'
				id='tel'
				value={tel}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<select
				name='option'
				id='option'
				value={option}
				onChange={onInputChange}
				required
				autoComplete='off'>
				<option defaultValue={true} disabled={true}>
					Haircut
				</option>
				<option value={'styling'}>Styling</option>
				<option value={'stylingColor'}>Styling + Color</option>
				<option value={'stylingTint'}>Styling + Tint</option>
				<option value={'semiPermanent'}>Semi-Permanent Wave</option>
				<option value={'cut'}>Cut</option>
				<option value={'shave'}>Shave</option>
				<option value={'beardTrim'}>Beard Trim</option>
				<option value={'cutBearTrim'}>Cut + Beard Trim</option>
				<option value={'cutShave'}>Cut + Shave</option>
				<option value={'cleanUp'}>Clean Up</option>
			</select>
			<input
				type='date'
				name='date'
				id='date'
				value={date}
				onChange={onInputChange}
				required
				autoComplete='off'
			/>
			<MyButton newClass='contact-btn'>Reserva tu turno</MyButton>
		</form>
	);
};
export default Form;
