import React from 'react';
import Rooms from './components/Rooms'
import Chat from './components/Chat'

export default class App extends React.Component {
  render() {
    var data = {
      userName: 'Загадочный ловелас',
      room: 'Общий чат',
      rooms: ['Общий чат', 'Вася', 'Петя', 'Маша', 'Ираида Петровна'],
      messages: [
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Ловелас', msg: 'Медвед'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'},
        {from: 'Вася', msg: 'Привет'}
      ]
    };

    return <div id='app'>
      Вы вошли как <strong>{data.userName}</strong>
      <Rooms room={data.room} items={data.rooms} />
      <Chat items={data.messages}/>
      <div>
        <input type="text" />
        <button>Отправить</button>
      </div>
    </div>
  }
}