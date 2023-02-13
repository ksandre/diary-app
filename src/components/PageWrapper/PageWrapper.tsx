import { useState } from 'react';
import * as Models from "models";
import { useSelector } from 'react-redux';
import { RootState } from "redux/store";
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import DiarySettings from 'components/Diary/DiarySettings';
import BottomSingleItem from 'components/Diary/BottomSingleItem';

function PageWrapper() {
    const diaries = useSelector((state: RootState) => state.diary.diaries);
    const [activeDiaryId, setActiveDiaryId] = useState<string>();
    const selectedDiaryRating = diaries.find(element => element.uniqueId == activeDiaryId)?.rating;

    function parsedDiaries() {
        let diariesCopy: Models.DiaryResponse[] = JSON.parse(JSON.stringify(diaries));

        diariesCopy.sort(
            (a, b) => Date.parse(a.date) - Date.parse(b.date)
        )

        return diariesCopy;
    }

    return (
        <Background rating={selectedDiaryRating ? selectedDiaryRating : 0}>
            <Container maxWidth="lg" className="Container">
                <Stack spacing={2} justifyContent="space-between" sx={{ height: "100%" }}>
                    <Stack spacing={2}>
                        <Paper elevation={2} sx={{ p: "50px" }}>
                            {activeDiaryId ?
                                <DiarySettings activeDiaryId={activeDiaryId} />
                                :
                                <div>გთხოვთ, აირჩიო დღიური</div>}
                        </Paper>
                    </Stack>
                    <Paper elevation={2} sx={{ p: "20px" }}>
                        <Stack
                            direction="row"
                            divider={<Divider orientation="vertical" flexItem />}
                            spacing={2}
                            style={{ padding: "50px 0px", overflow: 'auto' }}
                        >
                            {parsedDiaries().map((element) => {
                                return (
                                    <BottomSingleItem key={element.uniqueId} element={element} activeDiaryId={activeDiaryId} setActiveDiaryId={setActiveDiaryId} />
                                )
                            })
                            }
                            <Card elevation={2} className="tommorow">
                                <Stack spacing={2}>
                                    <div style={{ fontSize: "40px", fontWeight: "bold" }}>ხვალ</div>
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

const bgColors: { [index: number]: string } = {
    0: "linear-gradient(to right, #757f9a, #d7dde8)",
    1: "linear-gradient(to right, #f85032, #e73827)",
    2: "linear-gradient(to right, #fd746c, #ff9068)",
    3: "linear-gradient(to right, #2193b0, #6dd5ed)",
    4: "linear-gradient(to right, #11998e, #38ef7d)",
    5: "linear-gradient(to right, #56ab2f, #a8e063)",
}

const Background = styled('div')<BackgroundProps>(
    ({ rating }) => `
      background-image: ${bgColors[rating]};

      .Container {
        height: 100vh;
        padding: 50px 0px;
        box-sizing: border-box;
      }

      .tommorow {
        min-width: 150px;
        opacity: 0.5;
        margin: 0px 25px;
        padding: 50px 20px;
      }
    `
);
