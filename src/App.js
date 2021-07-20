import {
  Grid,
  Typography,
  makeStyles,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import "./App.css";
import { videoData } from "./utils/videoData";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "50px 0",
  },
  songList: {
    backgroundColor: "white",
    maxHeight: "47.5vh",
    overflowX: "auto",
  },
  title: {
    margin: "15px 0",
    color: "white",
  },
  heading: {
    textAlign: "center",
    color: "white",
    paddingTop: "50px",
  },
}));

function App() {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  const handleListItemClick = (event, index, src, name) => {
    setSelectedIndex(index);
    setLink(src);
    setTitle(name);
  };

  return (
    <Container>
      <Typography variant="h4" className={classes.heading}>
        React Video Player
      </Typography>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <ReactPlayer url={link} width="100%" controls playing />
            {selectedIndex === 0 ? (
              <Typography variant="h5" className={classes.title}>
                Select a Song from Playlist
              </Typography>
            ) : (
              <Typography variant="h5" className={classes.title}>
                <i className="far fa-play-circle"></i> Now Playing:{" "}
                <strong>
                  {selectedIndex}. {title}
                </strong>
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} lg={6}>
            <List
              aria-label="main mailbox folders"
              className={classes.songList}
            >
              {videoData.map((item) => (
                <ListItem
                  button
                  selected={selectedIndex === item.id}
                  onClick={(event) =>
                    handleListItemClick(event, item.id, item.src, item.name)
                  }
                >
                  <ListItemIcon>
                    <PlayCircleOutlineIcon />
                  </ListItemIcon>
                  <ListItemText>
                    {" "}
                    {item.id}. {item.name}{" "}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
