import create from 'zustand';

export default create(set => ({
    list: [
        { id: 1, title: 'first', completed: false },
        { id: 2, title: 'second', completed: true },
        { id: 3, title: 'third', completed: false }
    ],
    show: 'all',
    addItem: title => set(state => ({ list: [...state.list, { id: state.list.length + 1, title, completed: false }] })),
    toggleItem: id => set(state => ({ list: state.list.map(item => item.id == id ? { id: item.id, title: item.title, completed: !item.completed } : item) })),
    setShow: value => set(state => ({ show: value }))
}));
