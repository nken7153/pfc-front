import axios from "axios";
import React, { useState } from "react";
import { useStuffItemType } from "../../../../Types/Dish/AddDishInfo";
import {
  SearchDishInfo,
  SearchDishResultInfo,
} from "../../../../Types/Dish/SearchDishInfo";
import { IP } from "../../../../Types/IP";
import SearchDishLayout from "../Organisms/SearchDishLayout";

function SearchDishAction(): JSX.Element {
  // 初期表示のデータ
  const initinputData: SearchDishInfo = {
    dishName: "",
    dishCalMax: 10000,
    dishCalMin: 0,
    dishPMax: 10000,
    dishPMin: 0,
    dishFMax: 10000,
    dishFMin: 0,
    dishCMax: 10000,
    dishCMin: 0,
  };

  // 検索結果格納用のステート
  const [searchDishResult, setSearchDishResult] = useState<
    SearchDishResultInfo[]
  >([]);

  // 料理詳細モーダル画面を開くためのステート
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // モーダル画面に値を表示するためのステート
  const [modalDishData, setModalDishData] = useState<SearchDishResultInfo>({
    dishId: "0",
    dishName: "",
    dishCal: 0,
    dishP: 0,
    dishF: 0,
    dishC: 0,
    useStuffItems: [],
  });

  // 使用食材一覧の作成用関数
  function extractUseStuffItems(dishData: any): useStuffItemType[] {
    const useStuffItems: useStuffItemType[] = [];
    for (let i = 1; i <= 15; i++) {
      // TODO IDを削除
      const idKey = "stuff_id_" + i;
      const nameKey = "stuff_name_" + i;
      const amountKey = "stuff_amount_" + i;
      // TODO idKeyをnameKeyに変更
      if (dishData[idKey] === "undefined") {
        break;
      } else {
        const item: useStuffItemType = {
          // TODO IDを削除
          stuffId: dishData[idKey],
          stuffName: dishData[nameKey],
          stuffAmount: dishData[amountKey],
        };
        useStuffItems.push(item);
      }
    }
    return useStuffItems;
  }

  // 検索結果をSearchDishResultInfo配列に変換する関数
  function convertSearchDishResultInfo(dishArray: any): SearchDishResultInfo[] {
    const convertDishArray = [];
    for (let i = 0; i < dishArray.length; i++) {
      const dishData: SearchDishResultInfo = {
        dishId: dishArray[i].dish_id,
        dishName: dishArray[i].dish_name,
        dishCal: dishArray[i].dish_cal,
        dishP: dishArray[i].dish_p,
        dishF: dishArray[i].dish_f,
        dishC: dishArray[i].dish_c,
        useStuffItems: extractUseStuffItems(dishArray[i]),
      };
      convertDishArray.push(dishData);
    }
    return convertDishArray;
  }

  // 料理検索ボタン押下時の処理
  function searchDish(searchDishInfo: SearchDishInfo): void {
    // undefinedの状態でAPIに送られないようにする対応
    if (typeof searchDishInfo.dishName === "undefined") {
      searchDishInfo.dishName = "";
    }
    if (typeof searchDishInfo.dishCalMax === "undefined") {
      searchDishInfo.dishCalMax = 100000;
    }
    if (typeof searchDishInfo.dishCalMin === "undefined") {
      searchDishInfo.dishCalMin = 0;
    }
    if (typeof searchDishInfo.dishPMax === "undefined") {
      searchDishInfo.dishPMax = 100000;
    }
    if (typeof searchDishInfo.dishPMin === "undefined") {
      searchDishInfo.dishPMin = 0;
    }
    if (typeof searchDishInfo.dishFMax === "undefined") {
      searchDishInfo.dishFMax = 100000;
    }
    if (typeof searchDishInfo.dishFMin === "undefined") {
      searchDishInfo.dishFMin = 0;
    }
    if (typeof searchDishInfo.dishCMax === "undefined") {
      searchDishInfo.dishCMax = 100000;
    }
    if (typeof searchDishInfo.dishCMin === "undefined") {
      searchDishInfo.dishCMin = 0;
    }
    console.log(searchDishInfo);
    new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: IP + "/search_dish",
        params: {
          searchDishInfo: searchDishInfo,
        },
        withCredentials: true,
      })
        .then(function (response) {
          let result = response.data;
          console.log("料理検索の検索結果を表示:" + JSON.stringify(result));
          console.log(result[0].dish_c);

          // 型変換
          const convertResult = convertSearchDishResultInfo(result);

          setSearchDishResult(() => convertResult);
          resolve(convertResult);
        })
        .catch(function (error) {
          reject(error);
        });
      axios.defaults.withCredentials = true;
    });
  }
  return (
    <>
      <SearchDishLayout
        searchDishInfo={initinputData}
        searchDishResult={searchDishResult}
        searchDish={searchDish}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalDishData={modalDishData}
        setModalDishData={setModalDishData}
      />
    </>
  );
}
export default SearchDishAction;
