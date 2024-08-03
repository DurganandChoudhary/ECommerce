import { Avatar, Box, Grid } from '@mui/material'
import React from 'react'
import {Rating} from '@mui/material'

const ProductReviewCard = () => {
  return (
    <div container spacing={2} gap={3}>

      <Grid item xs={1}>
        <Box>
          <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "9155fd" }}>R</Avatar>
        </Box>
      </Grid>

      <Grid item xs={9}>
        <div className='space-y-2'>
          <div>
            <p className='font-semibold text-lg'>Rahul</p>
            <p className='opacity-70'>May 16, 2024</p>
          </div>
        </div>

        <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
        <p>Nice Product, I love this T-Shirt</p>
      </Grid>

    </div>
  )
}

export default ProductReviewCard
