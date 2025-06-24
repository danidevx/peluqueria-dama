import Image from 'next/image';
import imgBanner from '../../../public/images/banner.webp';
import './Banner.scss';

const Banner = () => {
	return (
		<section className='banner-section'>
			<Image src={imgBanner} alt='banner' />
			<div className='banner-content'>
				<p className='banner-title'>More than just Beauty Hair</p>
				<p className='banner-subtitle'>
					Change your look with our talented stylists
				</p>
			</div>
		</section>
	);
};
export default Banner;
