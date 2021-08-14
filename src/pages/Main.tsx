import { Button, Container, Grid, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from 'axios';


axios.get('/Main')
.then(function (response){
  console.log(response);
})
.catch(function (error){
  console.log(error);
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="시작 시간"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="종료 시간"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button variant="contained" color="primary" href="#contained-buttons">
          마니또 Start!!
        </Button>
      </Grid>
    </Container>
  );
}

export default Main;


