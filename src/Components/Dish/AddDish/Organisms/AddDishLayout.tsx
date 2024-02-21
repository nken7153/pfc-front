import { Button, Dialog, DialogTitle, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  AddDishInfo,
  CalculateDishPFCInfo,
} from "../../../../Types/Dish/AddDishInfo";
import FormTextField from "../../../FormTextField";
import AddDishStuffTable from "./AddDishStuffTable";
import * as jsonPatch from "fast-json-patch";
import { Save } from "@mui/icons-material";
import CalculatePFCModal from "./CalculatePFCModal";
import { yupResolver } from "@hookform/resolvers/yup";
import addDishLayoutSchema from "../../../../Validation/Components/dish/AddDish/AddDishLayout";

function AddDishLayout(props: {
  addDishInfo: AddDishInfo;
  dishAddCalculate: (addDishInfo: AddDishInfo) => void;
  calculatePFCModal: boolean;
  calculatePFCModalOpen: any;
  calculatePFCModalClose: any;
  calculateDishPFCInfo: CalculateDishPFCInfo;
  dishAddRegister: (addDishInfo: AddDishInfo) => void;
  completeDialog: boolean;
  completeDialogOpen: any;
  completeDialogClose: any;
}): JSX.Element {
  const title = "料理追加";

  // react-hook-formの設定
  const methods = useForm<AddDishInfo>({
    defaultValues: jsonPatch.deepClone(props.addDishInfo),
    resolver: yupResolver(addDishLayoutSchema),
    // どのタイミングでvalidationが発生するかの設定
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
                登録情報
              </Typography>
            </Grid>
          </Grid>
          {/* 料理名 */}
          <Grid container item justifyContent="center" xs={10} sx={{ mt: 2 }}>
            <Grid container justifyContent="flex-start">
              <Grid item md={3} xs={12} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishName"
                  control={control}
                  label="料理名"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          {/* 食材の入力フォーム */}
          <Grid
            container
            item
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item container justifyContent="center" sx={{ pb: 2 }}>
              <AddDishStuffTable methods={methods} />
            </Grid>
          </Grid>
          {/* 登録ボタン */}
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
                onClick={() => {
                  console.log("axios処理呼び出し前の値確認");
                  console.log(getValues());
                  props.dishAddCalculate(getValues());
                  props.calculatePFCModalOpen();
                }}
                type="button"
              >
                <Save sx={{ mr: 1 }} />
                料理登録
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>
      <CalculatePFCModal
        open={props.calculatePFCModal}
        handleClose={props.calculatePFCModalClose}
        calculateDishPFCInfo={props.calculateDishPFCInfo}
        dishData={getValues()}
        dishAddRegister={props.dishAddRegister}
        completeDialogOpen={props.completeDialogOpen}
      />
      <Dialog
        open={props.completeDialog}
        onClose={props.completeDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"登録が完了しました。"}
        </DialogTitle>
      </Dialog>
    </>
  );
}
export default AddDishLayout;
