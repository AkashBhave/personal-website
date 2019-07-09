/*
 **  Imports
 */
const fs = require('fs-extra')

const generateData = require('./generate-data')

import sanityClient from '../plugins/sanity-client'

// Get value of JSON from dot notation
function getNested(theObject, path, separator) {
    try {
        separator = separator || '.'

        return path
            .replace('[', separator)
            .replace(']', '')
            .split(separator)
            .reduce(function(obj, property) {
                return obj[property]
            }, theObject)
    } catch (err) {
        return undefined
    }
}

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
        // Get new line after existing logs
        console.log('')

        // Clean data directory
        fs.emptyDir('static/_data')

        // Empty array to fill with promises
        let scraper = []

        // One of these for every top level page, a loop for dynamic nested pages
        Object.entries(generateData).forEach(async function([key, pathArray]) {
            pathArray.forEach(async function(path) {
                let pathData = await path.getData()

                // Generate the root path
                scraper.push(
                    writeData(
                        `static/_data/${path.relativePath}/_.json`,
                        pathData
                    )
                )

                // Generate nested/dynamic paths if set
                if (path.nested) {
                    pathData.forEach(async function(subPathData) {
                        let nestedKey = getNested(subPathData, path.nestedKey)

                        if (
                            key == 'blog' &&
                            subPathData.postType.type == 'project'
                        ) {
                            let projectData = await sanityClient.fetch(
                                `*[_id == "${subPathData.postType.project._ref}"][0]{slug, title}`
                            )

                            // Add project slug URL to sub-path data
                            subPathData.projectData = projectData
                        }

                        scraper.push(
                            writeData(
                                `static/_data/${path.relativePath}/${nestedKey}.json`,
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
