import React from "react";
import s from 'styles/todo.scss';


const todo = () => {
    return (
        <>
            <header>
                <div>
                    <h2>Todoアプリ</h2>
                </div>
            </header>
            <div className={s('TodoBoard_content')}>
                <div className={s('TodoForm_content')}>
                    <form id="todoForm" className={s('TodoForm_form')}>
                        <div className={s('TodoForm_input')}>
                            <input type="text" id="todoInput" placeholder="タスクを入力してください" required/>
                            <div className={s('TodoForm_button')}>
                                <button type="submit">追加</button>
                            </div>
                        </div>
                    </form>
                    <ul id="todoList"></ul>
                </div>
            </div>
        </>
    )
}

export default todo;