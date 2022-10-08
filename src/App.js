/* eslint-disable */ //warning 메시지 제거

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//자주변경이 될거 같은 data는 state로 처리 

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([{제목:'남자코드 추천', 날짜:'2022-01-20'}, {제목:'강남우동 맛집', 날짜:'2022-03-15'}, {제목:'파이썬 독학', 날짜:'2022-04-10'}]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum] = useState(0);

  let [입력값, 입력값변경] = useState('');

  function 제목바꾸기(ii) {
    let 글제목복사 = [...글제목];
    글제목복사[ii].제목 = '여자코드 추천';
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

  function 새글입력() {
    if (입력값=='') {
      alert('새글내용을 적으세요');
    } else {
      let 글제목복사 = [...글제목];
      글제목복사.unshift({제목:입력값, 날짜:'2022-05-08'});
      글제목변경(글제목복사);

      let 따봉복사 = [...따봉];
      따봉복사.unshift(0);
      따봉변경(따봉복사);

      //입력값 초기화
      입력값변경('');

      console.log(입력값);

    }

  }

  function 글삭제(ii) {
    let 글제목복사 = [...글제목];
    글제목복사.splice(ii,1);
    글제목변경(글제목복사);
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
        글제목.map(function(data, i) {
          let {제목, 날짜} = data;
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{viewModal(i)}}>{제목} <span onClick={(e)=>{e.stopPropagation();따봉증가(i)}}>👍</span> {따봉[i]} </h4>
              <p>{날짜}</p>
              <button onClick={()=>{글삭제(i)}}>삭제</button>
            </div>

          )
        })
      }

      <input onChange={(e)=>{ 입력값변경(e.target.value)}} value={입력값}></input> 
      <button onClick={(e)=>{ 새글입력() } }>등록</button>

      {
        modal==true ? <Modal 글제목={글제목} color={'skyblue'} 제목바꾸기={제목바꾸기} titleNum={titleNum} />:null
      }

      

    </div>
  );

}

function Modal(props) {
  return (
    <div className="modal" style={{background:props.color}}>
      <h4>{props.글제목[props.titleNum].제목}</h4>
      <p>{props.글제목[props.titleNum].날짜}</p>
      <p>상세내용</p>
      <button onClick={()=>{props.제목바꾸기(props.titleNum)}}>글수정</button>
    </div>
  );
}

export default App;
