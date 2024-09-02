// import React from 'react'

import * as React from 'react';
import { ImageList, ImageListItem, IconButton, Box } from '@mui/material';
import { Share } from '@mui/icons-material';
import { Button } from 'react-bootstrap';
import PendingIcon from '@mui/icons-material/Pending';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import EmojiPicker from 'emoji-picker-react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import { InputGroup, FormControl } from 'react-bootstrap';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  maxWidth: '1200px',
  height: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
  display: 'flex',
  borderRadius: '12px',
  overflow: 'hidden',
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];
function Home() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [openIcon, setOpenIcon] = React.useState(false);
  const handleOpenIcon = () => setOpenIcon(true);
  const handleCloseIcon = () => setOpenI(false);
  return (
    <>
      <div>
      <ImageList sx={{ width: '100%', height: 'auto' }} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
            onClick={() => handleOpen(item.img)}
          >
            <img
              srcSet={`${item.img}?w=300&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=300&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: '100%', display: 'block' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 1,
                opacity: 0,
                transition: 'opacity 0.3s',
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional: to dim the image
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              {/* Top right button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mb: 'auto',
                }}
              >
                <Button
                  className="btn btn-danger"
                  style={{ borderRadius: '20px', minWidth: '60px', padding: '5px 10px' }}
                >
                  Save
                </Button>
              </Box>
              
              {/* Bottom right buttons */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  mt: 'auto',
                  gap: 1,
                }}
              >
                <IconButton sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'white' } }}>
                  <Share />
                </IconButton>
                <IconButton sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'white' } }}>
                  <PendingIcon />
                </IconButton>
              </Box>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Left half: Image */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
              />
            )}
          </Box>
          
          {/* Right half: Text */}
          <Box
            sx={{
              flex: 1,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Image Title
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <InputGroup>
      <FormControl
        type="text"
        placeholder="Add a Comment"
      />
      <InputGroup.Text>
        <IconButton onClick={handleOpenIcon}>
          <EmojiEmotionsIcon />
        </IconButton>
        
      </InputGroup.Text>
    </InputGroup>
            </Typography>
          </Box>
        </Box>
      </Modal>

      </div>
    </>
  )
}

export default Home