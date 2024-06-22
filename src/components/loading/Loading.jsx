import { GooeyCircleLoader } from 'react-loaders-kit';
import './Loading.css';

const getCssVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

const Loading = () => {
    const headerBgColor = getCssVariable("--color-frontend");
    const stSecondaryColor = getCssVariable("--color-inov-gestao");
    const ndSecondaryColor = getCssVariable("--color-backend");

    const loaderProps = {
        loading: true,
        size: 100, 
        duration: 1,
        colors: [headerBgColor, stSecondaryColor, ndSecondaryColor],
    };

    return (
        <div className="loading-container">
            <GooeyCircleLoader {...loaderProps} />
            <h2>Cargando...</h2>
        </div>
    );
}

export default Loading;
