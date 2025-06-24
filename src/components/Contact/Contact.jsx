import MyTitle from '../Common/MyTitle/MyTitle';
import Form from './components/Form/Form';
import ContactMap from './components/Map/Map';
import './Contact.scss';

const Contact = () => {
	return (
		<section className='contact-section' id='contact'>
			<ContactMap />
			<div className='contact-content'>
				<MyTitle>Services & Prices</MyTitle>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis
					adipisci quae repellendus. Ipsum corporis est tenetur illo illum dicta,
					quas id similique atque doloremque ad fuga nesciunt, consequatur ipsa.
				</p>
				<Form />
			</div>
		</section>
	);
};
export default Contact;
