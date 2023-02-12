import React, { FC } from 'react';

import Stack from '@mui/material/Stack';

import BasicDatePicker from './BasicDatePicker';
import TextFieldMultiline from './TextFieldMultiline';
import Rating from './Rating';

type DiarySettingsProps = {
    activeDiaryId: string;
}

const DiarySettings: FC<DiarySettingsProps> = ({ activeDiaryId }) => {
    return (
        <Stack spacing={5}>
            <Stack direction="row" spacing={5}>
                <BasicDatePicker activeDiaryId={activeDiaryId} />
            </Stack>
            <Stack>
                <TextFieldMultiline activeDiaryId={activeDiaryId} />
            </Stack>
            <Stack direction="row" spacing={5}>
                <Rating activeDiaryId={activeDiaryId} />
            </Stack>
        </Stack>
    )
}

export default DiarySettings;