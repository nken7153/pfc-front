import React from "react";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
// MUIコンポーネント
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import {
  DirectionsWalk,
  Fastfood,
  LunchDining,
  SetMeal,
} from "@mui/icons-material";

function Menu(): JSX.Element {
  // メニューをグループでまとめて表示するための関数
  function MenuGroup(
    props: React.PropsWithChildren<{ label: string; icon: JSX.Element }>
  ): JSX.Element {
    return (
      <Grid item xs={12} sm={6}>
        <Box sx={{ border: "solid", p: 2 }}>
          <Typography variant="h6" sx={{ display: "flex", pb: 2 }}>
            {props.icon}
            {props.label}
            <Grid container spacing={3}>
              {props.children}
            </Grid>
          </Typography>
        </Box>
      </Grid>
    );
  }

  // メニューのボタンを個別に作成するためのクラス
  function MenuGroupItem(props: { label: string; path: string }): JSX.Element {
    return (
      <Grid item xs={12} sm={6}>
        <Card variant="outlined">
          <CardActionArea component={RouterLink} to={props.path}>
            <CardContent>
              <Typography>{props.label}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
  return (
    <Box sx={{ mt: 10, p: 3, mb: 10 }}>
      <Grid container>
        <MenuGroup
          label="食材"
          icon={<SetMeal sx={{ mr: 1 }} fontSize="large" />}
        >
          <MenuGroupItem
            label={"食材検索"}
            path={"/Stuff/Search"}
          ></MenuGroupItem>
          {/* <MenuGroupItem label={'食材追加'} path={'/'}></MenuGroupItem> */}
        </MenuGroup>
        <MenuGroup
          label="料理"
          icon={<LunchDining sx={{ mr: 1 }} fontSize="large" />}
        >
          <MenuGroupItem
            label={"料理検索"}
            path={"/Dish/Search"}
          ></MenuGroupItem>
          <MenuGroupItem label={"料理追加"} path={"/Dish/Add"}></MenuGroupItem>
        </MenuGroup>
        <MenuGroup
          label="献立"
          icon={<Fastfood sx={{ mr: 1 }} fontSize="large" />}
        >
          <MenuGroupItem label={"献立検索"} path={"/"}></MenuGroupItem>
          <MenuGroupItem label={"献立追加"} path={"/"}></MenuGroupItem>
        </MenuGroup>
        <MenuGroup
          label="測定"
          icon={<DirectionsWalk sx={{ mr: 1 }} fontSize="large" />}
        >
          <MenuGroupItem
            label={"代謝測定"}
            path={"/Measure/Metabolic"}
          ></MenuGroupItem>
          <MenuGroupItem
            label={"目標設定"}
            path={"/Measure/AIM"}
          ></MenuGroupItem>
        </MenuGroup>
      </Grid>
    </Box>
  );
}

export default Menu;
