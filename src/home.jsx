import React, { useState } from 'react';
import './home.css'; // Assuming you have some basic CSS for styling
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
        <div className="hero">
            <div className="alert">
                <div className="message">
                    <p>JawirAI is under developing</p>
                </div>
            </div>
            <h1>Experience Seamless Interaction With JawirAI</h1>
            <p>~ Powered by Groq AI</p>
            <div className="button">
                <Link className='left' to="/ai">Try JawirAI</Link>
                <a className='right' href="https://console.groq.com/docs/quickstart">Groq Docs</a>
            </div>
        </div>
        <div className="features">
                <h1>Features</h1>
                <div className="features-card">
                    <div className="card">
                        <h2>Real-time AI Responses</h2>
                        <hr />
                        <p>The chat AI application is designed to provide instant and real-time responses to user inputs. This allows users to interact with the AI as if they were conversing with a human, offering a quick and efficient experience.</p>
                    </div>
                    <div className="card">
                        <h2>Integration with the Groq AI API</h2>
                        <hr />
                        <p>Integration with the Groq AI API is easy and straightforward, enabling developers to quickly implement advanced AI capabilities into their applications.</p>
                    </div>
                    <div className="card">
                        <h2>User-friendly Interface</h2>
                        <hr />
                        <p>The user interface is designed with a focus on ease of use and convenience. An intuitive layout ensures users can interact with the application effortlessly.</p>
                    </div>
                </div>
        </div>
        <footer>
            <div className='content'>
                <p>About JawirAI</p>
                <li><p>Vite accelerates development pipelines with fast build times, React enables the creation of dynamic user interfaces, while Groq AI provides additional intelligence with natural language processing. These three technologies combined enable the development of powerful, efficient and intelligent web applications, significantly improving the user experience.</p></li>
            </div>
            <div className='content'>
                <p>Links</p>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Technology</a></li>
            </div>
            <div className='content'>
                <p>Developer</p>
                <li><a href="https://github.com/yogawan">GitHub ~ Yogawan</a></li>
                <li><a href="https://g.dev/yogawan">GD Profile</a></li>
            </div>
            <div className='content'>
                <p>JawirAI</p>
                <li><a href="#">Copyright@yogawan 2024</a></li>
            </div>
        </footer>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ai">JawirAI</Link></li>
            </ul>
        </nav>
    </div>
  );
};

export default Home;
