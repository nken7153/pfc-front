import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import { SearchStuffResultInfo } from "../../../Types/Stuff/StuffType";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function SearchStuffModal(props: {
  stuffInfo: SearchStuffResultInfo;
  open: boolean;
  handleClose: () => void;
}) {
  const p = props.stuffInfo.stuffP * 4;
  const f = props.stuffInfo.stuffF * 9;
  const c = props.stuffInfo.stuffC * 4;
  const total = p + f + c;
  const targetData = [
    { name: "P", value: (p / total) * 100 },
    { name: "F", value: (f / total) * 100 },
    { name: "C", value: 100 - (p / total) * 100 - (f / total) * 100 },
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
          <Grid container justifyContent={"cneter"}>
            <Grid item justifyContent={"flex-start"} xs={12}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                {props.stuffInfo.stuffName}
              </Typography>
            </Grid>
          </Grid>
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
          <Grid container justifyContent={"cneter"}>
            <Grid item justifyContent={"center"} xs={12}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                総カロリー(100g)：{props.stuffInfo.stuffCal}kcal
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent={"cneter"}>
            <Grid item justifyContent={"center"} xs={4}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                タンパク質：{props.stuffInfo.stuffP}g
              </Typography>
              <Typography variant="h6" sx={{ mr: 2 }}>
                脂質：{props.stuffInfo.stuffF}g
              </Typography>
              <Typography variant="h6" sx={{ mr: 2 }}>
                糖質：{props.stuffInfo.stuffC}g
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
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
