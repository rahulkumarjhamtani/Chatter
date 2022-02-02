// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App

import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';

import './App.css';

// const projectID = '4175a0e2-a95c-49cb-bbb3-40056d23fc05';

const App = () => {
  // if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      offset={6}
      height="100vh"
      projectID="4175a0e2-a95c-49cb-bbb3-40056d23fc05"
      userName="Rahul"
      userSecret="1234"
      renderCharFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;