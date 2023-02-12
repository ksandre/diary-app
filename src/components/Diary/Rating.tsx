import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "redux/store";
import { setRating } from 'redux/slices/diarySlice';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons: {
    [index: string]: {
        icon: React.ReactElement;
        label: string;
    };
} = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" fontSize='large' />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" fontSize='large' />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" fontSize='large' />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" fontSize='large' />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" fontSize='large' />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

type RadioGroupRatingProps = {
    activeDiaryId: string;
}


const labels: { [index: string]: string } = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
};

const RadioGroupRating: FC<RadioGroupRatingProps> = ({ activeDiaryId }) => {

    const dispatch = useDispatch();
    const diaries = useSelector((state: RootState) => state.diary.diaries);
    const selectedDiaryRating = diaries.find(element => element.uniqueId == activeDiaryId)?.rating;

    function handleRatingChange(newRating: number) {
        dispatch(
            setRating(
                {
                    id: activeDiaryId,
                    rating: newRating
                }
            )
        );
    }

    return (
        <Stack direction="row" alignItems="center">
            <StyledRating
                name="highlight-selected-only"
                size="large"
                IconContainerComponent={IconContainer}
                getLabelText={(value: number) => customIcons[value].label}
                value={selectedDiaryRating}
                onChange={(event, newRating) => {
                    newRating && handleRatingChange(newRating);
                }}
                highlightSelectedOnly
            />
            {selectedDiaryRating && <Box sx={{ ml: 2 }}>{labels[selectedDiaryRating]}</Box>}
        </Stack>
    )
}

export default RadioGroupRating;