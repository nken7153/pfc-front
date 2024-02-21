import axios from "axios";
import React, { useState } from "react";
import {
  AddDishInfo,
  CalculateDishPFCInfo,
} from "../../../../Types/Dish/AddDishInfo";
import { IP } from "../../../../Types/IP";
import AddDishLayout from "../Organisms/AddDishLayout";

function AddDishAction(): JSX.Element {
  // 初期表示のデータ
  const initinputDishData: AddDishInfo = {
    dishName: "",
    useStuffItems: [],
  };

  // モーダルの設定
  const [calculatePFCModal, setCalculatePFCModal] = useState(false);
  const calculatePFCModalOpen = () => setCalculatePFCModal(true);
  const calculatePFCModalClose = () => setCalculatePFCModal(false);

  // ダイアログの設定
  const [completeDialog, setCompleteDialog] = useState(false);
  const completeDialogOpen = () => setCompleteDialog(true);
  const completeDialogClose = () => setCompleteDialog(false);

  // 料理のPFC計算後の情報を保存
  const [calculateDishPFCInfo, setCalculateDishPFCInfo] =
    useState<CalculateDishPFCInfo>({
      dishP: 0,
      dishF: 0,
      dishC: 0,
      dishCal: 0,
    });

  // 料理登録ボタン(PFCの計算)押下時の処理
  function dishAddCalculate(addDishInfo: AddDishInfo): void {
    new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: IP + "/culculateDishPFC",
        params: {
          AddDishInfo: addDishInfo,
        },
        withCredentials: true,
      })
        .then(function (response) {
          let result: any = response.data;
          console.log("axios result = " + JSON.stringify(result));
          console.log(result);

          setCalculateDishPFCInfo(
            (calculateDishPFCInfo: CalculateDishPFCInfo) => ({
              ...calculateDishPFCInfo,
              dishP: result.dish_p,
              dishF: result.dish_f,
              dishC: result.dish_c,
              dishCal: result.dish_cal,
            })
          );
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  // 登録ボタン押下時の処理
  function dishAddRegister(addDishInfo: AddDishInfo): void {
    new Promise((resolve, reject) => {
      axios
        .post(IP + "/registerDishPFC", {
          addDishInfo: addDishInfo,
          calculateDishPFCInfo: calculateDishPFCInfo,
        })
        .then(function (response) {
          let result: any = response.data;
          resolve(result);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }

  return (
    <>
      <AddDishLayout
        addDishInfo={initinputDishData}
        dishAddCalculate={dishAddCalculate}
        calculatePFCModal={calculatePFCModal}
        calculatePFCModalOpen={calculatePFCModalOpen}
        calculatePFCModalClose={calculatePFCModalClose}
        calculateDishPFCInfo={calculateDishPFCInfo}
        dishAddRegister={dishAddRegister}
        completeDialog={completeDialog}
        completeDialogOpen={completeDialogOpen}
        completeDialogClose={completeDialogClose}
      />
    </>
  );
}
export default AddDishAction;
