import axios from "axios";
import React, { useState } from "react";
import { IP } from "../../../Types/IP";
import {
  SearchStuffInfo,
  SearchStuffResultInfo,
} from "../../../Types/Stuff/StuffType";
import SearchStuffLayout from "../Organisms/SearchStuffLayout";

function SearchStuff(): JSX.Element {
  // 検索条件のステート
  const [searchStuffInfo, setSearchStuffInfo] = useState<SearchStuffInfo>({
    stuffName: "",
    stuffCalMax: 10000,
    stuffCalMin: 0,
    stuffPMax: 10000,
    stuffPMin: 0,
    stuffFMax: 10000,
    stuffFMin: 0,
    stuffCMax: 10000,
    stuffCMin: 0,
  });

  // 検索結果格納用のステート
  const [searchStuffResult, setSearchStuffResult] = useState<
    SearchStuffResultInfo[]
  >([]);

  // モーダル画面を開くためのステート
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // モーダル画面に値を表示するためのステート
  const [modalStuffData, setModalStuffData] = useState<SearchStuffResultInfo>({
    stuffName: "",
    stuffId: "",
    stuffCal: 0,
    stuffP: 0,
    stuffF: 0,
    stuffC: 0,
  });

  //検索結果をSearchStuffResultInfo配列に変換する関数
  function convertSearchStuffResultInfo(
    stuffArray: any
  ): SearchStuffResultInfo[] {
    const convertStuffArray = [];
    for (let i = 0; i < stuffArray.length; i++) {
      const stuffData: SearchStuffResultInfo = {
        stuffId: stuffArray[i].id,
        stuffName: stuffArray[i].name,
        stuffCal: stuffArray[i].stuff_cal,
        stuffP: stuffArray[i].pfc.protein,
        stuffF: stuffArray[i].pfc.fat,
        stuffC: stuffArray[i].pfc.carbo,
      };
      convertStuffArray.push(stuffData);
    }
    return convertStuffArray;
  }

  // API呼び出しのダミー結果を返す関数
  // (DB料金節約のために使用)
  function stuffSearchDummy(): void {
    new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: IP + "/test",
        withCredentials: true,
      })
        .then(function (response) {
          let result = response.data;
          console.log(
            "searchStuffResult = " + JSON.stringify(searchStuffResult)
          );
          console.log("axios result = " + JSON.stringify(result));
          const convertResult = convertSearchStuffResultInfo(result);
          console.log("convert result = " + JSON.stringify(convertResult));
          setSearchStuffResult(() => convertResult);
          console.log(
            "searchStuffResult = " + JSON.stringify(searchStuffResult)
          );
          resolve(convertResult);
        })
        .catch(function (error) {
          reject(error);
        });
      axios.defaults.withCredentials = true;
    });
  }

  // 食材検索APIの検索結果を返す関数
  function stuffSearch(): void {
    new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: IP + "/stuff",
        params: {
          stuffName: searchStuffInfo.stuffName,
          stuffCalMax: searchStuffInfo.stuffCalMax,
          stuffCalMin: searchStuffInfo.stuffCalMin,
          stuffPMax: searchStuffInfo.stuffPMax,
          stuffPMin: searchStuffInfo.stuffPMin,
          stuffFMax: searchStuffInfo.stuffFMax,
          stuffFMin: searchStuffInfo.stuffFMin,
          stuffCMax: searchStuffInfo.stuffCMax,
          stuffCMin: searchStuffInfo.stuffCMin,
        },
        withCredentials: true,
      })
        .then(function (response) {
          let result = response.data;
          console.log("axios result = " + JSON.stringify(result));
          const convertResult = convertSearchStuffResultInfo(result);
          console.log("convert result = " + JSON.stringify(convertResult));
          setSearchStuffResult(() => convertResult);
          console.log(
            "searchStuffResult = " + JSON.stringify(searchStuffResult)
          );
          resolve(convertResult);
        })
        .catch(function (error) {
          reject(error);
        });
      axios.defaults.withCredentials = true;
    });
  }

  //検索結果をSearchStuffResultInfo配列に変換する関数
  function convertToArray(stuffArray: any): string[] {
    const convertStuffArray = [];
    for (let i = 0; i < stuffArray.length; i++) {
      convertStuffArray.push(stuffArray[i].stuff_name);
    }
    return convertStuffArray;
  }
  // 食材名全件取得
  function getAllStuffName(): void {
    new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: IP + "/getAllStuffName",
        withCredentials: true,
      })
        .then(function (response) {
          let result = response.data;
          console.log("食材名全件取得結果 = " + JSON.stringify(result));
          console.log(result);
          result = convertToArray(result);
          console.log(JSON.stringify(result));

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
      <SearchStuffLayout
        stuffSearchResult={searchStuffResult}
        searchStuffInfo={searchStuffInfo}
        setSearchStuffInfo={setSearchStuffInfo}
        stuffSearch={stuffSearch}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalStuffData={modalStuffData}
        setModalStuffData={setModalStuffData}
      />
    </>
  );
}
export default SearchStuff;
