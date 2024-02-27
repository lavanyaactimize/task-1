import { SET_DATA } from "./actionType"


const SetData = (data) => {
  return{
    type : SET_DATA,
    payload : data
  }
}

export default SetData;