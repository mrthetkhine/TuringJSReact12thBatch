export default function JsxDemo()
{
    let str ="Hello";
    let date = new Date();
    return(
        <>
            {1+1}
            <h1>
                {str.toUpperCase()}
            </h1>
            {
                date.toString()
            }

            <hr/>
        </>
        );
}