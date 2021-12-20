import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { IonImg, IonRouterLink } from "@ionic/react";
import serviceEcobin from "../serviceEcobin";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      //   color: theme.palette.primary.light,
    },
    titleBar: {
      //   background:
      //     'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  })
);

const SingleLineGridList2: React.FunctionComponent = () => {
  const classes = useStyles();
  const [itemsArray, setItems] = React.useState([]);
  React.useEffect(() => {
    serviceEcobin.sendGetRequestAllCentros().then((data) => setItems(data));
  }, []);
  if(itemsArray !== undefined) {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {itemsArray.map((item, i) => (
            <GridListTile key={item["nombre"]}>
              <IonRouterLink routerLink={`/detalle/centros/${item["id"]}`}>
                <IonImg src={`assets/img/centros/${item["nombre"]}.jpg`}></IonImg>
                <GridListTileBar
                  title={item["nombre"]}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </IonRouterLink>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
  else
  return (<div/>);
};

export default SingleLineGridList2;
