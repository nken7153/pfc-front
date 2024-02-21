import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IP } from "../Types/IP";

// type useStuffsResult = Omit<UseQueryResult<string[]>, 'data'> & {data: string[]}
// export const useStuffs = ():useStuffsResult => {
//   const navigate = useNavigate()

//   // 検索結果から食材名だけを取り出した配列を作成する関数
//   function getStuffNameArray(
//     stuffArray: any
//   ): string[] {
//     const stuffNameArray = [];
//     for (let i = 0; i < stuffArray.length; i++) {
//       stuffNameArray.push(stuffArray[i].stuff_name);
//     }
//     return stuffNameArray
//   }

//   async function getStuffs() {
//     let stuffNameArray: string[] = []
//     const _getStuffs = async () => {
//       try {
//         console.log('食材名の全件取得を開始します。')
//         new Promise((resolve,reject) => {
//           axios({
//             method: "get",
//             url: IP + "/getAllStuff",
//             withCredentials: true,
//           })
//           .then(function (response) {
//             let result = response.data;
//             stuffNameArray = getStuffNameArray(result)
//             resolve(stuffNameArray);
//           })
//         })
//       } catch{
//         console.log('食材情報の全件取得に失敗しました。')
//       }
//     }
//     return stuffNameArray
//   }

//   const query = useQuery('/StuffName', async () => getStuffs(), {
//     initialData: [],

//     initialDataUpdatedAt: 0,
//     cacheTime: Infinity,
//     staleTime: Infinity
//   })
//   return {...query, data:query.data || []}
// }