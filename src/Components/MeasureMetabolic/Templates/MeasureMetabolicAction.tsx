import axios from "axios";
import React, { useState } from "react";
import { IP } from "../../../Types/IP";
import { MeasureMetabolicInfo } from "../../../Types/MesureMetabolic/MesureMetabolicInfo";
import MeasureMetabolicLayout from "../Organisms/MeasureMetabolicLayout";

export function MeasureMetabolicAction(props: {}): JSX.Element {
  // 計算結果のステート
  const [measureResult, setMeasureResult] = useState("");

  // 測定ボタン押下時の処理
  function measureMetabolic(inputData: MeasureMetabolicInfo): void {
    // TODO 一時的な対応のためバリデーションとデフォルト値で解決するように修正する
    if (inputData.momentum === undefined) {
      inputData.momentum = 3;
    }
    if (inputData.muscleMass === undefined) {
      inputData.muscleMass = 4;
    }
    if (inputData.sex === undefined) {
      inputData.sex = "male";
    }
    new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: IP + "/Measure/Metabolic",
        params: {
          measureMetabolicInfo: inputData,
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
      <MeasureMetabolicLayout
        measureMetabolic={measureMetabolic}
        measureResult={measureResult}
      />
    </>
  );
}
