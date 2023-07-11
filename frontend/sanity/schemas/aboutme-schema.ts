const aboutme = {
    name: 'aboutme',
    title: 'About Me',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'About Me Title',
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
            title: 'Image of myself',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
    ]
}

export default aboutme