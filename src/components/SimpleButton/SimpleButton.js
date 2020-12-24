import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { red, green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleButton({ onClick, style = {}, color = 'primary', variant = 'contained', size = 'medium', value }) {
  const theme = createMuiTheme({
    palette: {
      primary: red,
      secondary: green,
      error: red
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        style={style}
      >
        {value}
      </Button>
    </ThemeProvider>
  );
}
