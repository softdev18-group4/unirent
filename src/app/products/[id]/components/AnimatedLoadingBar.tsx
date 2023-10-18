import React from 'react';

const AnimatedLoadingBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '50%',
          height: '4px',
          backgroundColor: '#ddd',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#FF6E31',
            position: 'absolute',
            animation: 'loading 2s linear infinite', // CSS animation for the loading effect
          }}
        />
        <style>
          {`
          @keyframes loading {
            0% {
              width: 0;
            }
            50% {
              width: 50%;
            }
            100% {
              width: 100%;
            }
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default AnimatedLoadingBar;
