declare module "csswrapper" {
    export interface Config {
        forceExecution?:boolean,
        tagWrapper?:string,
        buildPathCss?:string
    }
    /**
     * Construye un wrapper CSS según la configuración proporcionada.
     * @param config - Objeto de configuración para la construcción del wrapper.
     * @returns void
     */
    export default function buildWrapper(config:Config): void;
}
