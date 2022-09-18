import {createSlice , createAsyncThunk , createEntityAdapter} from "@reduxjs/toolkit";
import {useCollection} from "react-firebase-hooks/firestore";
import {collection} from "@firebase/firestore";
import {db} from "../../config/Firebase";


export const FETCH_CHAT_DATA = createAsyncThunk('FETCH_CHAT_DATA' , async () => {

    const [chatSnapshot] = useCollection(collection(db , 'USERS_CHAT'))


    const X = await chatSnapshot?.docs.map(items => ({id : items.id , ...items.data()}))

    console.log('hello')

    return X

})


const CHAT_ADAPTER = createEntityAdapter()

export const {selectEntities : selectChatEntities , selectById : selectChatsById , selectIds , selectAll} = CHAT_ADAPTER.getSelectors((state : any) => state.ChatsReducer)

const chatsReducer = createSlice({

    name : 'GET_CHAT_DATA',
    initialState : CHAT_ADAPTER.getInitialState({
        status : 'idle'
    }),

    reducers : {},

    extraReducers : (builder => {
        builder.addCase(FETCH_CHAT_DATA.pending , (state , action) =>{
            state.status = 'pending'
        })
        builder.addCase(FETCH_CHAT_DATA.fulfilled , (state , action) =>{
           state.status = 'success'

            console.log(action)

           // CHAT_ADAPTER?.setMany(state , action.payload)
        })
        builder.addCase(FETCH_CHAT_DATA.rejected , (state , action) =>{
            state.status = 'reject'
        })
    })
})

export default chatsReducer.reducer