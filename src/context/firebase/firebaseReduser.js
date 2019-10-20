const handlers = {
    DEFAULT: state => state
};

export const firebaseReduser = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
};