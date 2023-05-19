import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function MessageContainer({openMessage,message}) {
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal,  } = state;

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openMessage}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
}