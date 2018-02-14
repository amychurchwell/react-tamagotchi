import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import SleepIcon from 'material-ui-icons/Snooze';
import FeedIcon from 'material-ui-icons/BugReport';
import PlayIcon from 'material-ui-icons/MusicNote';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function Control(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="primary" className={classes.button}>
        <FeedIcon />
      </Button>
      <Button variant="fab" color="secondary" className={classes.button}>
        <PlayIcon />
      </Button>
      <Button variant="fab" className={classes.button}>
        <SleepIcon />
      </Button>
    </div>
  );
}

Control.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Control);
