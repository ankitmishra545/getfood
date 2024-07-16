import React from "react";

class UserClass extends React.Component{

    constructor(props){
        
        super(props)
        console.log(this.props.name + "child constructor")
        this.state = {
            userInfo: {}
        }
    }

    async componentDidMount(){
        console.log(this.props.name + "ComponentDidMount");
        
        const user  = await fetch("https://api.github.com/users/ankitmishra545");
    

        const json = await user.json();
        console.log(json)
        this.setState({userInfo: json})
        
    }

componentDidUpdate(){
    console.log("component updated")
}


    render() {
        console.log(this.props.name + "child render")
        const {login, avtar_url, created_at} = this.state.userInfo;
        
        return (
            <div>
                <img src={avtar_url} />
                {console.log(this.props.name + "child JSX")}
                <h1>{login}</h1>asd
                <p>Created on: {created_at}</p>
            </div>
        )
        
    }
    debugger;
}

export default UserClass;