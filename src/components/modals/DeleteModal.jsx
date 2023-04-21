import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../redux/slice/postSlice';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function DeleteModal  ({openModel, text , setOpenModel, deleteId})  {
    const dispatch = useDispatch()
    const handleClose = () => setOpenModel(false);
    const handleSucess=async ()=>{
        const {data}= await axios.delete(`/posts/delete/${deleteId}`)
        dispatch(fetchPosts());
        setOpenModel(false);
    }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModel}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModel}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Confirmation
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 ,mb: 2 }}>
             Are you sure you want to delete this {text}?
            </Typography>

            <Button color='error' onClick={handleSucess}>Yes</Button> <Button onClick={handleClose} >No</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
