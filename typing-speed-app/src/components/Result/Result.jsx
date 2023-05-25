import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleModal,reset } from '../../reducers/wordsSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    outline: 'none',
    p: 4,
};

export default function ResultModal({setStart}) {

    const dispatch = useDispatch();
    const { toggleModal, trueWords, falseWords, trueKeyStrokes, keyStrokes } = useSelector(state => state.word)

    const handleClose = () => {
        setStart(false)
        dispatch(setToggleModal(false))
        dispatch(reset())
    };

    return (
        <div>
            <Modal
                open={toggleModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your Results:
                    </Typography>
                    <Typography sx={{mt:2}}>
                        {trueWords} true words per minute
                    </Typography>
                    <Typography sx={{mt:2}}>
                        {falseWords} wrong words
                    </Typography>
          
                    <Typography>
                        {trueKeyStrokes} true key strokes
                    </Typography>
                    <Typography>
                        {keyStrokes} total key strokes
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}