import React from 'react'

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

    return (
        <div
            className={`w-auto mr-auto text-md font-base text-light py-2 px-4 mt-4 rounded ${
                type().color
            }`}
        >
            <i className={`mr-2 ${type().icon}`}></i>
            <p className="inline">
                {type().name}
                {props.showProject && props.project ? (
                    <span className="font-light">: {props.project.title}</span>
                ) : null}
            </p>
        </div>
    )
}

export default PostTypeBadge
