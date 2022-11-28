import React from 'react'
import { AppBar, Box, Button, Container, Divider, Grid, Toolbar, Typography } from '@mui/material'
import '@fontsource/ultra'
import '@fontsource/slabo-13px'
import CustomCarousel from 'components/CustomCarousel'
import { Directions } from '@mui/icons-material'

const Home = () => {
  const mylocation = 'https://goo.gl/maps/xtSV1AEcbiqvMjuS8'
  //   const mylocation = 'https://goo.gl/maps/cyPtuzzPcPipGaed9'
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
							<Button color="secondary" href={mylocation} startIcon = {<Directions/>} ><Typography component="span">Find Us</Typography></Button>
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
                            Find Us
						</Typography>
					</Button>
				</Box>
				<Box sx = {{ width: { xs: 'auto', sm: '800px' }, m: 'auto', mt: 4 }}>
					<CustomCarousel />
				</Box>

				<Box sx = {{ mt: 16 }}>
					<Divider sx = {{ width: '50px', m: 'auto', borderColor: 'black', borderWidth: '1px' }}/>
					<Typography variant='h6' textAlign="center" sx = {{ mt: 4, fontFamily: "'Ultra', serif" }}>CONTACT US</Typography>
					<Box sx = {{ m: 'auto', width: 'max-content', mt: 4 }}>
						<Box component="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15114.489264698877!2d116.40399189095776!3d39.91132724264659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f052cec352f5b1%3A0x37bce60f8282d2cf!2sMandarin%20Oriental%20Wangfujing%20Beijing!5e0!3m2!1sen!2sus!4v1669663968124!5m2!1sen!2sus" sx = {{ height: '450px', width: { sx: '100%', md: '600px' }, border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Box>
					</Box>
				</Box>
				<Box sx = {{ mt: 4 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md = {6}>
							<Typography variant='h3' sx = {{ fontSize: '1em', fontWeight: 'bold' }}>Address</Typography>
							<Button sx = {{ mt: 4, px: 4 }} color="info" variant="contained">
								<Typography lineHeight={2.5}>
									GET DIRECTION
								</Typography>
							</Button>
							<Typography sx = {{ mt: 4 }}>
								{/* 542 9th Avenue <br/>
								New York, NY 10018<br/>
								USA */}
							</Typography>

						</Grid>

						<Grid item xs={12} md = {6}>
							<Typography variant='h3' sx = {{ fontSize: '1em', fontWeight: 'bold' }}>Business Hours</Typography>
							<Typography sx = {{ mt: 4 }}>
								<Box sx = {{ width: '250px' }}>
									<Grid container spacing={[2, 1]}>
										<Grid item xs = {6}>
											Monday:
										</Grid>
										<Grid item xs = {6}>
											8am-4pm
										</Grid>
										<Grid item xs = {6}>
										Tuesday:
										</Grid>
										<Grid item xs = {6}>
											8am-4pm
										</Grid>
										<Grid item xs = {6}>
											Wednesday:
										</Grid>
										<Grid item xs = {6}>
											8am-4pm
										</Grid>
										<Grid item xs = {6}>
											Thursday:
										</Grid>
										<Grid item xs = {6}>
											8am-4pm
										</Grid>
										<Grid item xs = {6}>
											Friday:
										</Grid>
										<Grid item xs = {6}>
											8am-4pm
										</Grid>
										<Grid item xs = {6}>
											Saturday:
										</Grid>
										<Grid item xs = {6}>
											10am-4pm
										</Grid>
										<Grid item xs = {6}>
											Sunday:
										</Grid>
										<Grid item xs = {6}>
											Closed
										</Grid>
									</Grid>
								</Box>
							</Typography>
						</Grid>
					</Grid>
				</Box>
				<Box sx = {{ height: '100px' }} />
			</Container>
		</div>
  )
}

export default Home
