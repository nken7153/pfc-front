import { yupResolver } from "@hookform/resolvers/yup";
import { Calculate } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { MeasureMetabolicInfo } from "../../../Types/MesureMetabolic/MesureMetabolicInfo";
import measureMetabolicLayoutSchema from "../../../Validation/Components/MeasureMetabolic/MeasureMetabolicLayout";
import FormTextField from "../../FormTextField";

function MeasureMetabolicLayout(props: {
  measureMetabolic: (measureMetabolicInfo: MeasureMetabolicInfo) => void;
  measureResult: string;
}): JSX.Element {
  const title = "代謝測定";

  // react-hook-formの設定
  const methods = useForm<MeasureMetabolicInfo>({
    resolver: yupResolver(measureMetabolicLayoutSchema),
    // どのタイミングでvalidationが発生するかの設定
    mode: "all",
  });

  const muscleLoop = [1, 2, 3, 4, 5, 6, 7];
  const momentumLoop = [1, 2, 3, 4, 5];

  const { control, getValues, setValue } = methods;

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
              測定情報入力欄
            </Typography>
          </Grid>
        </Grid>
        {/* 身長 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <FormTextField
              name="height"
              control={control}
              label="身長"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        {/* 体重 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <FormTextField
              name="weight"
              control={control}
              label="体重"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        {/* 年齢 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <FormTextField
              name="age"
              control={control}
              label="年齢"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        {/* 性別 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="male"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="男性"
                  onClick={(event) => {
                    setValue("sex", "male");
                  }}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="女性"
                  onClick={(event) => {
                    setValue("sex", "female");
                  }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        {/* 筋肉量 */}
        <Grid item container justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                筋肉量
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={4}
              >
                {muscleLoop.map((value: number) => {
                  return (
                    <FormControlLabel
                      value={value}
                      control={<Radio />}
                      label={value}
                      onClick={(event) => {
                        setValue("muscleMass", value);
                      }}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        {/* 運動量 */}
        <Grid item container justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                運動量
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue={3}
              >
                {momentumLoop.map((value: number) => {
                  return (
                    <FormControlLabel
                      value={value}
                      control={<Radio />}
                      label={value}
                      onClick={(event) => {
                        setValue("momentum", value);
                      }}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        {/* 測定ボタン */}
        <Grid item container justifyContent="flex-start" xs={10} sx={{ mt: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => props.measureMetabolic(getValues())}
              type="button"
            >
              <Calculate sx={{ mr: 1 }} />
              測定開始
            </Button>
          </Grid>
        </Grid>
        {/* 測定結果 */}
        <Grid container item justifyContent="flex-start" xs={10} sx={{ mt: 8 }}>
          <Grid item>
            <Typography variant="h6">基礎代謝量</Typography>
          </Grid>
          <Grid item sx={{ mr: 2, ml: 2 }}>
            <TextField
              type="string"
              id="result"
              value={props.measureResult}
              variant="outlined"
              disabled
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">kcal</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default MeasureMetabolicLayout;
