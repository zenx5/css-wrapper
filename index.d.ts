declare module "csswrapper" {
    export default function buildWrapper(config:{forceExecution?:boolean, tagWrapper?:string, buildPathCss?:string}): void|null|undefined
}