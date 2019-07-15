// Base
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './block-content'
// Collection schemas
import post from './collections/post'
import project from './collections/project'
// Page schemas
import pageHome from './pages/home'

// Plugins
import latex from 'part:@sanity/form-builder/input/latex/schema'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // Collection schemas
        post,
        project,
        // Poge schemas
        pageHome,
        // Block schemas
        blockContent,
        // Plugins
        latex
    ])
})
