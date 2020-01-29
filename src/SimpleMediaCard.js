import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import joints from './joints.jpeg';

const styles = {
  root: {
    marginTop: 30,
    marginBottom: 30,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={joints}
          title="Enflamed Joints"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Joints
          </Typography>
          <Typography component="p">
            As people age, joints seem to be one of the first things noticed because joints start complaining. They begin to feel everything ever done to them. But there are things that could possilby help ease them.
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button dense color="primary">
            Share
          </Button> */}
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
