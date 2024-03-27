import React , {Component} from "react";
import axios from "axios";
 
class Blog extends Component{

    state ={
        users: []
    }
//https://jsonplaceholder.typicode.com/users

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then(res =>{
            console.log(res.data)
            this.setState( {
                users: res.data
            })
        })

    }
    render(){
        return(
            <div>
                <h1 className="logo">
                    Hello
                </h1>

                <div className="container">
                    {this.state.users.map(user => 
                    <div className="content" key={user.id}>
                        <div>
                {user.id} - {user.name} 
                        </div>
                        <div className="span">
                            {user.email}
                        </div>
                

                    </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Blog;