import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import HomePage from './src/homepage.jsx';
import TodoList from './src/todolist.jsx';
import Welcome from './src/welcome.jsx';
import s from 'styles/index.scss';


function App() {
  return (
    <div className={ s('virtual-body') }>
      <div className={ s('header') }>
        <div className={ s('title') }>Welcome to ツールズ!</div>
      </div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Welcome/>}/>
          <Route exact path='/todolist' element={<TodoList/>}/>
          <Route exact path='/styling-tools' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
)

root.render(
    <App />
);
