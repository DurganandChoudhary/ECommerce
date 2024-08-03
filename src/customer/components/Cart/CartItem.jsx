import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';

const CartItem = () => {

    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src='https://manyavar.scene7.com/is/image/manyavar/8905100857337.4089_29-03-2023-17-38:283x395' alt='' />
                </div>

                <div className='ml-5 space-y-1'>
                    <p className='font semi-bold'>Maroon Chikankari Kurta Set</p>
                    <p className='opacity-70'>Size: L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Manyavar</p>

                    <div className='flex space-x-5 item-center text-gray-900 pt-6'>
                        <p className='font-semibold'> ₹1,999</p>
                        <p className='opacity-50 line-through'>₹3,999</p>
                        <p className='text-green-600 font-semibold'>81% off</p>
                    </div>
                </div>
            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{ color: "RGB(145 85 253)" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button SX={{ COLOR: "RGB(145 85 253)" }}>remove</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem
