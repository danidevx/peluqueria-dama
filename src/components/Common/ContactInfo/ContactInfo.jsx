import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import './ContactInfo.scss';

const ContactInfo = () => {
	return (
		<div className='info-contact'>
			<div>
				<MdLocationOn />
				<p>Sarmiento 512</p>
			</div>
			<div>
				<MdPhone />
				<p>+54 9 3858 156235</p>
			</div>
			<div>
				<MdEmail />
				<p>ejemplo@gmail.com</p>
			</div>
		</div>
	);
};
export default ContactInfo;
