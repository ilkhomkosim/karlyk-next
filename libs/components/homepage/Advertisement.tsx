import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Container, Stack } from '@mui/material';

const Advertisement = () => {
	const device = useDeviceDetect();

	if (device == 'mobile') {
		return (
			<Stack className={'video-frame'}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				>
					<source src="/video/video.mp4" type="video/mp4" />
				</video>
			</Stack>
		);
	} else {
		return (
			<Container className={'video-main'}>
							<Stack className={'video-frame'}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				>
					<source src="/video/video.mp4" type="video/mp4" />
				</video>
			</Stack>
							<Stack className={'video-frame2'}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				>
					<source src="/video/video2.mp4" type="video/mp4" />
				</video>
			</Stack>
							<Stack className={'video-frame3'}>
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="auto"
					style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				>
					<source src="/video/video3.mp4" type="video/mp4" />
				</video>
			</Stack>
			</Container>
		);
	}
};

export default Advertisement;
