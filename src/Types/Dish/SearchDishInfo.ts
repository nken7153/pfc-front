import { useStuffItemType } from "./AddDishInfo";

// 検索条件用の型
export type SearchDishInfo = {
  dishName: string;
  dishCalMax: number;
  dishCalMin: number;
  dishPMax: number;
  dishPMin: number;
  dishFMax: number;
  dishFMin: number;
  dishCMax: number;
  dishCMin: number;
}

// 検索結果用の型
export type SearchDishResultInfo = {
  dishId: string;
  dishName: string;
  dishCal: number;
  dishP: number;
  dishF: number;
  dishC: number;
  useStuffItems: useStuffItemType[]
}

