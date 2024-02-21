import axios from "axios";
import React, { useState } from "react";
import { AimSettingInfo } from "../../../Types/AimSetting/AimSettingInfo";
import { AimSettingResult } from "../../../Types/AimSetting/AimSettingResult";
import { IP } from "../../../Types/IP";
import AimSettingLayout from "../Organisms/AimSettingLayout";

function AimSettingAction(props: {}): JSX.Element {
  // 計算結果格納用のステート
  const [measureResult, setMeasureResult] = useState<AimSettingResult>({
    calorie: 0,
    protein: 0,
    fat: 0,
    carbo: 0,
  });

  // 計算ボタン押下時の処理
  function measureAimCal(aimSettingInfo: AimSettingInfo): void {
    new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: IP + "/Measure/Aim",
        params: {
          aimSettingInfo: aimSettingInfo,
        },
        withCredentials: true,
      })
        .then(function (response) {
          let result = response.data;
          setMeasureResult(result);
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
      axios.defaults.withCredentials = true;
    });
  }

  return (
    <>
      <AimSettingLayout
        measureAimCal={measureAimCal}
        measureResult={measureResult}
      />
    </>
  );
}
export default AimSettingAction;
