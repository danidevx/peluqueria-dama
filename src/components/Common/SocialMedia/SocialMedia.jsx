'use client';

import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';
import ReactWhatsapp from 'react-whatsapp';
import './SocialMedia.scss';

const SocialMedia = () => {
	return (
		<div className='social'>
			<a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
				<FaFacebookF />
			</a>
			<a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
				<FaInstagram />
			</a>
			<a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
				<FaTwitter />
			</a>
			<ReactWhatsapp
				number={process.env.NEXT_PUBLIC_WHATSAPP_KEY}
				message='Hello World!!!'
				element={'a'}>
				<FaWhatsapp />
			</ReactWhatsapp>
		</div>
	);
};
export default SocialMedia;
