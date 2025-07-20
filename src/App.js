import React from "react";
import "./App.css";

function App() {
  return (
    <main className="App">
      <section className="hero">
        <h1>NeuronForTech</h1>
        <p>Artificial intelligence powering your innovation</p>
        <div className="buttons">
          <button>Work with us</button>
          <button>Discover our frameworks</button>
        </div>
      </section>

      <section className="services">
        <h2>Our AI & Tech Services</h2>
        <ul>
          <li><strong>AI & Data Engineering:</strong> Model deployment (ModelOps), cloud integration (AWS, K8s), generative AI</li>
          <li><strong>AI Frameworks:</strong> Internal tools like ModelOps4J, automation, monitoring, AI CI/CD</li>
          <li><strong>Consulting & Architecture:</strong> Infrastructure audits, cloud architecture, tech coaching</li>
        </ul>
      </section>

      <section className="solutions">
        <h2>Our Solutions</h2>
        <ul>
          <li><strong>ModelOps4J:</strong> Java framework to serve and monitor AI models (coming soon)</li>
          <li><strong>Contextify:</strong> AI agent with long-term memory and business contextualization (coming soon)</li>
          <li><strong>QueryAI:</strong> Query your data with AI, no SQL needed (on demand)</li>
        </ul>
      </section>

      <section className="about">
        <h2>About NeuronForTech</h2>
        <p>
          Founded by a senior freelance expert, NeuronForTech designs AI solutions for companies ready to scale.
          Over 12 years of experience in backend, cloud, and data. Clients: startups, tech SMEs, large enterprises.
        </p>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>📧 contact@neuronfortech.com</p>
        <p>📍 Based in France, available for remote or hybrid work</p>
        <p>💼 LinkedIn – GitHub – Calendly</p>
      </section>
    </main>
  );
}

export default App;