import React, {useEffect, useState} from 'react';
import Input from "../../../utils/input/Input";

const SelectDate = () => {
    const [date, setDate] = useState("")

    return (
        <div>
            <Input value={date} setValue={setDate} type="text" placeholder="Введите дату yyyy-MM-dd..."/>
        </div>
    );
};

export default SelectDate;
