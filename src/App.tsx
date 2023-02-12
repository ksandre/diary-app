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
    date: dayjs().format(),
    description: "",
    rating: 0,
  },
  {
    uniqueId: "3",
    date: dayjs().format(),
    description: "",
    rating: 0,
  },
  {
    uniqueId: "4",
    date: dayjs().format(),
    description: "",
    rating: 0,
  },
  {
    uniqueId: "5",
    date: dayjs().format(),
    description: "",
    rating: 0,
  }
]

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDiaries(objects))
  }, [dispatch])

  return (
    <PageWrapper />
  );
}

export default App;