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
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;