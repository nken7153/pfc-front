import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { SearchDishResultInfo } from "../../../../Types/Dish/SearchDishInfo";
import SearchDishModal from "./SearchDishModal";
function SearchDishTable(props: {
  searchDishResult: SearchDishResultInfo[];
  open: boolean;
  handleOpen: any;
  handleClose: any;
  modalDishData: any;
  setModalDishData: any;
}): JSX.Element {
  return (
    <>
      <TableContainer component={Paper} style={{ marginBottom: 30 }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#F2F2F2" }}>
              <TableCell>料理ID</TableCell>
              <TableCell>料理名</TableCell>
              <TableCell>カロリー</TableCell>
              <TableCell>タンパク質</TableCell>
              <TableCell>脂質</TableCell>
              <TableCell>糖質</TableCell>
              <TableCell>詳細</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.searchDishResult.map((data: any) => {
              return (
                <TableRow key={data.dishId}>
                  <TableCell>{data.dishId}</TableCell>
                  <TableCell>{data.dishName}</TableCell>
                  <TableCell>{data.dishCal}</TableCell>
                  <TableCell>{data.dishP}</TableCell>
                  <TableCell>{data.dishF}</TableCell>
                  <TableCell>{data.dishC}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      value={1}
                      onClick={() => {
                        props.setModalDishData(data);
                        props.handleOpen();
                      }}
                      type="button"
                    >
                      詳細
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <SearchDishModal
        open={props.open}
        handleClose={props.handleClose}
        dishInfo={props.modalDishData}
      />
    </>
  );
}
export default SearchDishTable;
