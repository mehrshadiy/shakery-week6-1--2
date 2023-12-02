// @flow
import * as React from 'react';
import ApiStatus from "@/types/api/ApiStatus";

type Props = {
    status: ApiStatus,
    children: React.ReactNode
};

export function ApiLoader({status, children}: Props) {
    return (
        <>
            {
                status === "isLoading" ? <p>is Loading please wait ...</p> :
                    status === "hasError" ? <p>there is an error with api</p> :
                        children
            }
        </>
    );
};