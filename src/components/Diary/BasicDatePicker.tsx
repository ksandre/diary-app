import { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "redux/store";
import { setDate } from 'redux/slices/diarySlice';

import { Dayjs } from 'dayjs';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type BasicDatePickerProps = {
    activeDiaryId: string;
}

const BasicDatePicker: FC<BasicDatePickerProps> = ({ activeDiaryId }) => {
    const dispatch = useDispatch();
    const diaries = useSelector((state: RootState) => state.diary.diaries);

    function handleDateChange(newDate: string) {
        dispatch(
            setDate(
                {
                    id: activeDiaryId,
                    date: newDate
                }
            )
        );
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ka"}>
            <DatePicker
                label="თარიღი"
                value={diaries.find(element => element.uniqueId == activeDiaryId)?.date}
                onChange={(newDate: Dayjs | null) => {
                    newDate && handleDateChange(newDate.format());
                }}
                renderInput={(params) => <TextField {...params} />}
                disableFuture={true}
            />
        </LocalizationProvider>
    );
}

export default BasicDatePicker;