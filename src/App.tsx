import React, { useEffect } from 'react';
import * as Models from "models";
import { useDispatch } from 'react-redux';
import { setDiaries } from 'redux/slices/diarySlice';
import dayjs from 'dayjs';
import PageWrapper from 'components/PageWrapper/PageWrapper';

const objects: Models.DiaryResponse[] = [
  {
    uniqueId: "1",
    date: dayjs().format(),
    description: "",
    rating: 0,
  },
  {
    uniqueId: "2",
    date: dayjs().add(-1, 'day').format(),
    description: "",
    rating: 0,
  },
  {
    uniqueId: "3",
    date: dayjs().add(-2, 'day').format(),
    description: "",
    rating: 0,
  },
  {
    uniqueId: "4",
    date: dayjs().add(-3, 'day').format(),
    description: "",
    rating: 0,
  },
  {
    uniqueId: "5",
    date: dayjs().add(-4, 'day').format(),
    description: "",
    rating: 0,
  }
]

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('diaryDB') != null) {
      dispatch(setDiaries(JSON.parse(localStorage.getItem('diaryDB') as string)));
    } else {
      dispatch(setDiaries(objects))
    }
  }, [dispatch])

  return (
    <PageWrapper />
  );
}

export default App;