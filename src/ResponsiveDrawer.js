import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import { navBar } from './navBar';
// import Routes from "./Routes";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
// import AilmentPage from './AilmentPage';

// import GuttersGrid from './GuttersGrid';
import FullWidthGrid from './FullWidthGrid';
// import InteractiveGrid from './InteractiveGrid';
// import SimpleMediaCard from './SimpleMediaCard';
import categories from './categories';
// import ReviewCard from './ReviewCard';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    // position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    zIndex: 10,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
      marginBottom: '-5000px',
      paddingBottom: '5000px',
      zIndex: 1,
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };


  render() {
    const myStyle = {
      border: "1px Solid Gray",
      listStyleType: "none",
      boxShadow: "2px 2px grey",
      marginBottom: "4px",
      padding: "2em",
      lineHeight: "1.5em",
      gridTemplateLayout: "repeat(2, auto)"

    }
    const { classes } = this.props;

    const drawer = (
      <div className={classes.List}>
        <div className={classes.drawerHeader} />
        <h3>What ails you?</h3>
        <Divider />
        <List>{navBar}</List>
        {/* <Divider />
        <List>{othernavBar}</List>
        <Divider />
        <List>{navBar}</List>
        <Divider />
        <List>{othernavBar}</List>
        <Divider />
        <List>{navBar}</List>
        <Divider />
        <List>{othernavBar}</List>
        <Divider />
        <List>{navBar}</List>
        <Divider />
        <List>{othernavBar}</List>
        <Divider />
        <List>{navBar}</List>
        <Divider />
        <List>{othernavBar}</List> */}
      </div>
    );

    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="contrast"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
                <Typography type="title" color="inherit" noWrap>
                  Comfort Food
              </Typography>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                type="temporary"
                open={this.state.mobileOpen}
                classes={{
                  paper: classes.drawerPaper,
                }}
                onRequestClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden mdDown implementation="css">
              <Drawer
                type="permanent"
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <main className={classes.content}>
              <FullWidthGrid />
              {/* <Routes /> */}
              <ul>
                {categories.map(category => <li
                  style={myStyle}
                >
                  <Link to={`/${category.id}`} >
                    <h2>{category.title}</h2>

                    <img src={category.image} alt={category.imageAltText} style={{ align: "right" }} />
                    <h4>Helpful foods</h4>
                    {category.foods.join(", ")}

                  </Link>
                </li>)

                }
              </ul>

              {/* <GuttersGrid /> */}
              {/* <InteractiveGrid /> */}
              {/* <SimpleMediaCard /> */}
              {/* <ReviewCard /> */}
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResponsiveDrawer);
