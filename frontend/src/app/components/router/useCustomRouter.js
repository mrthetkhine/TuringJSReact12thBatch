
export default function useCustomRouter()
{
    return function route(path)
    {
        console.log('route', path);
        history.pushState({ page: path }, 'About Page', path);
        var e = new CustomEvent('routeChange');
        e.path = path;
        window.dispatchEvent(e);
    }
}