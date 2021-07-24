import React from 'react';

import useSpeechToText from './Hooks';

import micIcon from './mic.svg';

import './App.css';

export default function App() {

  var {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: true,
    crossBrowser: true,
    googleApiKey: 'AIzaSyBAwyfhgmzXyVDhaWYAH5c42FJfPe6IN50', // mohammed aljouei
    //process.env.REACT_APP_API_KEY,
    speechRecognitionProperties: { interimResults: true },
    timeout: 30000 // 30 sec
  });
  
   
    var uniqueChars = [...new Set(results)];
    var arr =  ["الحمد لله الذي انزل على عبده الكتاب ولم يجعل له عوجا", "قيما لينذر باسا شديدا من لدنه ويبشر المؤمنين الذين يعملون الصالحات ان لهم اجرا حسنا", "ماكثين فيه ابدا", "وينذر الذين قالوا اتخذ الله ولدا"]; // best thing??
//الحمد لله الذي انزل على عبده الكتاب ولم يجعل له عوجا قيما لينذر باسا شديدا من لدنه ويبشر المؤمنين الذين يعملون الصالحات ان لهم اجرا حسنا ماكثين فيه ابدا وينظر الذين قالوا اتخذ الله ولدا
    for (let index = 0; index < uniqueChars.length; index++) {
      if (uniqueChars[index]!= arr[index]) {
        alert('خطأ، أعد الآيه بوركت');
        results.pop();
      }
      
    }



      console.log(uniqueChars);
      uniqueChars=[];
 


  if (error) {
    return (
      <div
        style={{
          maxWidth: '600px',
          margin: '100px auto',
          textAlign: 'center'
        }}
      >
        <p>
          {error}
          <span style={{ fontSize: '3rem' }}>🤷‍</span>
        </p>
      </div>
    );
  }





  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '100px auto',
        textAlign: 'center'
      }}
    >
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        <img data-recording={isRecording} src={micIcon} alt="" />
      </button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result} </li>
          
        
           
        ))}

       
   
        {interimResult && <li>{interimResult}</li>}
        
      </ul>
      <h3> رسالة المغيب لك : {isRecording.toString() == 'false'? 'اقرأ بعد رؤيتك الآيه على الشاشة':'انا استمع اليك الان'}</h3>

    </div>
  );
}
