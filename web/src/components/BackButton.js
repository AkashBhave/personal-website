import React from 'react'
import { Link } from 'gatsby'

const BackButton = props => (
    <Link to={props.to}>
        <div class="flex-1 w-full bg-blue-secondary text-light font-bold text-uppercase py-4 text-xl shadow link-bg">
            <i class="fas fa-arrow-left mr-2"></i>
            <span>{props.title}</span>
        </div>
    </Link>
)

export default BackButton
