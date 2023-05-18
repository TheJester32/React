import React from "react"
import Header from "./header"
import Image from "./image"
import logo from "./img/logo.png"

class App extends React.Component {
     helpText = "Help text"
    render() {

        return (<div className="name">
            <Header title="Шапка сайта"/>
            <h1>{this.helpText}</h1>
            <input placeholder={this.helpText}
                onClick={this.inputClick} onMouseEnter={this.mouseOver} />
            <p>{this.helpText === "Help text" ? "Yes" : "No"} </p>
            <Image image={logo}/>
        </div>)
    }

    inputClick() {
        console.log('Clicked')
    }

    mouseOver() {
        console.log('Mouse Over')
    }
}

export default App
