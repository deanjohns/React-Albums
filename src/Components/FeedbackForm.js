import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const FeedbackForm = (props) => {
  const { onClose, open = false, id, submitFeedback } = props;

  const [feedback, setFeedback] = React.useState('');
  const feedbackType = 'General';

  const handleClose = () => {
    setFeedback('');
    onClose();
  };

  const handleSubmit = () => {
    if (feedback !== '') {
      submitFeedback({
        entityId: id,
        feedbackType: feedbackType,
        feedback: feedback,
      });
      setFeedback('');
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Feedback Form</DialogTitle>
      <Grid sx={{ padding: '16px 24px' }}>
        <Box sx={{ display: 'flex', marginBottom: '10px' }}>
          <Typography
            sx={{ marginRight: '10px', paddingTop: '7px', width: '120px' }}
          >
            Entry ID
          </Typography>
          <TextField className='input-field' value={id} disabled />
        </Box>
        <Box sx={{ display: 'flex', marginBottom: '10px' }}>
          <Typography
            sx={{ marginRight: '10px', paddingTop: '7px', width: '120px' }}
          >
            Feedback Type
          </Typography>
          <TextField className='input-field' value={feedbackType} disabled />
        </Box>
        <Box sx={{ display: 'flex', marginBottom: '10px' }}>
          <Typography
            sx={{ marginRight: '10px', paddingTop: '7px', width: '120px' }}
          >
            Feedback
          </Typography>
          <TextField
            id='feedback'
            data-testid='feedback'
            className='input-field input-fields'
            value={feedback}
            placeholder='Feedback'
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Box>
      </Grid>
      <Button
        id='submitButton'
        data-testid='submitButton'
        variant='contained'
        className='feedback-submit-button'
        onClick={handleSubmit}
        disabled={feedback === ''}
      >
        Submit
      </Button>
    </Dialog>
  );
};

export default FeedbackForm;
