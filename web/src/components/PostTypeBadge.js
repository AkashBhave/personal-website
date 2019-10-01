import React from 'react'
import { Link } from 'gatsby'

const PostTypeBadge = props => {
    const type = () => {
        let color, name, icon

        switch (props.type) {
            case 'thought':
                color = 'bg-orange-500'
                name = 'Thought'
                icon = 'fas fa-brain'
                break
            case 'project':
                color = 'bg-green-700'
                name = 'Project'
                icon = 'fas fa-hammer'
                break
            case 'tutorial':
                color = 'bg-purple-700'
                name = 'Tutorial'
                icon = 'fas fa-book'
                break
        }

        return { color: color, name: name, icon: icon }
    }

    return props.showProject && props.project ? (
        <Link
            to={`/projects/${props.project.slug.current}`}
            className={`w-auto mr-auto text-md py-2 px-4 mt-4 rounded link-bg ${
                type().color
            }`}
        >
            <i className={`mr-2 ${type().icon}`}></i>
            <p className="inline">
                {type().name}:
                <span className="font-light ml-1">{props.project.title}</span>
            </p>
        </Link>
    ) : (
        <div
            className={`w-auto mr-auto text-md py-2 px-4 mt-4 rounded text-light ${
                type().color
            }`}
        >
            <i className={`mr-2 ${type().icon}`}></i>
            <p className="inline">{type().name}</p>
        </div>
    )
}

export default PostTypeBadge
