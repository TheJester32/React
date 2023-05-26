import React from "react"
import Header from "./header"
import Users from "./users"
import AddUser from "./adduser"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            users: [
                {
                    id: 1,
                    firstname: 'Bob',
                    lastname: ' Marley',
                    bio: 'Smth Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    age: 40,
                    isHappy: true
                },
        
                {
                    id: 2,
                    firstname: 'John',
                    lastname: ' Doe',
                    bio: 'Smth too Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                    age: 22,
                    isHappy: false
                },
        
            ]

        }

        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {

        return (<div className="name">
            <Header title="Список пользователей" />
            <main>
                <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
        </div>)
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}]})
    }

}

export default App
