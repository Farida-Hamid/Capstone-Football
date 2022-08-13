import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Leagues from './components/leagues';
import { recieveLeagues } from './redux/teams';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Info from './components/info';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const leagueList = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => async () => {
    await dispatch(recieveLeagues());
  }, []);

  return (
    <div>
      <Header />
      <main>
      {leagueList.length ? (
        <Routes>
          <Route path="/" element={<Leagues leagues={leagueList}/>} />
          <Route path="/info" element={<Info />} />
        </Routes>
        ) : ''}
      </main>
    </div>
  );
}

export default App;