import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  SearchDishInfo,
  SearchDishResultInfo,
} from "../../../../Types/Dish/SearchDishInfo";
import { Button, Grid, Typography } from "@mui/material";
import FormTextField from "../../../FormTextField";
import { Search } from "@mui/icons-material";
import SearchDishTable from "./SearchDishTable";
import searchDishLayoutSchema from "../../../../Validation/Components/dish/SearchDIsh/SearchDishLayout";
import { yupResolver } from "@hookform/resolvers/yup";
function SearchDishLayout(props: {
  searchDishInfo: SearchDishInfo;
  searchDishResult: SearchDishResultInfo[];
  searchDish: (searchDishInfo: SearchDishInfo) => void;
  open: boolean;
  handleOpen: any;
  handleClose: any;
  modalDishData: any;
  setModalDishData: any;
}): JSX.Element {
  const title = "料理検索";

  // react-hook-formの設定
  const methods = useForm<SearchDishInfo>({
    resolver: yupResolver(searchDishLayoutSchema),
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
                検索条件
              </Typography>
            </Grid>
          </Grid>
          {/* 料理名 */}
          <Grid container item justifyContent="center" xs={10} sx={{ mt: 2 }}>
            <Grid container justifyContent="flex-start">
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishName"
                  control={control}
                  label="料理名"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          {/* カロリー */}
          <Grid container item justifyContent="center" xs={10} sx={{ mt: 2 }}>
            <Grid container justifyContent="flex-start">
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishCalMin"
                  control={control}
                  label="カロリー(最小値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
                  ~
                </Typography>
              </Grid>
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishCalMax"
                  control={control}
                  label="カロリー(最大値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          {/* タンパク質 */}
          <Grid container item justifyContent="center" xs={10} sx={{ mt: 2 }}>
            <Grid container justifyContent="flex-start">
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishPMin"
                  control={control}
                  label="タンパク質(最小値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
                  ~
                </Typography>
              </Grid>
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishPMax"
                  control={control}
                  label="タンパク質(最大値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          {/* 脂質 */}
          <Grid container item justifyContent="center" xs={10} sx={{ mt: 2 }}>
            <Grid container justifyContent="flex-start">
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishFMin"
                  control={control}
                  label="脂質(最小値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
                  ~
                </Typography>
              </Grid>
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishFMax"
                  control={control}
                  label="脂質(最大値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          {/* 糖質 */}
          <Grid container item justifyContent="center" xs={10} sx={{ mt: 2 }}>
            <Grid container justifyContent="flex-start">
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishCMin"
                  control={control}
                  label="糖質(最小値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
                  ~
                </Typography>
              </Grid>
              <Grid item md={4} sx={{ pb: 2 }}>
                <FormTextField
                  name="dishCMax"
                  control={control}
                  label="糖質(最大値)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          {/* 検索ボタン */}
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
                onClick={() => props.searchDish(getValues())}
                type="button"
              >
                <Search sx={{ mr: 1 }} />
                料理検索
              </Button>
            </Grid>
          </Grid>
          {/* TODO 検索結果の表示方法要検討 */}
          <Grid
            item
            container
            justifyContent="flex-start"
            xs={10}
            sx={{ mt: 2 }}
          >
            <Grid item>
              <SearchDishTable
                searchDishResult={props.searchDishResult}
                open={props.open}
                handleOpen={props.handleOpen}
                handleClose={props.handleClose}
                modalDishData={props.modalDishData}
                setModalDishData={props.setModalDishData}
              />
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
}
export default SearchDishLayout;
