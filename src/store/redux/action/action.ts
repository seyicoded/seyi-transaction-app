import { Dispatch } from "react"
import { AuthWrapper, responseWrapper } from "../../../helper/axiosWrapper"
import { clearAll, setAuctionLStorage, setCategoryLStorage, setSignedInUserFromStorage } from "../../local/storage"
import ACTION_TYPE from "./type"
import { AnyAction } from "redux"
import axiosClient from "../../../api/axios"

export const updateLoaderState = (bool: boolean, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.APP_LOADER,
        payload: bool
    })
}

export const updateUserLoggedInState = (data: any, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.ACTION_LOGINSETTER,
        payload: data
    })
}

export const updateLoaderCoverState = (bool: boolean, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.APP_LOADER_COVER,
        payload: bool
    })
}

export const updateFcmTokenState = (token: string, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.FCM_TOKEN,
        payload: token
    })
}

export const toggleAuthPopUpState = (bool: boolean, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.AUTH_POPUP,
        payload: bool
    })
}

export const getProfileAction = async (dispatch: Dispatch<AnyAction>)=>{
    const _res = await (await axiosClient()).get("get-profile");   

    // update storage
    await setSignedInUserFromStorage(_res.data.user_details);
    updateUserLoggedInState(_res.data.user_details, dispatch);
}


export const getMyAddressesAction = async (dispatch: Dispatch<AnyAction>)=>{
    const _res = await (await axiosClient()).get("get-address");   

    // console.log(_res.data, "myAddresses")
    // console.log(JSON.stringify(_res.data, null, 2), "my Address")

    dispatch({
        type: ACTION_TYPE.MY_ADDRESSES,
        payload: {
            data: _res.data?.data || [],
            id: _res.data?.default || 0,
        }
    })
}

export const getMyCardsAction = async (dispatch: Dispatch<AnyAction>)=>{
    const _res = await (await axiosClient()).get("get-card");   

    // console.log(JSON.stringify(_res.data, null, 2), "my Cards")

    dispatch({
        type: ACTION_TYPE.MY_CARDS,
        payload: {
            default: _res.data?.default,
            data: _res.data?.cards
        }
    })
}

export const getSystemBidsAction = async (dispatch: Dispatch<AnyAction>)=>{
    const _res = await (await axiosClient()).get("get-bids");   

    // console.log(_res.data, "my bids")

    dispatch({
        type: ACTION_TYPE.BIDS,
        payload: _res.data?.bids
    })
}

export const getSystemCategoryAction = async (dispatch: Dispatch<AnyAction>)=>{
    
    try {
        const _res = await (await axiosClient()).get("get-category");   
    
        // console.log(_res.data, "my category")
    
        dispatch({
            type: ACTION_TYPE.CATEGORY,
            payload: _res.data?.categories
        })

        setCategoryLStorage(_res.data?.categories)
        
    } catch (error) {
        // @ts-ignore
        // console.log(error, error?.response?.data, "from category")
    }
}

export const getUserActiveBidAction = async (dispatch: Dispatch<AnyAction>)=>{
    
    try {
        const _res = await (await axiosClient()).get("active-bids");   
    
        // console.log(JSON.stringify(_res.data, null, 2), "my active bid")
    
        dispatch({
            type: ACTION_TYPE.ACTIVE_BID,
            payload: _res.data?.bids
        })
        
    } catch (error) {
        // console.log(error, "from active-bid")
    }
}

export const getUserWonBidAction = async (dispatch: Dispatch<AnyAction>)=>{
    
    try {
        const _res = await (await axiosClient()).get("won-bids");   
    
        // console.log(JSON.stringify(_res.data, null, 2), "my active bid")
    
        dispatch({
            type: ACTION_TYPE.WON_BID,
            payload: _res.data?.bids
        })
        
    } catch (error) {
        // console.log(error, "from active-bid")
    }
}

export const getUserPastBidAction = async (dispatch: Dispatch<AnyAction>)=>{
    
    try {
        const _res = await (await axiosClient()).get("past-bids");   
    
        // console.log(JSON.stringify(_res.data, null, 2), "my active bid")
    
        dispatch({
            type: ACTION_TYPE.PAST_BID,
            payload: _res.data?.bids
        })
        
    } catch (error) {
        // console.log(error, "from active-bid")
    }
}

export const getAuctionsAction = async (dispatch: Dispatch<AnyAction>)=>{
    
    try {
        const _res = await (await axiosClient()).get("get-auction");   
    
        // console.log(JSON.stringify(_res.data, null, 2), "my active bid")
    
        dispatch({
            type: ACTION_TYPE.AUCTION,
            payload: _res.data?.auctions
        });

        setAuctionLStorage(_res.data?.auctions);
        
    } catch (error) {
        // console.log(error, "from auction")
    }
}

export const getUserNotificationAction = async (dispatch: Dispatch<AnyAction>)=>{
    
    try {
        const _res = await (await axiosClient()).get("get-notifications");   
    
        // console.log(JSON.stringify(_res.data, null, 2), "my notification")
    
        dispatch({
            type: ACTION_TYPE.NOTIFICATION,
            payload: _res.data?.notifications
        })
        
    } catch (error) {
        // console.log(error, "from notification")
    }
}

export const updateCurrentBidAction = (data: any, dispatch: any)=>{
    dispatch({
        type: ACTION_TYPE.CURRENT_BID,
        payload: data
    })
}

export const getMyNotificationPreferenceAction = async (dispatch: Dispatch<AnyAction>)=>{
    const _res = await (await axiosClient()).get("get-preference");   

    // console.log("from notificationn", _res.data)

    dispatch({
        type: ACTION_TYPE.MY_ADDRESSES,
        payload: {
            push_notification: _res.data?.push_notification || "off",
            email_notification: _res.data?.email_notification || [],
        }
    })
}

export const updateFcmToServerAction = async (token: string)=>{
    const _res = await (await axiosClient()).post("fcm-token", {token});   
}