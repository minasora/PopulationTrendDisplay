import getData from "@/libs/api";
import { transformInputToPrefTrend } from "@/libs/utils";
import { PrefectureCode } from '@/libs/types';
import fetchMock from 'jest-fetch-mock';
jest.mock('@/libs/utils', () => ({
    transformInputToPrefTrend: jest.fn(),
}));

describe('getData', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('should fetch data and transform it', async () => {
        const mockData = {
            result: {
                data: [
                    {
                        label: 'Total Population',
                        data: [
                            { year: 2020, value: 1000 },
                            { year: 2021, value: 1100 }
                        ]
                    }
                ]
            }
        };
        const transformedData = {
            prefCode: 1,
            prefName: 'Prefecture Name',
            data: [
                {
                    label: 'Total Population',
                    data: [
                        { year: 2020, population: 1000 },
                        { year: 2021, population: 1100 }
                    ]
                }
            ]
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockData));
        (transformInputToPrefTrend as jest.Mock).mockReturnValue(transformedData);

        const prefCode: PrefectureCode = 1;
        const result = await getData(prefCode);

        expect(fetchMock).toHaveBeenCalledWith(
            `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
            {
                method: 'GET',
                headers: {
                    'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY
                }
            }
        );
        expect(transformInputToPrefTrend).toHaveBeenCalledWith(prefCode, mockData);
        expect(result).toEqual(transformedData);
    });

    it('should throw an error if the fetch fails', async () => {
        fetchMock.mockRejectOnce(new Error('Failed to fetch'));

        const prefCode: PrefectureCode = 1;

        await expect(getData(prefCode)).rejects.toThrow('Failed to fetch data');
    });
});
