/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleClone] = useState(['남자 코트 추천', '강남 데이트 코스', '여기서 벚꽃봐야 됨']);
  let [like, likeClone] = useState([0, 0, 0]);
  let [modal, modalClone] = useState(false);

  let posts = '강남 고기 맛집' ;

  // function titleChange(){
  //   // titleClone(title = ['여자 코트 추천', title[1], title[2]]);
  //   let newTitle = [...title];
  //   newTitle[0] = '여자 코트 추천';
  //   titleClone(newTitle);
  // }

  // function listChange(){
  //   let listUp = [...title];
  //   listUp = listUp.sort();
  //   titleClone(listUp);
  // }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <button onClick={titleChange}>버튼</button>
      <button onClick={listChange}>정렬</button> */}

        {/* 하드코딩 했던거 */}
        {/* <div className="list">
          <h3>{title[0]} <span onClick={ () => {likeClone(like++)}}>👍</span>{like} </h3>
          <p>4월 8일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3>{title[1]}</h3>
          <p>4월 8일 발행</p>
          <hr/>
        </div>
        <div className="list">
          <h3>{title[2]}</h3>
          <p>4월 8일 발행</p>
          <hr/>
        </div> */}

        {/* 반복문으로 다시만들어보자 */}
        {
        title.map((a,i) => {
          return (
            <div className="list">
              <h3> {a}<span onClick={()=>{
                let copy = [...like];
                copy[i]++;
                likeClone(copy)
                }}>👍</span>{like[i]}</h3>
              <p>2월 18일 발행</p>
              <hr />
            </div>
          );
        })
        }



        {/* 3항 연산자 연습 + 토글 */}
        <button onClick={ ()=> {
          modalClone(!modal);
          }}
          >
            버튼
            </button>
            {modal === true ? <Modal/> : null }
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  )
}
export default App;
