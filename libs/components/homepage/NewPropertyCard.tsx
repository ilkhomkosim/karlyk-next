import React from 'react';
import { Stack, Box, Divider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Property } from '../../types/property/property';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { REACT_APP_API_URL } from '../../config';
import { useRouter } from 'next/router';
import { useReactiveVar } from '@apollo/client';
import { userVar } from '../../../apollo/store';

interface NewPropertyCardProps {
	property: Property;
	likePropertyHandler: any;
}

const NewPropertyCard = (props: NewPropertyCardProps) => {
	const { property, likePropertyHandler } = props;
	const device = useDeviceDetect();
	const router = useRouter();
	const user = useReactiveVar(userVar);

	/** HANDLERS **/
	const pushDetailhandler = async (propertyId: string) => {
		console.log("ID:", propertyId);
		await router.push({pathname: '/property/detail', query: {id: propertyId}})
	}

	if (device === 'mobile') {
		return (
			<Stack className="new-card-box" key={property._id}>
				<Box
					component={'div'}
					className={'card-img'}
					style={{ backgroundImage: `url(${REACT_APP_API_URL}/${property?.propertyImages[0]})` }}
					onClick={() => {pushDetailhandler(property._id)}}
				>
				</Box>
				<Box component={'div'} className={'info'}>
					<strong className={'title'} onClick={() => {
						pushDetailhandler(property._id)
					}}>{property.propertyTitle}</strong>
					<p className={'desc'}>{property.propertyDesc ?? 'no description'}</p>
					<div className={'options'}>
						<div>
							{/* <img src="/img/icons/bed.svg" alt="" /> */}
							<span>{property.propertyBeds} pc</span>
						</div>
						<div>
							{/* <img src="/img/icons/room.svg" alt="" /> */}
							<span>{property.propertyRooms} ml/g</span>
						</div>
						<div>
							{/* <img src="/img/icons/expand.svg" alt="" /> */}
							<span>{property.propertySquare} pcs left</span>
						</div>
					</div>
					<Divider sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
					<div>${property.propertyPrice}</div>
						{/* <p>
							{property.propertyRent ? 'Rent' : ''} {property.propertyRent && property.propertyBarter && '/'}{' '}
							{property.propertyBarter ? 'Barter' : ''}
						</p> */}
						<div className="view-like-box">
							<IconButton color={'default'}>
								<RemoveRedEyeIcon />
							</IconButton>
							<Typography className="view-cnt">{property?.propertyViews}</Typography>
							<IconButton color={'default'} onClick={() => likePropertyHandler(user, property?._id)}>
								{property?.meLiked && property?.meLiked[0]?.myFavorite ? (
									<FavoriteIcon style={{ color: 'red' }} />
								) : (
									<FavoriteIcon />
								)}
							</IconButton>
							<Typography className="view-cnt">{property?.propertyLikes}</Typography>
						</div>
					</div>
				</Box>
			</Stack>
		);
	} else {
		return (
			<Stack className="new-card-box" key={property._id}>
				<Box
					component={'div'}
					className={'card-img'}
					style={{ backgroundImage: `url(${REACT_APP_API_URL}/${property?.propertyImages[0]})` }}
					onClick={() => {
						pushDetailhandler(property._id)
					}}
				>
				</Box>
				<Box component={'div'} className={'info'}>
					<strong className={'title'}
					onClick={() => {
						pushDetailhandler(property._id)
					}}
					>{property.propertyTitle}</strong>
					<p className={'desc'}>{property.propertyDesc ?? 'no description'}</p>
					<div className={'options'}>
						<div>
							{/* <img src="/img/icons/bed.svg" alt="" /> */}
							<span>{property.propertyBeds} pc</span>
						</div>
						<div>
							{/* <img src="/img/icons/room.svg" alt="" /> */}
							<span>{property.propertyRooms} ml/g</span>
						</div>
						<div>
							{/* <img src="/img/icons/expand.svg" alt="" /> */}
							<span>{property.propertySquare} pcs left</span>
						</div>
					</div>
					<Divider sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
					<div>${property.propertyPrice}</div>
						{/* <p>
							{property.propertyRent ? 'Rent' : ''} {property.propertyRent && property.propertyBarter && '/'}{' '}
							{property.propertyBarter ? 'Barter' : ''}
						</p> */}
						<div className="view-like-box">
							<IconButton color={'default'}>
								<RemoveRedEyeIcon />
							</IconButton>
							<Typography className="view-cnt">{property?.propertyViews}</Typography>
							<IconButton color={'default'} onClick={() => likePropertyHandler(user, property?._id)}>
								{property?.meLiked && property?.meLiked[0]?.myFavorite ? (
									<FavoriteIcon style={{ color: 'red' }} />
								) : (
									<FavoriteIcon />
								)}
							</IconButton>
							<Typography className="view-cnt">{property?.propertyLikes}</Typography>
						</div>
					</div>
				</Box>
			</Stack>
		);
	}
};

export default NewPropertyCard;
