import * as yup from 'yup'

const aimSettingLayoutSchema = yup.object().shape({
  targetChangeWeight: yup
    .number()
    .typeError('半角数字を入力してください。')
    .required('目標の体重変化量を入力してください。'),
  targetPeriod: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の整数を入力してください。')
    .required('目標の体重変化期間を入力してください。')
    .integer('整数を入力してください。'),
  metabolic: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の値を入力してください。')
    .required('現在の基礎代謝を入力してください。'),
  targetP: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の値を入力してください。')
    .max(1000,'100以下の値を入力してください。')
    .required('カロリー取得のタンパク質の割合を入力してください。')
    .test('targetC','タンパク質、脂質、糖質の合計が100%になるよう値を入力してください。', function() {
      if(this.parent.targetC + this.parent.targetP + this.parent.targetF !== 100){
        return (false)
      }
      return true
    }),
  targetF: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の値を入力してください。')
    .max(1000,'100以下の値を入力してください。')
    .required('カロリー取得のタンパク質の割合を入力してください。')
    .test('targetC','タンパク質、脂質、糖質の合計が100%になるよう値を入力してください。', function() {
      if(this.parent.targetC + this.parent.targetP + this.parent.targetF !== 100){
        return (false)
      }
      return true
    }),
  targetC: yup
    .number()
    .typeError('半角数字を入力してください。')
    .min(0,'0以上の値を入力してください。')
    .max(1000,'100以下の値を入力してください。')
    .required('カロリー取得のタンパク質の割合を入力してください。')
    .test('targetC','タンパク質、脂質、糖質の合計が100%になるよう値を入力してください。', function() {
      if(this.parent.targetC + this.parent.targetP + this.parent.targetF !== 100){
        return (false)
      }
      return true
    }),
})
export default aimSettingLayoutSchema