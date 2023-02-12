import React, { useEffect, useState } from 'react';
import * as Models from "models";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "redux/store";
import { setDiaries } from 'redux/slices/diarySlice';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import DiarySettings from 'components/Diary/DiarySettings';

function PageWrapper() {
    const diaries = useSelector((state: RootState) => state.diary.diaries);
    const [activeDiaryId, setActiveDiaryId] = useState<string>();
    const selectedDiaryRating = diaries.find(element => element.uniqueId == activeDiaryId)?.rating;

    return (
        <Background rating={selectedDiaryRating && selectedDiaryRating || 0}>
            <Container maxWidth="lg" style={
                {
                    height: "100vh",
                    padding: "50px 0px",
                    boxSizing: "border-box"
                }
            }>
                <Stack spacing={2} justifyContent="space-between" style={{ height: "100%" }}>
                    <Stack spacing={2}>
                        <Paper elevation={2} style={{ padding: "50px" }}>
                            {activeDiaryId ?
                                <DiarySettings activeDiaryId={activeDiaryId} />
                                :
                                <div>გთხოვთ, აირჩიო დღიური</div>}
                        </Paper>
                    </Stack>
                    <Paper elevation={2} style={{ padding: "20px" }}>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                            style={{ padding: "50px 0px", overflow: 'auto' }}
                        >
                            {diaries && diaries.length > 0 && diaries.map((element) => {
                                return (
                                    <Card elevation={2} key={element.uniqueId} onClick={() => setActiveDiaryId(element.uniqueId)} style={{ minWidth: "150px", margin: "0px 25px", padding: "50px 20px" }}>
                                        <Stack spacing={2}>
                                            <div>{element.date}</div>
                                            <div>{element.description.substring(0, 20)}...</div>
                                            <div>შეფასება: {element.rating}</div>
                                        </Stack>
                                    </Card>
                                )
                            })
                            }
                            <Card elevation={2} key="tommorow" style={{ minWidth: "150px", opacity: 0.5, margin: "0px 25px", padding: "50px 20px" }}>
                                <Stack spacing={2}>
                                    <div>{dayjs().add(1, 'day').format()}</div>
                                    <div>...</div>
                                    <div>შეფასება: 0</div>
                                </Stack>
                            </Card>
                        </Stack>
                    </Paper>
                </Stack>
            </Container>
        </Background>
    )
}

export default PageWrapper;


type BackgroundProps = {
    rating: number;
}

const Background = styled('div')<BackgroundProps>(

    ({ rating }) => `
      background-image: ${rating == 1 ? 'linear-gradient(to right, #fd746c, #ff9068);' : "blue"},
    `
);
