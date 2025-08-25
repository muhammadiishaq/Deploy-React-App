import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* React default logo */}
        <img src={logo} className="App-logo" alt="logo" />

        <p>WELCOME TO Waqar bhai</p>

        {/* GitHub profile link with GitHub logo */}
        <a
          className="App-link"
          href="https://github.com/muhammadiishaq"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          {/* GitHub logo */}
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            style={{ width: "40px", height: "40px" }}
          />
          Check My GitHub Profile Thanks.
        </a>
      </header>
    </div>
  );
}

export default App;
