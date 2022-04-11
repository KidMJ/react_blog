/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleClone] = useState(['남자 코트 추천', '강남 데이트 코스', '여기서 벚꽃봐야 됨']);
  let [like, likeClone] = useState([0, 0, 0]);
  let [modal, modalClone] = useState(false);
  let [titleClick, titleClickClone] = useState(0);
  let [inputData,inputDataClone] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
     
      {
        title.map((a,i) => {
          return (
            <div className="list" key={i}> 
              <h3 onClick={()=>{titleClickClone(i)}}> {a}<span onClick={()=>{
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
      
        <div className='publish'>
          <input onChange={ (e)=> {inputDataClone(e.target.value)}}/>
          <button onClick={ ()=> {
            let arrayCopy = [...title];
            arrayCopy.unshift(inputData);
            titleClone(arrayCopy);
          }}>저장</button>
        </div>

        <button onClick={ ()=>{modalClone(!modal)}}> 상세정보</button>
        {
          modal === true
          ? <Modal title={title} titleClick={titleClick}></Modal>
          : null
        }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
          <h2>{props.title[props.titleClick]}</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
  )
}
export default App;
