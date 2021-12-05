import React from 'react';
import ApplicationsList from './components/ApplicationsList/ApplicationsList';
import ApplyForAPass from './components/ApplyForAPass/ApplyForAPass';
import Header from './components/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Auth from './components/Auth/Auth';
import Logout from './components/Logout';
import { autoLogin } from './store/actions/auth';
import Faq from './components/FAQ/Faq';
import Home from './components/Home/Home';
import Footer from './components/Footer';

function App() {
  const state = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const isAuthenticated = !!state.token;

  React.useEffect(() => {
    dispatch(autoLogin());
  }, []);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/applications-list/:id" exact component={ApplicationsList} />
      <Route path="/apply" exact component={ApplyForAPass} />
      <Route path="/faq" exact component={Faq} />
      <Redirect to={'/'} />
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/applications-list" exact component={ApplicationsList} />
        <Route path="/applications-list/:id" exact component={ApplicationsList} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/faq" exact component={Faq} />
        <Route path="/apply" exact component={ApplyForAPass} />
        <Route path="/" exact component={Home} />
        <Redirect to={'/'} />
      </Switch>
    );
  }
  return (
    <>
      <div className="wrap">
        <div className="content">
          <Header />
          {routes}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
