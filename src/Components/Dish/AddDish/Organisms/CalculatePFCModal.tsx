import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  AddDishInfo,
  CalculateDishPFCInfo,
} from "../../../../Types/Dish/AddDishInfo";
import CalculatePFCModalTable from "./CalculatePFCModalTable";

export default function CalculatePFCModal(props: {
  open: boolean;
  handleClose: () => void;
  calculateDishPFCInfo: CalculateDishPFCInfo;
  dishData: AddDishInfo;
  dishAddRegister: (addDishInfo: AddDishInfo) => void;
  completeDialogOpen: any;
}): JSX.Element {
  const p = props.calculateDishPFCInfo.dishP * 4;
  const f = props.calculateDishPFCInfo.dishF * 9;
  const cal = props.calculateDishPFCInfo.dishCal;
  const targetData = [
    { name: "P", value: (p / cal) * 100 },
    { name: "F", value: (f / cal) * 100 },
    { name: "C", value: 100 - (p / cal) * 100 - (f / cal) * 100 },
  ];

  const COLORS = ["#0088FE", "#FFBB28", "#00C49F"];
  const RADIAN = Math.PI / 180;
  const label = {
    name: String,
    value: String,
    cx: Number,
    cy: Number,
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    // 描画開始地点を指定
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "500px",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxshadow: 24,
    p: 4,
    overflow: "scroll",
  };

  return (
    <Modal open={props.open}>
      {/* cssを適用するためにBOXを使用 */}
      <Box sx={style}>
        <Grid container justifyContent={"cneter"}>
          {/* 料理名の表示 */}
          <Grid container justifyContent={"cneter"}>
            <Grid item justifyContent={"flex-start"} xs={12}>
              <Typography variant="h4" sx={{ mr: 2 }}>
                {props.dishData.dishName}
              </Typography>
            </Grid>
          </Grid>
          {/* PFCの円グラフを作成 */}
          <Grid container justifyContent={"cneter"}>
            <Grid item justifyContent={"cneter"} xs={12}>
              <ResponsiveContainer height={256}>
                <PieChart margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
                  <Pie
                    dataKey="value"
                    data={targetData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={0}
                    labelLine={false}
                    isAnimationActive={true}
                  >
                    {targetData.map((entry, index) => (
                      <Cell fill={COLORS[index % COLORS.length]} key={index} />
                    ))}
                  </Pie>
                  <Legend
                    verticalAlign="bottom"
                    wrapperStyle={{ bottom: 18 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
          {/* PFC情報の記載 */}
          <Grid container justifyContent={"cneter"} sx={{ mt: 2 }}>
            <Grid item justifyContent={"center"} xs={12} sx={{ mr: 2 }}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                栄養素
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={"cneter"} sx={{ ml: 2 }}>
            <Grid item justifyContent={"center"} xs={12}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                総カロリー：{props.calculateDishPFCInfo.dishCal}kcal
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={"cneter"} sx={{ ml: 2 }}>
            <Grid item justifyContent={"center"} xs={8}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                タンパク質：{props.calculateDishPFCInfo.dishP}g
              </Typography>
              <Typography variant="h6" sx={{ mr: 2 }}>
                脂質：{props.calculateDishPFCInfo.dishF}g
              </Typography>
              <Typography variant="h6" sx={{ mr: 2 }}>
                糖質：{props.calculateDishPFCInfo.dishC}g
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={"cneter"} sx={{ mt: 2 }}>
            <Grid item justifyContent={"center"} xs={12} sx={{ mr: 2 }}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                使用食材
              </Typography>
            </Grid>
          </Grid>
          <CalculatePFCModalTable addDishInfo={props.dishData} />

          <Grid container justifyContent="center">
            {/* 登録ボタン */}
            <Grid item justifyContent="center" sx={{ ml: 2 }}>
              <Button
                // ボタンを塗りつぶす設定
                variant="contained"
                color="primary"
                onClick={() => {
                  props.dishAddRegister(props.dishData);
                  props.handleClose();
                  props.completeDialogOpen();
                }}
                type="button"
              >
                登録
              </Button>
            </Grid>
            {/* モーダルを閉じるボタン */}
            <Grid item justifyContent="center">
              <Button
                // ボタンを塗りつぶす設定
                variant="contained"
                color="primary"
                onClick={() => props.handleClose()}
                type="button"
              >
                閉じる
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
