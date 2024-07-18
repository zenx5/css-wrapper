import fs from 'fs'

const buildWrapper = (tagWrapper = '#root', buildPathCss = './dist/assets') => () => {
    try{
        console.log('buildWrapper')
        if(
            process.env.npm_lifecycle_event === 'postbuild' ||
            process.env.npm_lifecycle_event === 'own:start' ||
            process.env.npm_lifecycle_event === 'own:start:with'
        ) {
            fs.readdir(buildPathCss, (err, files) => {
                if (err) throw err
                const cssFile = files.find( file => file.includes('.css') )
                if( !cssFile ) return
                fs.readFile(`${buildPathCss}/${cssFile}`, 'utf8', (err, data) => {
                    if (err) throw err
                    if( data.includes(tagWrapper) ) return
                    const content = `${tagWrapper} { ${data} }`
                    fs.writeFile(`${buildPathCss}/${cssFile}`, content, 'utf8', (err) => {
                        console.log('Wrapper added')
                        if (err) throw err
                    })
                })
            })
        }
    }
    catch(err){
        console.log(err)
    }
}

export default buildWrapper