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

            <FacebookLogin
                appId="274043938971436"
                fields="name,email"
                callback={responseFacebook}
              /> {/* <FacebookLoginComponent /> */}

        </div>

    );
}

export default App;
