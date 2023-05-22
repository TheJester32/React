import React from "react"

class Users extends React.Component {

    users = [
        {
            id: 1,
            firstnname: 'Bob',
            lastname: ' Marley',
            bio: 'Smth Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            age: 40,
            isHappy: true
        },

        {
            id: 2,
            firstnname: 'John',
            lastname: ' Doe',
            bio: 'Smth too Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            age: 22,
            isHappy: false
        },

    ]

    render() {
        if(this.users.length > 0)
        return (<div>
            {this.users.map((el) => (<div className="user" key={el.id}>
                <h3>
                    {el.firstnname}
                    {el.lastname}</h3>
                <p>
                    {el.bio}
                </p>
                <b>{el.isHappy ? 'Счастлив :)' : 'Не особо :('}
                </b>
            </div>))}
        </div>
        )
        else 
        return (<div className="user">
            <h3>Пользователей нет</h3>
        </div>
        )
    }
}

export default Users