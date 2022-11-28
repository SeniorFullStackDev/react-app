import { Box, Button } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

function Item ({ item }: any) {
  console.log(item)
  return (
		<Box component="img" src={item.image} width = "100%" height="100%" sx = {{ objectFit: 'cover' }}/>
  )
}

const CustomCarousel = () => {
  const items = [
    {
      image: '/images/img-1.jpg'
    },
    {
      image: '/images/img-2.jpg'
    },
    {
      image: '/images/img-3.jpg'
    },
    {
      image: '/images/img-4.jpg'
    }
  ]

  return (
		<Carousel height={500} animation = "slide" autoPlay = {false} >
			{
				items.map((item, i) => <Item key={i} item={item} />)
			}
		</Carousel>
  )
}

export default CustomCarousel
