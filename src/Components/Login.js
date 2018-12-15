import React,{Component} from 'react';
class Login extends Component{



    render(){

        return(
            <div>
                Name:<input type="text"/>
                Password:<input type="password"/><br/>
                <button>Submit</button>

            </div>

        );
    }


}
export default Login;