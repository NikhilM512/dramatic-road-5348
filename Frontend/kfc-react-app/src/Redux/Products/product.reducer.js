
import { GET_ALLPRODUCT_DATA_SUCCESS, 
  GET_BEVERAGES_DATA_SUCCESS, 
  GET_BIRYANI_BUCKETS_DATA_SUCCESS, 
  GET_BOX_MEALS_DATA_SUCCESS, 
  GET_BURGERS_DATA_SUCCESS, 
  GET_CHICKEN_BUCKETS_DATA_SUCCESS, 
  GET_EXCLUSIVE_DEAL_DATA_SUCCESS, 
  GET_NEW_LAUNCH_DATA_SUCCESS,
  GET_SNACKS_DATA_SUCCESS,
  GET_STAY_HOME_SPECIALS_DATA_SUCCESS} from "./product.actionTypes"


const initialState={
  ALLPRODUCT_Data:[],
  EXCLUSIVE_DEAL_Data:[],
  CHICKEN_BUCKETS_Data:[],
  NEW_LAUNCH_Data:[],
  BIRYANI_BUCKETS_Data:[],
  BOX_MEALS_Data:[],
  BURGERS_DATA:[],
  STAY_HOME_SPECIALS_Data:[],
  SNACKS_Data:[],
  BEVERAGES_Data:[],
  isLoading:false,
  isError:false,
  errorMessage:""
}

export const productReducer=(state=initialState,{type,payload})=>{
  switch (type){
      case GET_ALLPRODUCT_DATA_SUCCESS:
      return({...state,ALLPRODUCT_Data:payload,isLoading:false})

      case GET_EXCLUSIVE_DEAL_DATA_SUCCESS:
      return({...state,EXCLUSIVE_DEAL_Data:payload,isLoading:false})

      case GET_CHICKEN_BUCKETS_DATA_SUCCESS:
      return({...state,CHICKEN_BUCKETS_Data:payload,isLoading:false})

      case GET_NEW_LAUNCH_DATA_SUCCESS:
      return({...state,NEW_LAUNCH_Data:payload,isLoading:false})

      case GET_BIRYANI_BUCKETS_DATA_SUCCESS:
      return({...state,BIRYANI_BUCKETS_Data:payload,isLoading:false})

      case GET_BOX_MEALS_DATA_SUCCESS:
      return({...state,BOX_MEALS_Data:payload,isLoading:false})

      case GET_BURGERS_DATA_SUCCESS:
      return({...state,BURGERS_Data:payload,isLoading:false})

      case GET_STAY_HOME_SPECIALS_DATA_SUCCESS:
      return({...state,STAY_HOME_SPECIALS_Data:payload,isLoading:false})

      case GET_SNACKS_DATA_SUCCESS:
      return({...state,SNACKS_Data:payload,isLoading:false})
      
      case GET_BEVERAGES_DATA_SUCCESS:
      return({...state,BEVERAGES_Data:payload,isLoading:false})

      case "LOADING":
      return ({...state,isLoading:true})

      case "ERROR":
      return ({...state,isError:true,isLoading:false,errorMessage:payload})

      case "STOPLOADING":
      return ({...state,isLoading:false})

      default:
      return state
  }
}