import React from 'react'
import { Box, Typography, Stack,Modal} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

function UserModal(props) {
  return (
    
    <Modal
        open={props.open}
        onClose={props.onClose}
    >
                <Box 
                    
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: '#d7effc',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        margin:0,
                        padding:1,
                        
                    }}
                >
                        <Stack direction='row-reverse'>
                            <IconButton onClick={props.onClose}>
                                <CancelOutlinedIcon />
                            </IconButton>
                        </Stack>
                        <Typography variant='h4'>Given Data</Typography>
                        <Typography 
                            id="modal-modal-title" variant="h5" component="h2"

                        >
                        Name: {props.data.name}
                        </Typography>
                        <Typography id="modal-modal-mail" variant="h5" component="h2">
                            Email: {props.data.mail}
                        </Typography>
                        <Typography id="modal-modal-number" variant="h5" component="h2">
                            Number: {props.data.number}
                        </Typography>
                        <Typography id="modal-modal-address" variant="h5" component="h2">
                            Address: {props.data.add}
                        </Typography>
                        
                    
                        
                </Box>
    </Modal>
  )
}

export default UserModal