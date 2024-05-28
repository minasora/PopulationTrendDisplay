'use sever'
import {transformInputToPrefTrend} from './utils';
import {PrefectureCode} from "@/libs/types";
async function getData(prefCode: PrefectureCode) {
    const url = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`;

    const options = {
        method: 'GET',
        headers: {
            'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
        }
    };
    // @ts-ignore
    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return transformInputToPrefTrend(prefCode, await res.json());
}


export default getData;
