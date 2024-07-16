import React from 'react'
import UserClass from './UserClass';

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("parent constructor")
    }

    componentDidMount(){
        console.log("parent ComponentDidMount");
    }

    render() {
        console.log("parent render")
        
        return (
            <div>
                {console.log("parent jsx")}abc
                <UserClass name="first"/>
                {/* <UserClass name="second"/> */}
                {console.log("last parent jsx")}
            </div>
        )
    }
}

export default About;