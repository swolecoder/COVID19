import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./card.module.css";
function CardComponenet({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              Number of Active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card}  className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              Number of recovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deadths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deadths
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h5">
              Number of deadths cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default CardComponenet;
