import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import '@fontsource/ultra'
import '@fontsource/slabo-13px'
import CustomCarousel from 'components/CustomCarousel'

const Home = () => {
  return (
		<div>
			<AppBar position="static">
				<Container>
					<Toolbar>
						{/* <IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
						</IconButton> */}
						<Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Ultra', serif" }} color="secondary">
                            Hideaway Coffee
						</Typography>
						<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
							<Button color="secondary" ><Typography component="span">About Us</Typography></Button>
							<Button color="secondary"><Typography component="span">Find Us</Typography></Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Container>
				<Box sx = {{ textAlign: 'center', fontFamily: "'Slabo 13px', serif" }}>
					<Typography variant="h3" color="secondary" textAlign="center" sx = {{ mt: 8, fontFamily: "'Ultra', serif" }}>Hideaway Coffee</Typography>
					<Typography marginTop={4}>Cafe in London</Typography>
					<Button sx = {{ mt: 4, px: 4 }} color="info" variant="contained">
						<Typography lineHeight={2.5}>
                            Contact Us
						</Typography>
					</Button>
				</Box>
				<Box sx = {{ width: { xs: 'auto', sm: '800px' }, m: 'auto', mt: 4 }}>
					<CustomCarousel />
				</Box>
			</Container>

		</div>
  )
}

export default Home
