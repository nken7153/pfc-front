import * as yup from 'yup'

const searchDishLayoutSchema = yup.object().shape({
  dishName: yup.string().typeError('文字列を入力してください。'),
  dishCalMax: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 100000 : value))
    .test('dishCalMaxTest','カロリー(最小値)よりも大きな値を入力してください。', function(value) {
      if(value !== undefined && this.parent.dishCalMin !== undefined){
        return (this.parent.dishCalMin < value)
      }
      return true
    }),
  dishCalMin: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 0 : value)),
  dishPMax: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 100000 : value))
    .test('dishPMaxTest','タンパク質(最小値)よりも大きな値を入力してください。', function(value) {
      if(value !== undefined && this.parent.dishPMin !== undefined){
        return (this.parent.dishPMin < value)
      }
      return true
    }),
  dishPMin: yup.number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 0 : value)),
  dishFMax: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 100000 : value))
    .test('dishFMaxTest','脂質(最小値)よりも大きな値を入力してください。', function(value) {
      if(value !== undefined && this.parent.dishFMin !== undefined){
        return (this.parent.dishFMin < value)
      }
      return true
    }),
  dishFMin: yup.number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 0 : value)),
  dishCMax: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 100000 : value))
    .test('dishCMaxTest','炭水化物(最小値)よりも大きな値を入力してください。', function(value) {
      if(value !== undefined && this.parent.dishCMin !== undefined){
        return (this.parent.dishCMin < value)
      }
      return true
    }),
  dishCMin: yup.number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の数字を入力してください。')
    .transform((value, originalvalue) => (originalvalue === '' ? 0 : value)),
})
export default searchDishLayoutSchema