import React, { useState } from 'react';
import { Stack, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const ChooseUs = ( ) => {

		return (
			<Stack className={'choose-us'}>
				<Stack className={'container'}>
                <Stack className={'choose-img'}>
                </Stack>
					<Stack className={'choose-info'}>
                    <Stack>
                    <Box component={'div'} className={'right'}>
                    </Box>
						<Box component={'div'} className={'left'}>
							<span>Why Choose Us</span>
							<p>“We are Karlyk always want the best for you dear ones and offer it to you. The most important thing for us is your beauty and your trust in us”</p>
						</Box>
                    </Stack>
                    <Stack className={'main-adv'}>
                    <Stack className={'advice'}>
                        <Stack className={'advice-txt'}><Box className={'check'}><CheckCircleOutlineIcon/></Box><Box className={'txt'}>Natural Products</Box></Stack>
                        <Stack className={'advice-txt'}><Box className={'check'}><CheckCircleOutlineIcon/></Box><Box className={'txt'}>Best Prices</Box></Stack>
                        <Stack className={'advice-txt'}><Box className={'check'}><CheckCircleOutlineIcon/></Box><Box className={'txt'}>Large assortment</Box></Stack>
                    </Stack>
                    <Stack className={'content'}>
                        
                    </Stack>
                    </Stack>
					</Stack>
					</Stack>
				</Stack>
		);
    }



export default ChooseUs;