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

        generateData.forEach(async (pathObject, index) => {
            let pathData = await pathObject.data()
            scraper.push(
                writeData(
                    `static/_data/${pathObject.type}/${pathObject.name}.json`,
                    pathData
                )
            )
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
