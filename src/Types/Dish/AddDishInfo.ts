export type AddDishInfo = {
  dishName: string;
  useStuffItems: useStuffItemType[]
}

export type useStuffItemType = {
  stuffId: string
  stuffName: string
  stuffAmount: number
}

export type CalculateDishPFCInfo = {
  // グラム数
  dishP:number
  dishF:number
  dishC:number
  dishCal:number
}