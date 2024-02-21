import { TextField, TextFieldProps } from "@mui/material";
import { Control, FieldValues, Path, useController } from "react-hook-form";

export default function FormTextField<TFieldValues extends FieldValues>(
  // TextFieldPropsはTextFieldを拡張するときに使うTextFieldの元々の要素の集合体
  props: TextFieldProps & {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>;
  }
): JSX.Element {
  const { name, control, ...textFieldProps } = props;
  const {
    // TODO refは何者？
    field: { ref, ...rest },
    fieldState,
  } = useController({ name, control });
  return (
    <TextField
      inputRef={ref}
      {...rest}
      {...textFieldProps}
      error={fieldState.error ? true : false}
      helperText={fieldState.error?.message}
    />
  );
}
