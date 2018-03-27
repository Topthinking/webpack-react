
export default {
    namespace: 'home',
    state: {
        count:10
    },
    reducers: {
        addCount(state) {
            return {
                count: state.count + 1
            }
        },
        minusCount(state) {
            return {
                count: state.count - 1
            }
        }
    }
  }
