import { yupResolver } from "@hookform/resolvers/yup";
import { Calculate } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { AimSettingInfo } from "../../../Types/AimSetting/AimSettingInfo";
import { AimSettingResult } from "../../../Types/AimSetting/AimSettingResult";
import aimSettingLayoutSchema from "../../../Validation/Components/AimSetting/AimSettingLayout";
import FormTextField from "../../FormTextField";

function AimSettingLayout(props: {
  measureAimCal: (aimSettingInfo: AimSettingInfo) => void;
  measureResult: AimSettingResult;
}): JSX.Element {
  const title = "目標設定";

  // react-hook-formの設定
  const methods = useForm<AimSettingInfo>({
    resolver: yupResolver(aimSettingLayoutSchema),
    mode: "all",
  });

  const { control, getValues } = methods;

  return (
    <>
      <FormProvider {...methods}>
        <Grid item container justifyContent="center" sx={{ mt: 10, mb: 10 }}>
          <Grid item container justifyContent="flex-start" xs={10}>
            <Grid item sx={{ mt: 2 }}>
              <Typography
                variant="h5"
                sx={{ borderBottom: 2, borderColor: "primary" }}
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <Typography
                variant="h6"
                sx={{ borderBottom: 2, borderColor: "primary" }}
              >
                目標情報入力欄
              </Typography>
            </Grid>
          </Grid>
          {/* 目標体重変化量 */}
          <Grid
            container
            item
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <FormTextField
                name="targetChangeWeight"
                control={control}
                label="目標の体重変化量(kg)"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          {/* 目標期間 */}
          <Grid
            container
            item
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <FormTextField
                name="targetPeriod"
                control={control}
                label="目標の体重変化期間(週)"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          {/* 基礎代謝 */}
          <Grid
            container
            item
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <FormTextField
                name="metabolic"
                control={control}
                label="現在の基礎代謝"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          {/* PFC割合設定 */}
          <Grid
            item
            container
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <Typography variant="h6">PFC割合設定</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item sx={{ pr: 1 }}>
              {/* タンパク質 */}
              <FormTextField
                name="targetP"
                control={control}
                label="タンパク質(%)"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item sx={{ pr: 1 }}>
              {/* 脂質 */}
              <FormTextField
                name="targetF"
                control={control}
                label="脂質(%)"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item sx={{ pr: 1 }}>
              {/* 糖質 */}
              <FormTextField
                name="targetC"
                control={control}
                label="糖質(%)"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          {/* 測定ボタン */}
          <Grid
            item
            container
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => props.measureAimCal(getValues())}
                type="button"
              >
                <Calculate sx={{ mr: 1 }} />
                計算
              </Button>
            </Grid>
          </Grid>
          {/* 測定結果 */}
          {/* TODO 円グラフを用いて表現 */}
          <Grid
            container
            item
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 8 }}
          >
            <Grid item>
              <Typography variant="h6">1日の目標カロリー</Typography>
            </Grid>
            <Grid item sx={{ mr: 2, ml: 2 }}>
              <TextField
                type="string"
                id="result"
                value={props.measureResult.calorie}
                variant="outlined"
                disabled
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">kcal</Typography>
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
}
export default AimSettingLayout;
