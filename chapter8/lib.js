window.Module = window.Module || (function ()
{
    console.log('Lib loaded');
    function api()
    {
        console.log('API called');
    }
    return{
        api
    }
})();
