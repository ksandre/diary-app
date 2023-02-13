import { FC } from 'react';
import * as Models from "models";
import dayjs from 'dayjs';
import weekOfYear from "dayjs/plugin/weekOfYear"
import localeKa from "dayjs/locale/ka"

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

const weekDays: { [index: number]: string } = {
    0: "კვირა",
    1: "ორშაბათი",
    2: "სამშაბათი",
    3: "ოთხშაბათი",
    4: "ხუთშაბათი",
    5: "პარასკევი",
    6: "შაბათი",
}

type BottomSingleItemProps = {
    element: Models.DiaryResponse;
    activeDiaryId?: string;
    setActiveDiaryId: (uniqueId: string) => void
}

const BottomSingleItem: FC<BottomSingleItemProps> = ({ element, activeDiaryId, setActiveDiaryId }) => {

    function renderDate(date: string) {
        dayjs.extend(weekOfYear);
        if (dayjs(date).locale(localeKa).week() == dayjs().locale(localeKa).week()) {
            return weekDays[dayjs(date).day()];
        }
        return dayjs(date).locale(localeKa).format('DD MMMM, YYYY');
    }

    return (
        <StyledCard
            elevation={2}
            key={element.uniqueId} onClick={() => setActiveDiaryId(element.uniqueId)}
            className={element.uniqueId == activeDiaryId ? "active" : ""}
        >
            <Stack spacing={2}>
                <div>{renderDate(element.date)}</div>
                <div>{element.description.substring(0, 20)}...</div>
                <div>შეფასება: {element.rating}</div>
            </Stack>
        </StyledCard>
    )
}

export default BottomSingleItem;

const StyledCard = styled(Card)(`
    min-width: 150px;
    margin: 0px 25px;
    padding: 50px 20px;
    cursor: pointer;

    &.active {
        background-color: #eee;
    }

    &:hover {
        background-color: #eee;
    }
`);
