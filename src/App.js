/* eslint-disable */ //warning 메시지 제거

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//자주변경이 될거 같은 data는 state로 처리 

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코드 추천', '강남우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState(0);

  function 제목바꾸기() {
    let 글제목복사 = [...글제목];
    글제목복사[0] = '여자코드 추천';
    글제목변경 (글제목복사);
  }
  
  function 가나다정렬() {
    let 글제목복사 = [...글제목];
    글제목복사.sort();
    글제목변경(글제목복사);
  }

  function 따봉증가(ii) {
    let 따봉복사 = [...따봉];
    따봉복사[ii] = 따봉복사[ii]+1;
    따봉변경(따봉복사);
  }

  function viewModal(ii) {
    setTitleNum(ii);
    setModal(true);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'white', fontSize:'16px'}}>React Blog</h4>
      </div>
      <button onClick={가나다정렬}>가나다순정렬</button>
      <button onClick={제목바꾸기}>글수정</button>
      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list" onClick={()=>{ setModal(!modal)}}>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{viewModal(i)}}>{글제목[i]} <span onClick={()=>{따봉증가(i)}}>👍</span> {따봉[i]} </h4>
              <p>2월 17일 발행</p>
            </div>

          )
        })
      }

      {
        modal==true ? <Modal 글제목={글제목} color={'skyblue'} 제목바꾸기={제목바꾸기} titleNum={titleNum} />:null
      }

      

    </div>
  );

}

function Modal(props) {
  return (
    <div className="modal" style={{background:props.color}}>
      <h4>{props.글제목[props.titleNum]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.제목바꾸기}>글수정</button>
    </div>
  );
}

export default App;
