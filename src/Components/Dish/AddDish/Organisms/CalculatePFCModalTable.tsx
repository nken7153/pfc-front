import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  AddDishInfo,
  useStuffItemType,
} from "../../../../Types/Dish/AddDishInfo";

function CalculatePFCModalTable(props: {
  addDishInfo: AddDishInfo;
}): JSX.Element {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item justifyContent="centet" xs={12}>
          {props.addDishInfo.useStuffItems.map((item: useStuffItemType) => {
            return (
              <>
                <Typography variant="h6" sx={{ mr: 2 }}>
                  食材名：{item.stuffName}, 使用量：{item.stuffAmount}
                </Typography>
              </>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}
export default CalculatePFCModalTable;
