// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './UrlShortener.css';

function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/api/shorten', {
        originalUrl: originalUrl
      });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="url-shortener-card">
      <h2 className="url-shortener-title">URL Shortener</h2>
      <form className="url-shortener-form" onSubmit={handleSubmit}>
        <label className="url-shortener-label">
          Original URL:
          <input
            className="url-shortener-input"
            type="text"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </label>
        <button className="url-shortener-button" type="submit">Shorten URL</button>
      </form>
      {shortUrl && (
        <div className="url-shortener-shortened-url">
          <p className="url-shortener-shortened-url-text">Shortened URL:</p>
          <a className="url-shortener-shortened-url-link" href={`http://localhost:3006/api/${shortUrl}`} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default UrlShortener;
