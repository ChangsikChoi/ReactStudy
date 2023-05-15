import React, { useState } from 'react';
import './App.css';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import AboutPage from './components/AboutPage';
import ShoppingList from './components/ShoppingList';
import MyButtonEvent from './components/MyButtonEvent';
import MyTable from './components/MyTable';

/*
1. 버튼 컴포넌트
2. jsx (about)
3. 스타일, 데이터 표현 (profile)
4. 조건부 렌더링 (app)
5. 리스트 렌더링 (shopping)
6. 이벤트 반응 (이벤트 버튼)
7. 화면 업데이트 + 훅 
8. props
*/

export type TableDataType = {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}[];

const tableData: TableDataType = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

function App() {
  //조건부 렌더링 1 => if / else
  // const isLoggedIn = true;

  // let content;
  // if (isLoggedIn) {
  //   content = <Profile />;
  // } else {
  //   content = <AboutPage />;
  // }

  //하위 컴포넌트 Prop 전달
  const [count, setCount] = useState<number>(0);
  function handleClick() {
    setCount(count + 1);
    // setCount((state) => state + 1);
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
      {/* <MyButton /> */}

      {/* 조건부 렌더링 1 */}
      {/* {content} */}
      {/* 조건부 렌더링2 => 삼항연산자 */}
      {/* {isLoggedIn ? <Profile /> : <AboutPage />} */}
      {/* 조건부 렌더링3 => 논리연산자 */}
      {/* {isLoggedIn && <Profile />} */}

      {/* 리스트 렌더링 */}
      {/* <ShoppingList /> */}

      {/* 이벤트 포함 버튼 */}
      {/* <MyButtonEvent /> */}

      {/* 컴포넌트간 데이터 공유 */}
      {/* props: 부모컴포넌트에서 자식컴포넌트에게 넘기는 데이터 */}
      {/* <MyButton2 count={count} onClick={handleClick} />
      <MyButton2 count={count} onClick={handleClick} /> */}

      <MyTable rows={tableData} />
    </div>
  );
}

export default App;

type MyButtonProps = {
  count: number;
  onClick: () => void;
};

function MyButton2({ count, onClick }: MyButtonProps) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
