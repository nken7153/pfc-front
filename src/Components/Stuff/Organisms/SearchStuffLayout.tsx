import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import {
  SearchStuffInfo,
  SearchStuffResultInfo,
} from "../../../Types/Stuff/StuffType";
import { Search } from "@mui/icons-material";
import { SearchStuffTable } from "./SearchStuffTable";

function SearchStuffLayout(props: {
  stuffSearchResult: SearchStuffResultInfo[]; // 検索結果
  searchStuffInfo: SearchStuffInfo; // 検索条件
  setSearchStuffInfo: any; // TODO setterの型は何が正しいか要確認
  stuffSearch: () => void;
  // TODO props以外で渡せないか要確認
  open: boolean;
  handleOpen: any;
  handleClose: any;
  modalStuffData: any;
  setModalStuffData: any;
}): JSX.Element {
  // 使用用途用確認
  const title = "食材検索";

  return (
    <>
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
        <Grid item container justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <Typography
              variant="h6"
              sx={{ borderBottom: 2, borderColor: "primary" }}
            >
              検索条件
            </Typography>
          </Grid>
        </Grid>
        {/* 食材名 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="text"
              id="search-stuff-name"
              label="食材名"
              value={props.searchStuffInfo.stuffName}
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffName: event.target.value,
                }));
              }}
            />
          </Grid>
        </Grid>
        {/* カロリー */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-cal-min"
              label="カロリー(最小値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffCalMin: event.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
              ~
            </Typography>
          </Grid>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-cal-max"
              label="カロリー(最大値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffCalMax: event.target.value,
                }));
              }}
            />
          </Grid>
        </Grid>
        {/* タンパク質 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-p-min"
              label="タンパク質(最小値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffPMin: event.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
              ~
            </Typography>
          </Grid>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-p-max"
              label="タンパク質(最大値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffPMax: event.target.value,
                }));
              }}
            />
          </Grid>
        </Grid>
        {/* 脂質 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-f-min"
              label="脂質(最小値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffFMin: event.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
              ~
            </Typography>
          </Grid>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-f-max"
              label="脂質(最大値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffFMax: event.target.value,
                }));
              }}
            />
          </Grid>
        </Grid>
        {/* 糖質 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-c-min"
              label="糖質(最小値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffCMin: event.target.value,
                }));
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ mr: 2, ml: 2 }}>
              ~
            </Typography>
          </Grid>
          <Grid item>
            {/* TODO FormTextFieldで送れるよう修正 */}
            <TextField
              type="number"
              id="search-stuff-c-max"
              label="糖質(最大値)"
              variant="outlined"
              onChange={(event) => {
                props.setSearchStuffInfo((searchStuffInfo: any) => ({
                  ...searchStuffInfo,
                  stuffCMax: event.target.value,
                }));
              }}
            />
          </Grid>
        </Grid>
        {/* 検索ボタン */}
        <Grid item container justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.stuffSearch()}
              type="button"
            >
              <Search sx={{ mr: 1 }} />
              食材検索
            </Button>
          </Grid>
        </Grid>
        {/* TODO 検索結果の表示方法要検討 */}
        <Grid item container justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <SearchStuffTable
              stuffSearchResult={props.stuffSearchResult}
              open={props.open}
              handleOpen={props.handleOpen}
              handleClose={props.handleClose}
              modalStuffData={props.modalStuffData}
              setModalStuffData={props.setModalStuffData}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default SearchStuffLayout;
