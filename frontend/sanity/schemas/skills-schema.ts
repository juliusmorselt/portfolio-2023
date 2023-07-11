const skills = {
    name: 'skills',
    title: 'My Skills',
    type: 'document',
    fields: [
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'category',
                            title: 'Category',
                            type: 'string'
                        },
                        {
                            name: 'skills_array',
                            title: 'My Skills',
                            type: 'array',
                            of: [
                                {
                                    name: 'skill',
                                    title: 'Skill',
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'title',
                                            title: 'Title',
                                            type: 'string'
                                        },
                                        {
                                            name: 'description',
                                            title: 'Description',
                                            type: 'array',
                                            of: [{type: 'block'}]
                                        },
                                        {
                                            name: 'image',
                                            title: 'Skill Logo',
                                            type: 'image',
                                            options: { hotspot: true },
                                            fields: [
                                                {
                                                    name: 'alt',
                                                    title: 'Alt',
                                                    type: 'string'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export default skills