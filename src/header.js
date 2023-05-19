import React from "react"
import Button from "./button"

class Header extends React.Component {

    render() {
        return (
        <header className = "header">
            {this.props.title}
            <Button />
            <Button text = "smth"/>
            </header>
            )
    }
}

export default Header