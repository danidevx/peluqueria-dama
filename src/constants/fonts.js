import { Great_Vibes, Martel, Poppins } from 'next/font/google';

export const GREAT_VIBES = Great_Vibes({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-title',
	display: 'block',
});

export const POPPINS = Poppins({
	weight: ['400', '500', '700'],
	subsets: ['latin'],
	variable: '--font-subtitle',
	display: 'block',
});

export const MARTEL = Martel({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--font-primary',
	display: 'block',
});
