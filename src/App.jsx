import React from "react";
import useStore from './useStore';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodos from "./FilterTodos";

export default () => {
    const { list, show, addItem, toggleItem, setShow } = useStore(state => ({
        list: state.list,
        show: state.show,
        addItem: state.addItem,
        toggleItem: state.toggleItem,
        setShow: state.setShow
    }));

    return (
        <>
            <AddTodo onAdd={addItem} />
            <TodoList list={list} state={show} toggleState={toggleItem} />
            <FilterTodos state={show} onClick={setShow} />
        </>
    );
}