import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/account/order/${5}')} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img className='w-[5rem] object-cover object-top' src='https://rukminim2.flixcart.com/image/612/612/kyag87k0/shirt/i/6/p/xl-khsh000550-ketch-original-imagajuktdbquvfa.jpeg?q=70' alt='' />

            <div className='ml-5 space-y-2'>
              <p className=''>Men Slim Fit Checkered Cut Away Collar Casual Shirt</p>
              <p className='opacity-50 text-xs font-semibold'>Size: M</p>
              <p className='opacity-50 text-xs font-semibold'>Color: Red</p>
            </div>
          </div>
        </Grid>

        <Grid xs={2}>
          <p>₹399</p>
        </Grid>

        <Grid xs={4}>
          {true && <div>

            <p>
              <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
              <span>
                Delivered on May 10
              </span>
            </p>

            <p className='text-xs'>
              Your Item Has Been Delivered
            </p>

          </div>}

          {false && <p>
            <span>
              Expected Deliverery on May 10
            </span>
          </p>}

        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard
