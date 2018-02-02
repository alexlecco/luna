/**
Layout component
**/

"use strict";

import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import * as globalActions from "../actions/global_actions";
import AppHeader from "../components/header/AppHeader";
import Modal from "material-ui/Modal";
import Divider from "material-ui/Divider";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import PackagesContainer from "./Packages";
import { layoutStyles } from "./styles";

class Layout extends React.Component {
  constructor() {
    super();
    this.handleModal = this.handleModal.bind(this);
  }

  getModalStyles() {
    function rand() {
      return Math.floor(Math.random() * 20) - 10;
    }

    const top = 50 + rand();
    const left = 50 + rand();

    return {
      position: "absolute",
      width: 8 * 50,
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%)`,
      border: "1px solid #e5e5e5",
      backgroundColor: "#fff",
      boxShadow: "0 5px 15px rgba(0, 0, 0, .5)",
      padding: 8 * 4
    };
  }

  handleModal() {}

  componentDidMount() {
    //get Settings
  }

  render() {
    const { classes, theme, menuOpen, handleDrawerOpen, handleDrawerClose } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppHeader
            title="Luna"
            theme={theme}
            menuOpen={menuOpen}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
          />
          <main className={classes.content}>
            <Grid container justify="space-between">
              <Grid item xs={12}>
                <PackagesContainer />
              </Grid>
            </Grid>
          </main>
        </div>
        <div className="app-modal">
          <Modal
            aria-labelledby="settings"
            aria-describedby="set npm settings"
            open={true}
            onClose={this.handleModal}
          >
            <div style={this.getModalStyles()} className={classes.paper}>
              <form className={classes.container} noValidate autoComplete="off">
                <h3 className={classes.heading}>Settings</h3>
                <Divider />
                <TextField
                  id="npm-registry"
                  label="Registry"
                  className={classes.textField}
                  value="https://registry.npmjs.org/"
                  margin="normal"
                />
                <br />
                <TextField
                  id="npm-proxy"
                  label="Proxy"
                  className={classes.textField}
                  value="http://proxy.company.com:8989"
                  margin="normal"
                />
                <Button className={classes.button}>Save</Button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuOpen: state.global.menuOpen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDrawerOpen: () => dispatch(globalActions.handleDrawer(true)),
    handleDrawerClose: () => dispatch(globalActions.handleDrawer(false))
  };
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default compose(
  withStyles(layoutStyles, { withTheme: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(Layout);
