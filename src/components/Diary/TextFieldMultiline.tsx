import React, { ChangeEventHandler, FC } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "redux/store";
import { setDescription } from 'redux/slices/diarySlice';


import TextField from '@mui/material/TextField';

type TextFieldMultilineProps = {
    activeDiaryId: string;
}

const TextFieldMultiline: FC<TextFieldMultilineProps> = ({ activeDiaryId }) => {
    const dispatch = useDispatch();
    const diaries = useSelector((state: RootState) => state.diary.diaries);
    const selectedDiaryDescription = diaries.find(element => element.uniqueId == activeDiaryId)?.description;

    function handleDescriptionChange(newDescription: string) {
        dispatch(
            setDescription(
                {
                    id: activeDiaryId,
                    description: newDescription
                }
            )
        );
    }

    return (
        <TextField
            id={activeDiaryId}
            label="აღწერა"
            multiline
            rows={4}
            value={selectedDiaryDescription}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                handleDescriptionChange(e.currentTarget.value);
            }}
        />
    )
}

export default TextFieldMultiline