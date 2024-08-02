import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Property } from '../../types/property/property';
import { PropertiesInquiry } from '../../types/property/property.input';
import NewPropertyCard from './NewPropertyCard';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PROPERTIES, GET_PROPERTY } from '../../../apollo/user/query';
import { T } from '../../types/common';
import { LIKE_TARGET_PROPERTY } from '../../../apollo/user/mutation';
import { sweetMixinErrorAlert, sweetTopSmallSuccessAlert } from '../../sweetAlert';
import { Message } from '../../enums/common.enum';

interface NewPropertiesProps {
	initialInput: PropertiesInquiry;
}

const NewProperties = (props: NewPropertiesProps) => {
	const { initialInput } = props;
	const device = useDeviceDetect();
	const [newProperties, setNewProperties] = useState<Property[]>([]);

	/** APOLLO REQUESTS **/
	const [likeTargetproperty] = useMutation(LIKE_TARGET_PROPERTY);
	
	const {
		loading: getPropertiesLoading,
		data: getPropertiesData,
		error: getPropertiesError,
		refetch: getPropertiesRefetch,
	} = useQuery(GET_PROPERTIES, {
		fetchPolicy: 'cache-and-network', 
		variables: { input: initialInput },
		notifyOnNetworkStatusChange: true,
		onCompleted: (data: T) => {
			setNewProperties(data?.getProperties?.list);
		},
	});

	/** HANDLERS **/
	const likePropertyHandler = async (user: T, id: string) => {
		try {
			if (!id) return;
			if (!user._id) throw new Error(Message.NOT_AUTHENTICATED);
			await likeTargetproperty({ variables: { input: id } });
			await getPropertiesRefetch({ input: initialInput });
			await sweetTopSmallSuccessAlert('success', 800);
		} catch (err: any) {
			console.log('ERROR,likePropertyHandler:', err.message);
			sweetMixinErrorAlert(err.message).then();
		}
	};

	if (newProperties) console.log('newProperties:', newProperties);
	if (!newProperties) return null;

	if (device === 'mobile') {
		return (
			<Stack className={'new-properties'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<span>Our New Collection</span>
					</Stack>
					<Stack className={'card-box'}>
						{newProperties.length === 0 ? (
							<Box component={'div'} className={'empty-list'}>
								New Collection Is Empty
							</Box>
						) : (
							<Swiper
								className={'new-property-swiper'}
								slidesPerView={'auto'}
								centeredSlides={true}
								spaceBetween={15}
								modules={[Autoplay]}
							>
								{newProperties.map((property: Property) => {
									return (
										<SwiperSlide key={property._id} className={'new-property-slide'}>
											<NewPropertyCard property={property} likePropertyHandler={likePropertyHandler} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						)}
					</Stack>
				</Stack>
			</Stack>
		);
	} else {
		return (
			<Stack className={'new-properties'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span>Our New Collection</span>
							<p>“The best color in the world is the one that looks good on you” – Coco Chanel</p>
						</Box>
						<Box component={'div'} className={'right'}>
							<div className={'pagination-box'}>
								<WestIcon className={'swiper-new-prev'} />
								<div className={'swiper-new-pagination'}></div>
								<EastIcon className={'swiper-new-next'} />
							</div>
						</Box>
					</Stack>
					<Stack className={'card-box'}>
						{newProperties.length === 0 ? (
							<Box component={'div'} className={'empty-list'}>
								New Collection Is Empty
							</Box>
						) : (
							<Swiper
								className={'new-property-swiper'}
								slidesPerView={'auto'}
								spaceBetween={15}
								modules={[Autoplay, Navigation, Pagination]}
								navigation={{
									nextEl: '.swiper-new-next',
									prevEl: '.swiper-new-prev',
								}}
								pagination={{
									el: '.swiper-new-pagination',
								}}
							>
								{newProperties.map((property: Property) => {
									return (
										<SwiperSlide key={property._id} className={'new-property-slide'}>
											<NewPropertyCard property={property} likePropertyHandler={likePropertyHandler} />
										</SwiperSlide>
									);
								})}
							</Swiper>
						)}
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

NewProperties.defaultProps = {
	initialInput: {
		page: 1,
		limit: 8,
		sort: 'createdAt',
		direction: 'DESC',
		search: {},
	},
};

export default NewProperties;
