import { useState } from 'react';
import { Box, Dialog, DialogContent, Typography } from '@mui/material';

import { DialogHeader } from '../DialogHeader/DialogHeader';
import { ThemeCustomizationButton } from '../ThemeCustomizationButton/ThemeCustomizationButton';


export default function OptionsDialog() {
    const [open, setOpen] = useState(false);
 
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                height: '10%',
            }}>
           <ThemeCustomizationButton onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogHeader title="Configurations" onClose={handleClose} />
                <DialogContent dividers>
                  <Typography>
                  Ici va se trouver la configuration pour test
                  </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    );
}
