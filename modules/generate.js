/*
 **  Imports
 */
const fs = require('fs-extra')

const generateData = require('./generateData.js')

/*
 **  Module exports
 */
module.exports = function generate() {
    const writeData = (path, data) => {
        return new Promise((resolve, reject) => {
            try {
                fs.ensureFileSync(path)
                fs.writeJson(
                    path,
                    data,
                    resolve(`generate.js: ${path} write successful`)
                )
            } catch (e) {
                console.error(`generate.js: ${path} write failed. ${e}`)
                reject(`generate.js: ${path} write failed. ${e}`)
            }
        })
    }

    // Add hook for build
    this.nuxt.hook('build:before', async builder => {
        // Clean data directory
        fs.emptyDir('static/_data')

        // Empty array to fill with promises
        let scraper = []

        // One of these for every top level page, a loop for dynamic nested pages
        Object.entries(generateData).forEach(async function([key, pathArray]) {
            pathArray.forEach(async function(path) {
                let pathData = await path.getData()
                scraper.push(
                    writeData(
                        `static/_data/${path.relativePath}/_.json`,
                        pathData
                    )
                )

                if (path.generateNested) {
                    pathData.forEach(function(subPathData) {
                        scraper.push(
                            writeData(
                                `static/_data/${path.relativePath}/${subPathData.slug.current}.json`,
                                subPathData
                            )
                        )
                    })
                }
            })
        })

        // Finish when all of them are done
        return Promise.all(scraper)
            .then(() => {
                console.log('generate.js: build complete')
            })
            .catch(err => {
                console.error(err)
            })
    })
}
