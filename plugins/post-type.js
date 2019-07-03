export default function getPostType(postType) {
    let color, name, icon

    switch (postType) {
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
