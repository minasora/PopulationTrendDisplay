'use sever'
import {transformInputToPrefTrend} from './utils';
import {PrefectureCode} from "@/libs/types";
async function getData(prefCode: PrefectureCode) {
    const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;

    const options = {
        method: 'GET',
        headers: {
            'X-API-KEY': 'L9ixiqey27OWaotJ4p2WIs1hsc7r3R7zl58OnFga'
        }
    };

    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return transformInputToPrefTrend(prefCode, await res.json());
}


export default getData;
