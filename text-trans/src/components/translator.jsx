import React, { useState } from 'react';
import axios from 'axios';

const languages = [
  { code: 'hi', name: 'Hindi' },
  { code: 'fr', name: 'French' },
  { code: 'es', name: 'Spanish' },
  { code: 'de', name: 'German' },
  { code: 'ta', name: 'Tamil' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'ur', name: 'Urdu' },
  { code: 'kn', name: 'Kannada' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ja', name: 'Japanese' },
  { code: 'te', name: 'Telugu' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'zh-CN', name: 'Chinese (Simplified)' },
  { code: 'ar', name: 'Arabic' },
];

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [detectedLang, setDetectedLang] = useState('');
  const [targetLang, setTargetLang] = useState('hi');
  const [loading, setLoading] = useState(false);

  const detectLanguage = async (text) => {
    const detectOptions = {
      method: 'POST',
      url: 'https://google-translator9.p.rapidapi.com/v2/detect',
      headers: {
        'x-rapidapi-key': '6f562366b0msh15ce51b29c0c171p1be393jsn81d12f13cb4f',
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      data: { q: text },
    };

    const response = await axios.request(detectOptions);
    return response.data.data.detections[0].language;
  };

  const translateText = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setTranslatedText('');
    setDetectedLang('');

    try {
      const sourceLang = await detectLanguage(inputText);
      setDetectedLang(sourceLang);

      const translateOptions = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': '6f562366b0msh15ce51b29c0c171p1be393jsn81d12f13cb4f',
          'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        data: {
          q: inputText,
          source: sourceLang,
          target: targetLang,
          format: 'text',
        },
      };

      const response = await axios.request(translateOptions);
      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated);
    } catch (error) {
      console.error(error);
      setTranslatedText('Translation failed.');
    } finally {
      setLoading(false);
    }
  };

  const buttonStyle = {
    alignItems: 'center',
    backgroundImage: 'linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb)',
    border: 0,
    borderRadius: '8px',
    boxShadow: 'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
    boxSizing: 'border-box',
    color: '#ffffff',
    display: 'flex',
    fontSize: '18px',
    justifyContent: 'center',
    lineHeight: '1em',
    maxWidth: '100%',
    minWidth: '140px',
    padding: '3px',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    touchAction: 'manipulation',
    whiteSpace: 'nowrap',
    cursor: loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s',
    opacity: loading ? 0.6 : 1,
  };

  const spanStyle = {
    backgroundColor: 'rgb(5, 6, 45)',
    padding: '16px 24px',
    borderRadius: '6px',
    width: '100%',
    height: '100%',
    transition: '300ms',
    display: 'flex',
    justifyContent: 'center',
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = 'none';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'rgb(5, 6, 45)';
  };

  const handleMouseDown = (e) => {
    e.currentTarget.style.transform = 'scale(0.9)';
  };

  const handleMouseUp = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1  style={buttonStyle} className="text-2xl font-bold text-center">🌐 Text Translator</h1>

      <textarea
        className="w-full p-3 border rounded-md"
        rows={4}
        placeholder="Enter text in English..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <select
        className="w-full p-2 border rounded-md"
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      {/* Custom Inline Styled Translate Button */}
      <button
        style={buttonStyle}
        onClick={translateText}
        disabled={loading}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <span
          style={spanStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {loading ? 'Translating...' : 'Translate'}
        </span>
      </button>

      {detectedLang && (
        <p className="text-sm text-gray-500">
          Detected Language: <strong>{detectedLang}</strong>
        </p>
      )}

      {translatedText && (
        <div className="p-4 bg-gray-100 rounded-md">
          <strong>Translated:</strong>
          <p className="mt-2">{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;

