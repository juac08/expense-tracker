import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        elevation={0}
        className="nav"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(15,23,42,0.06)',
          color: '#0f172a',
        }}
      >
        <Toolbar className="nav__toolbar">
          <Typography variant="h6" className="brand">
            Expense Tracker
          </Typography>
          <Typography variant="body2" className="nav__helper">
            Plan | Log | Stay on budget
          </Typography>
        </Toolbar>
      </AppBar>
      <div id="back-to-top-anchor" className="nav-spacer" />
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          style={{ background: 'var(--accent)', color: '#0b1120' }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
