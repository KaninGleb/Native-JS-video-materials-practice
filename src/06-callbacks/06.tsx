import React, {ChangeEvent} from 'react';

export const User = () => {
    // const [user, setUser] = useState('Dimych')

    const deleteUser = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name)
    }

    // const saveUser = () => {
    //     console.log('User saved')
    // }

    const nameChanged = () => {
        console.log('Name changed')
    }

    const onBlur = () => {
        console.log('Focus missed')
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Age changed: ' + e.currentTarget.value)
    }

    return (
        <div>
            {/*{user}*/}
            <textarea onChange={nameChanged}/>
            <button name={'delete'} onClick={deleteUser}>x</button>
            <button name={'save'} onClick={deleteUser}>x</button>
            <input
                onChange={onAgeChanged}
                onBlur={onBlur}
                onMouseEnter={() => console.log('Mouse in!')}
                onMouseOut={() => console.log('Mouse out!')}
            />
        </div>
    )
}