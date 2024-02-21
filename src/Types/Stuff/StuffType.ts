// 食品検索時に使用する値のオブジェクト
export type SearchStuffInfo = {
    stuffName: string;
    stuffCalMax: number;
    stuffCalMin: number;
    stuffPMax: number;
    stuffPMin: number;
    stuffFMax: number;
    stuffFMin: number;
    stuffCMax: number;
    stuffCMin: number;
}

// 検索結果用の型
export type SearchStuffResultInfo = {
    stuffId: string;
    stuffName: string;
    stuffCal: number;
    stuffP: number;
    stuffF: number;
    stuffC: number;
}