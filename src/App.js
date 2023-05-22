import React from "react"
import Header from "./header"
import Users from "./users"

class App extends React.Component {

    render() {

        return (<div className="name">
            <Header title="Список пользователей" />
            <main>
                <Users />
            </main>
            <aside></aside>
        </div>)
    }

    mouseOver() {
        console.log('Mouse Over')
    }
}

export default App
