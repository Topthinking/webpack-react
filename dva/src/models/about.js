
export default {
    namespace: 'about',
    state: {
        list: [],
        load: false
    },
    reducers: {
        beforeAdd(state, { load = false}) {
            return {
                ...state,
                load
            }
        },
        addTodoContentSuccess(state, { content }) {
            const { list } = state
            list.push({
                id: list.length + 1,
                name: content,
                finish:false
            })

            return {
                ...state,
                load:false,
                list:list.slice()
            }
        },
        finish(state, { id }) {
            const { list } = state

            list.map(item => item.finish = item.id === id ? !item.finish : item.finish)

            return {
                ...state,
                list:list.slice()
            }
        },
        delete(state, { id }) {
            let { list } = state

            list = list.filter(item => item.id !== id)

            return {
                ...state,
                list:list.slice()
            }
        }
    },
    effects: {
        * addTodoContent({ inputRef }, saga) {
            const { put ,call} = saga
            const content = inputRef.value
            if (content !== '') {
                yield put({ type: 'beforeAdd',load:true })
                inputRef.value = ''
                yield call(time => (
                    new Promise(resolve => setTimeout(resolve, time))
                ),1500)
                yield put({ type: 'addTodoContentSuccess', content })
            }
        }
    }
}
