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

interface TopPropertyCardProps {
	property: Property;
	likePropertyHandler: any;
}

const TopPropertyCard = (props: TopPropertyCardProps) => {
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
			<Stack className="top-card-box">
				<Box
					component={'div'}
					className={'card-img'}
					style={{ backgroundImage: `url(${REACT_APP_API_URL}/${property?.propertyImages[0]})` }}
					onClick={() => {pushDetailhandler(property._id)}}
				>
					<div>${property?.propertyPrice}</div>
				</Box>
				<Box component={'div'} className={'info'}>
					<strong className={'title'}					onClick={() => {pushDetailhandler(property._id)}}
					>{property?.propertyTitle}</strong>
					<p className={'desc'}>{property?.propertyLocation}</p>
					<div className={'options'}>
						<div>
							<span>{property?.propertyBeds} pc</span>
						</div>
						<div>
							<span>{property?.propertySizes} ml/g</span>
						</div>
						<div>
							<span>{property?.propertySquare} pcs left</span>
						</div>
					</div>
					<Divider sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
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
			<Stack className="top-card-box">
				<Box
					component={'div'}
					className={'card-img'}
					style={{ backgroundImage: `url(${REACT_APP_API_URL}/${property?.propertyImages[0]})` }}
					onClick={() => {pushDetailhandler(property._id)}}
				>
					<div>${property?.propertyPrice}</div>
				</Box>
				<Box component={'div'} className={'info'}>
					<strong className={'title'} 					onClick={() => {pushDetailhandler(property._id)}}
					>{property?.propertyTitle}</strong>
					<p className={'desc'}>{property?.propertyLocation}</p>
					<div className={'options'}>
						<div>
							<span>{property?.propertyBeds} pc</span>
						</div>
						<div>
							<span>{property?.propertySizes} ml/g</span>
						</div>
						<div>
							<span>{property?.propertySquare} pcs left</span>
						</div>
					</div>
					<Divider className={'devider'} sx={{ mt: '15px', mb: '17px' }} />
					<div className={'bott'}>
						<div className="view-like-box">
							<IconButton color={'default'}>
								<RemoveRedEyeIcon />
							</IconButton>
							<Typography className="view-cnt">{property?.propertyViews}</Typography>
							<IconButton color={'default'} onClick={() => likePropertyHandler(user, property?._id)} >
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

export default TopPropertyCard;
