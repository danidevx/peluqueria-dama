import MyButton from '../Common/MyButton/MyButton';
import './Hero.scss';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-content'>
				<h1>
					More than just <br />
					Beauty Hair
				</h1>
				<h3>Change your look with our talented stylists</h3>
				<MyButton goTo='#contact'>Reservar turno</MyButton>
			</div>
			<p className='hero-horarios'>
				Lunes a Viernes - 9:00 a 13:00 - 17:00 a 21:00
			</p>
		</div>
	);
};
export default Hero;
