import { users, messages } from '../data';

const initialState = {
    contactsList: users,
    messagesList: messages,
    currentUserId: 1
}

function chatReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return {
                ...state,
                contactsList: users,
            }
        case 'SHOW_CURRENT_CONTACT':

            console.log('done');
            return {
                ...state,
                currentUserId: action.payload
            }
        case 'SEND_INPUT_MESSAGE':
            const tempMessagesList = [...state.messagesList];
            const currentIndex = tempMessagesList.findIndex(({ id }) => id == state.currentUserId);
            tempMessagesList[currentIndex].messages.push(action.payload);

            return {
                ...state,
                messagesList: tempMessagesList,
            }

        case 'ADD_NEW_CONTACT':
            const tempContactsList = [...state.contactsList];
            tempContactsList.push({
                ...action.payload,
                id: state.contactsList.length + 1
            })

            return {
                ...state,
                contactsList: tempContactsList
            }

        case 'UPDATE_EXISTING_CONTACT':
            const tempList = [...state.contactsList];
            const index = tempList.findIndex(({ id }) => id == action.payload.id);
            tempList[index] = action.payload;

            return {
                ...state,
                contactsList: tempList
            }

            case 'DELETE_CONTACT':
                const tempContList = state.contactsList.filter(({id}) => id !== action.payload);
        
                return {
                    ...state,
                    contactsList: tempContList
                }

        default:
            return state
    }
    // return state
}

export default chatReducer