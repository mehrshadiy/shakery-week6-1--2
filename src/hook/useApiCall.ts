import {useEffect, useState} from "react";
import ApiStatus from "@/types/api/ApiStatus";

interface Props<T,S> {
    func: (arg: T) => Promise<S | false>,
    params: T,
    refresh?: Array<any>,
    enabled?: boolean
}

export default function useApiCall<S,T>({func, params, refresh = [], enabled = true}: Props<T,S>) {
    const [response, setResponse] = useState<S | false>(false)

    const [status, setStatus] = useState<ApiStatus>("pending")

    const apiCall = async () => {
        setStatus("isLoading")
        const result = await func(params)

        if (result === false){
            setStatus("hasError")
            return
        }

        setStatus("isSuccess")
        setResponse(result)
    }

    useEffect(()=>{
        if (enabled){
            apiCall()
        }
    },refresh)

    return {status, response}

}