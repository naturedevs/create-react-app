import logo from './logo.svg';
import './App.css';
// import FacebookLoginComponent from './FacebookLoginComponent';
import FacebookLogin from 'react-facebook-login';
function App() {
  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <div>
9
<FacebookLogin
    appId="318221891163640"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
10
        {/* <FacebookLoginComponent /> */}
11
 
12
    </div>

  );
}

export default App;
