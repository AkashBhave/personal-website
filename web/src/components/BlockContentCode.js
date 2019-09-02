import React from 'react'
import PropTypes from 'prop-types'

import Highlight from 'react-highlight'

const BlockContentCode = props => (
    <div className="mt-4">
        <Highlight className={props.language || ''}>
            <p className="text-dark relative hljs-language bg-light font-light px-2 py-1 uppercase border-2 border-blue-primary font-sans">
                {props.language || 'unknown'}
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
