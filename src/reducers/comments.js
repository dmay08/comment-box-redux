import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types'

export default function(state=[], action) {
    switch (action.type) {
        // case 1
        case SAVE_COMMENT:
            return [...state, action.payload]
        // case 2
        case FETCH_COMMENTS:
        debugger
            const turkeyComments = action.payload.data.map(comment => comment.name)
            return [...state, ...turkeyComments] // adds comments to state here 
                // in state, they are added as 'comments' (not turkeyComments)
                    // because of /reducers/index.js >> 'comments: commentsReducer'
        default:
            return state
    }
}


