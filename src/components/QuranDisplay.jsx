import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './QuranDisplay.css'; 

const QuranDisplay = () => {
  const [quranData, setQuranData] = useState([]);

  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await axios.get(' http://api.alquran.cloud/v1/quran/{{edition}}'); 

        setQuranData(response.data);
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };

    fetchQuranData();
  }, []);

  return (
    <div className="quran-display">
      <h1 className="quran-display__title">Quran Display</h1>
      {quranData.map((verse) => (
        <div key={verse.id} className="quran-verse">
          <h2 className="quran-verse__chapter">{verse.chapter}</h2>
          <p className="quran-verse__text">{verse.text}</p>
        </div>
      ))}
    </div>
  );
};

export default QuranDisplay;
