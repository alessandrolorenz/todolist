import React, { Component } from 'react'
import axios from 'axios'

import Header from '../template/pageHeader'
import Form from './todoForm'
import List from './todoList'

const URL = 'http://localhost:3010/api/todos'




export default props =>(
    <div>
        <Header name='Tarefas' small='Cadastro'></Header>
        <Form/>
        <List /> 
    </div>
    
)



// export default class Todo extends Component {
//     render(){
//         return(
//             <div>
//                <Header name='Tarefas' small='Cadastro'></Header>
//                 <Form/>
//                 <List /> 
//             </div>
//         )
//     }
// }