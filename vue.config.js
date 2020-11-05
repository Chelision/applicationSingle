module.exports = {
    configureWebpack:{
        output:{
            library:'singleVue',
            libraryTarget:'umd'//此处会将打包后的singleVue挂载到window上
        },
        devServer:{
            port:10000
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js' 
            }
        }
    }
}