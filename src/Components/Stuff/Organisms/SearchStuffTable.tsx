import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import SearchStuffModal from "./SearchStuffModal";

export const SearchStuffTable = (props: any) => {
  const {
    stuffSearchResult,
    open,
    handleOpen,
    handleClose,
    modalStuffData,
    setModalStuffData,
  } = props;

  return (
    <>
      <TableContainer component={Paper} style={{ marginBottom: 30 }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#F2F2F2" }}>
              <TableCell>食材ID</TableCell>
              <TableCell>食材名</TableCell>
              <TableCell>カロリー</TableCell>
              <TableCell>タンパク質</TableCell>
              <TableCell>脂質</TableCell>
              <TableCell>糖質</TableCell>
              <TableCell>詳細</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stuffSearchResult.map((data: any) => {
              return (
                <TableRow key={data.stuffId}>
                  <TableCell>{data.stuffId}</TableCell>
                  <TableCell>{data.stuffName}</TableCell>
                  <TableCell>{data.stuffCal}</TableCell>
                  <TableCell>{data.stuffP}</TableCell>
                  <TableCell>{data.stuffF}</TableCell>
                  <TableCell>{data.stuffC}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      value={1}
                      onClick={() => {
                        setModalStuffData(data);
                        handleOpen();
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
      <SearchStuffModal
        open={open}
        handleClose={handleClose}
        stuffInfo={modalStuffData}
      />
    </>
  );
};
