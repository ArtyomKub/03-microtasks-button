import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('STUPID BUTTON')
    }
    
    return (
        <div>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('IGOR', 21)}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('IVAN')}/>
            <Button name={'StupidButton'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
