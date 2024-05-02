import {Input, PrefectureCode, PrefTrend, trend} from './types';


const transformInputToPrefTrend = (prefCode:PrefectureCode,input: Input) :PrefTrend =>  {
    const trends = input.result.data.map(trend => {
        const data = trend.data.map(d => ({
            year: d.year,
            population: d.value
        }));
        return {
            label: trend.label as '老年人口' | '総人口' | '生産年齢人口',
            data: data
        };
    });

    const prefTrend: PrefTrend = {
        prefCode: prefCode,
        prefName: getPrefNameByPrefCode(prefCode),
        data: trends
    };

    return prefTrend;
}


function extractPopulationTrends(trend: trend): { years: number[], populations: number[] } {
    const populationTrends: Map<number, number> = new Map();

    trend.data.forEach(entry => {
            if (populationTrends.has(entry.year)) {
                populationTrends.set(entry.year, populationTrends.get(entry.year)! + entry.population);
            } else {
                populationTrends.set(entry.year, entry.population);
            }
        });

    const years: number[] = [];
    const populations: number[] = [];
    const sortedYears = Array.from(populationTrends.keys()).sort((a, b) => a - b);

    sortedYears.forEach(year => {
        years.push(year);
        populations.push(populationTrends.get(year)!);
    });

    return { years, populations };
}
const Prefdata = [
    { prefCode: 1, prefName: "北海道", region: "北海道" },
    { prefCode: 2, prefName: "青森県", region: "東北" },
    { prefCode: 3, prefName: "岩手県", region: "東北" },
    { prefCode: 4, prefName: "宮城県", region: "東北" },
    { prefCode: 5, prefName: "秋田県", region: "東北" },
    { prefCode: 6, prefName: "山形県", region: "東北" },
    { prefCode: 7, prefName: "福島県", region: "東北" },
    { prefCode: 8, prefName: "茨城県", region: "関東" },
    { prefCode: 9, prefName: "栃木県", region: "関東" },
    { prefCode: 10, prefName: "群馬県", region: "関東" },
    { prefCode: 11, prefName: "埼玉県", region: "関東" },
    { prefCode: 12, prefName: "千葉県", region: "関東" },
    { prefCode: 13, prefName: "東京都", region: "関東" },
    { prefCode: 14, prefName: "神奈川県", region: "関東" },
    { prefCode: 15, prefName: "新潟県", region: "中部" },
    { prefCode: 16, prefName: "富山県", region: "中部" },
    { prefCode: 17, prefName: "石川県", region: "中部" },
    { prefCode: 18, prefName: "福井県", region: "中部" },
    { prefCode: 19, prefName: "山梨県", region: "中部" },
    { prefCode: 20, prefName: "長野県", region: "中部" },
    { prefCode: 21, prefName: "岐阜県", region: "中部" },
    { prefCode: 22, prefName: "静岡県", region: "中部" },
    { prefCode: 23, prefName: "愛知県", region: "中部" },
    { prefCode: 24, prefName: "三重県", region: "近畿" },
    { prefCode: 25, prefName: "滋賀県", region: "近畿" },
    { prefCode: 26, prefName: "京都府", region: "近畿" },
    { prefCode: 27, prefName: "大阪府", region: "近畿" },
    { prefCode: 28, prefName: "兵庫県", region: "近畿" },
    { prefCode: 29, prefName: "奈良県", region: "近畿" },
    { prefCode: 30, prefName: "和歌山県", region: "近畿" },
    { prefCode: 31, prefName: "鳥取県", region: "中国" },
    { prefCode: 32, prefName: "島根県", region: "中国" },
    { prefCode: 33, prefName: "岡山県", region: "中国" },
    { prefCode: 34, prefName: "広島県", region: "中国" },
    { prefCode: 35, prefName: "山口県", region: "中国" },
    { prefCode: 36, prefName: "徳島県", region: "四国" },
    { prefCode: 37, prefName: "香川県", region: "四国" },
    { prefCode: 38, prefName: "愛媛県", region: "四国" },
    { prefCode: 39, prefName: "高知県", region: "四国" },
    { prefCode: 40, prefName: "福岡県", region: "九州" },
    { prefCode: 41, prefName: "佐賀県", region: "九州" },
    { prefCode: 42, prefName: "長崎県", region: "九州" },
    { prefCode: 43, prefName: "熊本県", region: "九州" },
    { prefCode: 44, prefName: "大分県", region: "九州" },
    { prefCode: 45, prefName: "宮崎県", region: "九州" },
    { prefCode: 46, prefName: "鹿児島県", region: "九州" },
    { prefCode: 47, prefName: "沖縄県", region: "九州" }
];
function getPrefNameByPrefCode(prefCode:PrefectureCode) {
    const result = Prefdata.find(pref => pref.prefCode === prefCode);
    return result ? result.prefName : "Prefecture not found";
}






export {transformInputToPrefTrend, extractPopulationTrends,Prefdata};