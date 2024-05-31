import {
  extractPopulationTrends,
  filterDataByDateRange,
  getPrefNameByPrefCode,
  transformInputToPrefTrend,
} from "@/libs/utils"; // Update with the actual module path
import {
  Input,
  PopulationType,
  PrefectureCode,
  PrefTrend,
  trend,
} from "@/libs/types";

describe("filterDataByDateRange", () => {
  it("should filter data by date range", () => {
    const data: PrefTrend = {
      prefCode: 1,
      prefName: "Prefecture Name",
      data: [
        {
          label: "Total Population" as PopulationType,
          data: [
            { year: 2018, population: 900 },
            { year: 2019, population: 950 },
            { year: 2020, population: 1000 },
            { year: 2021, population: 1100 },
          ],
        },
      ],
    };
    const startDate = "2019-01-01";
    const endDate = "2020-12-31";
    const result = filterDataByDateRange(data, startDate, endDate);
    expect(result).toEqual({
      ...data,
      data: [
        {
          label: "Total Population" as PopulationType,
          data: [
            { year: 2019, population: 950 },
            { year: 2020, population: 1000 },
          ],
        },
      ],
    });
  });
});

describe("extractPopulationTrends", () => {
  it("should extract population trends from trend data", () => {
    const trend: trend = {
      label: "Total Population" as PopulationType,
      data: [
        { year: 2020, population: 1000 },
        { year: 2021, population: 1100 },
        { year: 2020, population: 200 },
      ],
    };
    const result = extractPopulationTrends(trend);
    expect(result).toEqual({
      years: [2020, 2021],
      populations: [1200, 1100],
    });
  });
});

describe("getPrefNameByPrefCode", () => {
  it("should return the prefecture name for a given prefecture code", () => {
    const prefCode: PrefectureCode = 1;
    const result = getPrefNameByPrefCode(prefCode);
    expect(result).toBe("北海道");
  });
});
describe("transformInputToPrefTrend", () => {
  it("should transform input data to prefecture trend", () => {
    const input: Input = {
      message: null,
      result: {
        boundaryYear: 2023,
        data: [
          {
            label: "総人口",
            data: [
              { year: 2010, value: 1000000 },
              { year: 2015, value: 950000 },
              { year: 2020, value: 900000 },
            ],
          },
          {
            label: "老年人口",
            data: [
              { year: 2010, value: 200000 },
              { year: 2015, value: 250000 },
              { year: 2020, value: 300000 },
            ],
          },
        ],
      },
    };

    const prefCode: PrefectureCode = 1;

    const expected = {
      prefCode: 1,
      prefName: "北海道",
      data: [
        {
          label: "総人口",
          data: [
            { year: 2010, population: 1000000 },
            { year: 2015, population: 950000 },
            { year: 2020, population: 900000 },
          ],
        },
        {
          label: "老年人口",
          data: [
            { year: 2010, population: 200000 },
            { year: 2015, population: 250000 },
            { year: 2020, population: 300000 },
          ],
        },
      ],
    };

    const result = transformInputToPrefTrend(prefCode, input);
    expect(result).toEqual(expected);
  });
});

// Test suite for getPrefNameByPrefCode
describe("getPrefNameByPrefCode", () => {
  it("should return the prefecture name for a given prefecture code", () => {
    const prefCode: PrefectureCode = 1;
    const result = getPrefNameByPrefCode(prefCode);
    expect(result).toBe("北海道");
  });

  it("should return the correct prefecture name for another prefecture code", () => {
    const prefCode: PrefectureCode = 2;
    const result = getPrefNameByPrefCode(prefCode);
    expect(result).toBe("青森県");
  });
});