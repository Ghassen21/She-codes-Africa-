import React from "react";
import AppBar from "@material-ui/core/AppBar";


import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "bootstrap/dist/css/bootstrap.min.css";

import {Link } from "react-router-dom";

//////
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBRow,
  MDBView,
  MDBMask,
  MDBCardBody,
  MDBCard,
  MDBCol,
  MDBBtn,
} from "mdbreact";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

var dummy = [
  {
    img:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    title: "My blog",
    author: "Gaston",
    postedAt: "19/06/2021"
  },
  {
    img:
      "https://moodle.univ-tln.fr/pluginfile.php/299525/mod_resource/content/1/hibiscus.png",
    title: "your blog",
    author: "Gahssen",
    postedAt: "03/02/2021"
  },
  {
    img:
      "https://img.over-blog-kiwi.com/1/01/18/07/20170325/ob_2181b1_1fc653b12a39c2c165427419416a1693.jpg",
    title: "no ones blog",
    author: "Ayed",
    postedAt: "02/11/2021"
  },
  {
    img:
      "https://lh3.googleusercontent.com/proxy/f6ecnaVlwCUSPArJf42sbphp3ZCn9kS1HPmSZwbmUolMYIb1b8qo8e7qtncReX5moXQxoOBFub2rPzPQtIjBuvUnW_FEvO39evfidtfoy_Ns9xJasoatc5kPlA",
    title: "bullshit blog",
    author: "3ak3ek",
    postedAt: "01/02/2021"
  },
  {
    img:
      "https://lh3.googleusercontent.com/proxy/8_gY6QnMdOIfg93qeoY4OUmPOb5hT9gxzNceoVmoKfqf00H-ORTFIDkyBtxAdWB0b7aoz-59lDbPgl6O__JdGTBJJaVfSXdRi-hITKNNN4vmFoMkROOVq3IJVaI",
    title: "yblogi",
    author: "7ala m3ak",
    postedAt: "10/10/2021"
  },
  {
    img:
      "https://www.roumoiseine.fr/wp-content/uploads/2018/08/comment-fabriquer-un-attrape-r%C3%AAve-tutoriel-et-exemples-de-capteurs-de-reves-tr%C3%A8s-jolis-e1478166224936.jpg",
    title: "some blog",
    author: "barouet",
    postedAt: "25/12/2021"
  },
  {
    img:
      "https://cdn.clc2l.com/c/thumbnail280/t/g/o/google-photos-75BNHB.png",
    title: "bblog",
    author: "7Dahyouta",
    postedAt: "01/08/2021"
  },
  {
    img:
      "https://i.pinimg.com/236x/b1/33/6e/b1336e16c090836d653669b17b671644.jpg",
    title: "blag",
    author: "Dhaw",
    postedAt: "30/05/2021"
  },
  {
    img:
      "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "bloget",
    author: "Sabri0o",
    postedAt: "19/02/2021"
  },
  {
    img:
      "https://image.shutterstock.com/image-illustration/red-dragon-portrait-digital-painting-260nw-1543370009.jpg",
    title: "bbblog",
    author: "Number 10",
    postedAt: "20/02/2021"
  },
];

export default function Blogs() {
  const classes = useStyles(dummy);

  const readArticle = (e) => {
    console.log(e);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative"></AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}></div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {dummy.map((card) => (
              <Grid item key={card.author}>
    
                <MDBCard className="my-5 px-5 pb-5">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="5" xl="4">
                        <MDBView
                          hover
                          className="rounded z-depth-1-half mb-lg-0 mb-4"
                        >
                          <img className="img-fluid" src={card.img} alt=""  />
                          <a href="#!">
                            <MDBMask overlay="white-slight" />
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                          <strong>{card.title}</strong>
                        </h3>
                        <p className="dark-grey-text">
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est,
                          omnis dolor repellendus et aut officiis debitis cum
                          soluta nobis est eligendi placeat facere aut rerum.
                        </p>
                        <p>
                          by{" "}
                          <a href="#!" className="font-weight-bold">
                          {card.author}
                          </a>
                          , {card.postedAt}
                        </p>
                        <Link to={`/blogs/${card.author}`}>
                          <MDBBtn color="primary" size="md">
                            Read More
                          </MDBBtn>
                        </Link>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}