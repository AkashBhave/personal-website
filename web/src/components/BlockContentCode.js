import React from 'react'
import PropTypes from 'prop-types'

import Highlight from 'react-highlight'

const BlockContentCode = props => (
    <div class="-my-8">
        <Highlight className={props.language || ''}>
            <p
                v-if="language"
                className="text-dark relative hljs-language bg-light font-light px-2 py-1 uppercase border-standard font-sans"
            >
                {props.language || 'Unknown'}
            </p>
            <code classname={props.language || ''}>{props.code.code}</code>
        </Highlight>
    </div>
)

BlockContentCode.propTypes = {
    code: PropTypes.object,
    language: PropTypes.string
}

export default BlockContentCode
