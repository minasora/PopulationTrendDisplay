'use server'
import Image from "next/image";
import {TrendGraph} from "@/components/chart/TrendGraph";
import getData from "@/libs/api";
import GroupedAutocomplete from "@/components/ui/GroupedAutocomplete";

export default async function Page() {
    const data = await getData(4);
    const dataArray  = [data]
    return (<div>
    <div>123</div>
    <div>{JSON.stringify(data)}</div>
        <GroupedAutocomplete/>
    {/*<TrendGraph {...dataArray}/>*/}
    </div>)
}


