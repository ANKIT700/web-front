import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";
const styles = (theme) => ({
  // root: {
  //   ...theme.mixins.gutters(),
  //   paddingTop: theme.spacing.unit * 2,
  //   paddingBottom: theme.spacing.unit * 2,
  // },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

function Footer(props) {
  const { classes } = props;

  const getCurrentYear = () => {
    var d = new Date();
    var n = d.getFullYear();
    return n;
  };
  return (
    <div class="footer">
      <Typography component="p">
        <div className={classes.root}>
          <span style={{ display: "inline-block" }}>
            {" "}
            <ul>
              <li>
                <a>Cookie Consent</a>
              </li>
              <li>
                <a>Privacy Policy </a>
              </li>
              <li>
                <a>Sitemap</a>
              </li>
              <li>
                <a>Support </a>
              </li>
            </ul>
          </span>
          <p>
            {" "}
            Come Say Hello! Ankit Parashar, VPO Ghanari,Tehsil Ghanari(Distt.
            UNA),Himachal Pradesh(PIN-177212) (701) 888-8060
          </p>
          ©{getCurrentYear()} All right reserved By signing up you agree to our{" "}
          <b>Privacy Policy</b>.<br />
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </div>
      </Typography>{" "}
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
