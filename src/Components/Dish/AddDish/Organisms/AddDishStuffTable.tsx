import { AddCircleOutline, Delete } from "@mui/icons-material";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import {
  FormProvider,
  useFieldArray,
  useFormContext,
  UseFormReturn,
} from "react-hook-form";
import { AddDishInfo } from "../../../../Types/Dish/AddDishInfo";
import { stuffNameList } from "../../../../Types/StuffNameList";
import FormTextField from "../../../FormTextField";
import StuffSelect from "../../../StuffSelect";

function AddDishStuffTable(props: {
  methods: UseFormReturn<AddDishInfo, any>;
}): JSX.Element {
  const { control } = useFormContext(); // propsを使用せずコンテキスト(関連データ)をやりとり
  const { fields, append, remove } = useFieldArray({
    control, // ReactHookFormにコンポーネントを登録する為のメソッドを含むオブジェクト
    name: "useStuffItems", // 使用する配列の名前
  });

  return (
    <>
      <FormProvider {...props.methods}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#eae9e9" }}>
                <TableCell width="20%">No.</TableCell>
                <TableCell width="30%">食材名</TableCell>
                <TableCell width="30%">使用量</TableCell>
                <TableCell width="20%"></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {fields.map((field, index) => {
                return (
                  <TableRow key={field.id}>
                    {/* No */}
                    <TableCell>{index + 1}</TableCell>

                    {/* 食材名 */}
                    <TableCell>
                      <StuffSelect
                        options={stuffNameList}
                        control={control}
                        name={`useStuffItems.${index}.stuffName`}
                      />
                    </TableCell>

                    {/* 使用量 */}
                    <TableCell>
                      <FormTextField
                        inputProps={{ "aria-label": "使用量" }}
                        control={control}
                        name={`useStuffItems.${index}.stuffAmount`}
                        fullWidth
                      />
                    </TableCell>

                    {/* 削除ボタン */}
                    <TableCell align="center">
                      <Chip
                        label="削除"
                        variant="outlined"
                        icon={<Delete />}
                        sx={{ mt: 1 }}
                        onClick={() => remove(index)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>

            <TableFooter style={{ backgroundColor: "#eae9e9" }}>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              {/* 追加ボタン */}
              <TableCell align="center">
                <Chip
                  icon={<AddCircleOutline />}
                  role="button"
                  label="食材追加"
                  color="primary"
                  onClick={() => append({ stuffName: "", stuffAmount: 0 })}
                  disabled={fields.length >= 15}
                />
              </TableCell>
            </TableFooter>
          </Table>
        </TableContainer>
      </FormProvider>
    </>
  );
}
export default AddDishStuffTable;
