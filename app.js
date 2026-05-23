const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CI/CD Deployment</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #0f172a, #1e293b, #0f766e);
        font-family: Arial, sans-serif;
        overflow: hidden;
      }

      .container {
        text-align: center;
        padding: 60px;
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(12px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        animation: float 3s ease-in-out infinite;
      }

      h1 {
        color: #ffffff;
        font-size: 42px;
        line-height: 1.5;
      }

      span {
        color: #38bdf8;
      }

      .badge {
        margin-top: 25px;
        display: inline-block;
        padding: 10px 22px;
        border-radius: 30px;
        background: #14b8a6;
        color: white;
        font-size: 14px;
        letter-spacing: 1px;
      }

      .circle {
        position: absolute;
        border-radius: 50%;
        background: rgba(255,255,255,0.08);
        animation: move 10s linear infinite;
      }

      .circle:nth-child(1) {
        width: 200px;
        height: 200px;
        top: -50px;
        left: -50px;
      }

      .circle:nth-child(2) {
        width: 300px;
        height: 300px;
        bottom: -100px;
        right: -100px;
      }

      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      @keyframes move {
        0% {
          transform: rotate(0deg) translateX(20px) rotate(0deg);
        }
        100% {
          transform: rotate(360deg) translateX(20px) rotate(-360deg);
        }
      }
    </style>
  </head>

  <body>

    <div class="circle"></div>
    <div class="circle"></div>

    <div class="container">
      <h1>
        CI/CD Deployment <br>
        using <span>Node.js</span><br>
        by <span>Samiksha Kamble</span>
      </h1>

      <div class="badge">
        🚀 Deployment Successful
      </div>
    </div>

  </body>
  </html>
  `);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
