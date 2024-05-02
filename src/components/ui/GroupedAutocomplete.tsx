'use client'
import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { CheckBoxOutlineBlank, CheckBox } from '@mui/icons-material';
import { Prefdata } from '@/libs/utils';
const options = Prefdata;

const GroupedAutocomplete = () => {

    const [selectedProvinces, setSelectedProvinces] = useState([]);

    const handleChange = (event, value) => {
        setSelectedProvinces(value);
    };
    return (
        <div>
        <Autocomplete
            multiple
            options={options.sort((a, b) => -b.region.localeCompare(a.region))}
            groupBy={(option) => option.region}
            getOptionLabel={(option) => option.prefName}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={<CheckBoxOutlineBlank fontSize="small" />}
                        checkedIcon={<CheckBox fontSize="small" />}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.prefName}
                </li>
            )}
            style={{ width: 300 }}
            onChange={handleChange}
            renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Select Options" placeholder="Favorites" />
            )}
        />
        <div>
            <h3>Selected Provinces:</h3>
            <ul>
                {selectedProvinces.map((province, index) => (
                    <li key={index}>{province.prefName}</li>
                ))}
            </ul>
        </div>

</div>
    )
}

export default GroupedAutocomplete;