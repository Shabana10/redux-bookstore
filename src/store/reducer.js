
const initialState ={
    bookData: [
        {
            title: 'book 1',
            author: 'author 1'
        },
        {
            title: 'book 2',
            author: 'author 2'
        },
        {
            title: 'book 3',
            author: 'author 3'
        },
    ],
}

function MyReducer(state = initialState , action) {
    switch (action.type) {
        case "GETDATA":
          const newBook=[]
          newBook.push(action.payload)
      return {
          ...state,
          bookData: [...state.bookData, ...newBook]
      }
        default:
            return state
    }
}

export default MyReducer
