import React from "react";


export default function withRtkQueryData(Component: React.JSX.ElementType,rtkQueryFn:Function,...arg:any[])
{
    return function()
    {
        const { data, isError, isLoading, isSuccess } = rtkQueryFn(...arg);
        if (isError) {
            return (
                <div>
                    <h1>There was an error!!!</h1>
            </div>
        );
        }

        if (isLoading) {
            return (
                <div>
                    <h1>Loading...</h1>
            </div>
        );
        }

        if (isSuccess) {
            return <Component data={data} />
        }
    }

}