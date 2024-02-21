import * as yup from 'yup'

const addDishLayoutSchema = yup.object().shape({
  dishName: yup
    .string()
    .typeError('文字列を入力してください。')
    .required('料理名を入力してください。'),
  useStuffItems: yup.array().of(
    yup.object().shape({
      // TODO オートコンプリート実装後に削除
      stuffId: yup
        .string()
        .typeError('文字列を入力してください。')
        .required('食材IDを入力してください。'),
      stuffName: yup
        .string()
        .required('食材名を入力してください。'),
      stuffAmount: yup
        .number()
        .typeError('半角数字を入力してください。')
        .positive('0より大きい数字を入力してください。')
        .required('使用量を入力してください。'),
    })
  )
})
export default addDishLayoutSchema