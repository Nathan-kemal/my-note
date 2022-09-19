import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import {Stack} from '@mui/material';
import {updateRequest} from '../service/request';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
};

export default function CustomModal({
    text,
    state,
    handleCloseModal,
    handleUpdateCloseModal,
    id,
}) {
    const [editText, setEditText] = React.useState(text);

    async function update_note() {
        if (text === editText) {
            console.log('The same');
        } else {
            await updateRequest('/api/note/crud', id, editText);
            handleUpdateCloseModal();
        }
    }
    return (
        <div>
            <Modal
                open={state}
                onClose={handleCloseModal}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Card sx={style}>
                    <Stack>
                        <Typography
                            id='modal-modal-title'
                            variant='h6'
                            component='h2'
                        >
                            Update Note
                        </Typography>

                        <InputBase
                            multiline={true}
                            sx={{ml: 1, flex: 1, padding: 4}}
                            placeholder='update Notes'
                            inputProps={{'aria-label': 'Take Notes'}}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />

                        <Box>
                            <Button
                                variant='outlined'
                                sx={{marginRight: '10px'}}
                                onClick={handleCloseModal}
                            >
                                Cancel
                            </Button>
                            <Button
                                color='secondary'
                                variant='outlined'
                                onClick={update_note}
                            >
                                Update
                            </Button>
                        </Box>
                    </Stack>
                </Card>
            </Modal>
        </div>
    );
}
