import loadable from 'react-loadable';

export default (component, route) => {
    return component = Loadable({
        loader: () => import(route),
        loading: Loading,
    });
}
