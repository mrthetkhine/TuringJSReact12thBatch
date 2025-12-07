function api()
{
    console.log('API ');
    internal();
}
function internal()
{
    console.log('Internal API ');
}
exports.api = api;