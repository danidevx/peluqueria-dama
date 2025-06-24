'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

const ContactMap = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});
	const center = useMemo(() => ({ lat: -27.4993239, lng: -64.8674232 }), []);

	if (!isLoaded) return <div>Loading...</div>;

	return (
		<GoogleMap zoom={15} center={center} mapContainerClassName='contact-map'>
			<Marker position={center} />
		</GoogleMap>
	);
};
export default ContactMap;
