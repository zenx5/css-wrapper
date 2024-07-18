import fs from 'fs'

const buildWrapper = (tagWrapper = '#root', buildPathCss = './dist/assets') => () => {
    if( process.env.npm_lifecycle_event === 'build' ) {
        fs.readdir(buildPathCss, (err, files) => {
            if (err) throw err
            const cssFile = files.find( file => file.includes('.css') )
            if( !cssFile ) return
            fs.readFile(`${buildPathCss}/${cssFile}`, 'utf8', (err, data) => {
                if (err) throw err
                if( data.includes(tagWrapper) ) return
                const content = `${tagWrapper} { ${data} }`
                fs.writeFile(`${buildPathCss}/${cssFile}`, content, 'utf8', (err) => {
                    if (err) throw err
                })
            })
        })
    }
}

export default buildWrapper