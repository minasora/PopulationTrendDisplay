type PrefectureCode = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
    11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
    21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 |
    31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 |
    41 | 42 | 43 | 44 | 45 | 46 | 47;
type year = {
    year: number
    population: number
}
type trend = {
    label:PopulationType ,
    data: year[]
}
type PopulationType = '老年人口' | '総人口' | '生産年齢人口'|'年少人口'
type PrefTrend = {
    prefCode: PrefectureCode,
    prefName: string,
    data:trend[]
}
interface InputDataPoint {
    year: number;
    value: number;
    rate?: number;
}

interface InputTrend {
    label: string;
    data: InputDataPoint[];
}

interface InputResult {
    boundaryYear: number;
    data: InputTrend[];
}

interface Input {
    message: null;
    result: InputResult;
}
export type { PrefTrend, year, trend, InputTrend,InputResult,Input,InputDataPoint,PrefectureCode,PopulationType}

