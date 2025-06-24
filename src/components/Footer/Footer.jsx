import Image from 'next/image';
import logo from '../../../public/images/logo.webp';
import ContactInfo from '../Common/ContactInfo/ContactInfo';
import SocialMedia from '../Common/SocialMedia/SocialMedia';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='footer-logo'>
				<Image src={logo} alt='logo' />
				<a href='/'>
					<h3>Peluquería</h3>
				</a>
			</div>
			<ContactInfo />
			<hr className='footer-linea' />
			<div className='footer-contact'>
				<SocialMedia />
				<p className='footer-copyrights'>
					&copy; Copyright 2023 By Abel Alejandro Acuña
				</p>
				<p className='footer-horarios'>
					Lunes a Viernes - 9:00 a 13:00 - 17:00 a 21:00
				</p>
			</div>
		</footer>
	);
};
export default Footer;
