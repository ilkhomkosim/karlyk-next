import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const ChooseUs = ( ) => {

		return (
			<Stack className={'choose-us'}>
				<Stack className={'container'}>
                <div className={'choose-img'}>
                </div>
					<div className={'choose-info'}>
                    <Stack>
                    <Box component={'div'} className={'right'}>
                    </Box>
						<Box component={'div'} className={'left'}>
							<span>Why Choose Us</span>
							<p>“We are Karlyk always want the best for you dear ones and offer it to you. The most important thing for us is your beauty and your trust in us”</p>
						</Box>
                    </Stack>
                    <Stack className={'main-adv'}>
                    <div className={'advice'}>
                        <div className={'advice-txt'}><CheckCircleOutlineIcon sx={{ marginLeft: '17px', marginRight: '17px' }}/><div className={'txt'}>Natural Products</div></div>
                        <div className={'advice-txt'}><CheckCircleOutlineIcon sx={{ marginLeft: '17px', marginRight: '17px' }}/><div className={'txt'}>Best Prices</div></div>
                        <div className={'advice-txt'}><CheckCircleOutlineIcon sx={{ marginLeft: '17px', marginRight: '17px' }}/><div className={'txt'}>Large assortment</div></div>
                    </div>
                    <Stack className={'content'}>
                        
                    </Stack>
                    </Stack>
					</div>
					</Stack>
				</Stack>
		);
    }



export default ChooseUs;