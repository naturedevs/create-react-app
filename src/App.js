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
    appId="318221891163640"
    onSuccess={(res)=>{
      console.log("login success");
      console.log(res);
    }} 
    onFail = {(res)=>{      
      console.log("login fail");
      console.log(res);
    }
  }
  onProfileSuccess={(res)=>{
    console.log("onProfileSuccess success");
    console.log(res);
  }
}
    />

        {/* <FacebookLoginComponent /> */}

 

    </div>

  );
}

export default App;
