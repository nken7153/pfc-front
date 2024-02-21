import {
  Autocomplete,
  AutocompleteProps,
  FilterOptionsState,
  TextField,
} from "@mui/material";
import { useCallback } from "react";
import { Control, FieldValues, useController } from "react-hook-form";

export default function StuffSelect<TForm extends FieldValues>(
  props: Omit<AutocompleteProps<string, false, false, false>, "renderInput"> & {
    label?: string;
    control: Control<FieldValues>;
    name: string;
  }
): JSX.Element {
  const { name, control, ...autoCompleteProps } = props;
  const {
    field: { onChange, value, ref, ...rest },
    fieldState,
    // 型をUseControllerProps<FieldValues, string>に合わせるため引数名はname出ないとNG
  } = useController({ control, name });

  const stuffsValue = (value as string) || null;

  // 入力値をもとに選択肢のフィルタリングを行う関数
  const filterOption = useCallback(
    (options: string[], state: FilterOptionsState<string>): string[] => {
      // 入力値からスペースを取り除く
      const inputValue = state.inputValue.replace(/\s+/g, "");

      // 選択肢全体から条件に合致するようフィルタリングを行う
      const filteredOption = options.filter((name) => {
        if (name.replace(/\s+/g, "").includes(inputValue)) {
          return true;
        }
        return false;
      });
      return filteredOption;
    },
    []
  );
  return (
    <Autocomplete
      {...autoCompleteProps}
      value={stuffsValue || null}
      onChange={(event, value, reason) => {
        onChange(value ? value : null);
      }}
      filterOptions={filterOption}
      renderInput={(params) => {
        return (
          <TextField
            inputRef={ref}
            {...rest}
            {...params}
            label={props.label}
            variant="outlined"
            fullWidth
            error={fieldState.error ? true : false}
            helperText={fieldState?.error?.message}
          />
        );
      }}
    />
  );
}
