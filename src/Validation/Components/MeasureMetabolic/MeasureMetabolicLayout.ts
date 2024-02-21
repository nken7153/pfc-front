import * as yup from 'yup'

const measureMetabolicLayoutSchema = yup.object().shape({
  height: yup
  .number()
  .typeError('半角数字を入力してください。')
  .required('目標の体重変化量を入力してください。'),
  weight: yup
  .number()
  .typeError('半角数字を入力してください。')
  .required('目標の体重変化量を入力してください。'),
  age: yup
  .number()
  .typeError('半角数字を入力してください。')
  .required('目標の体重変化量を入力してください。'),
  sex: yup
  .string()
  .transform((value, originalvalue) => (originalvalue === '' ? "male" : value))
    
})
export default measureMetabolicLayoutSchema