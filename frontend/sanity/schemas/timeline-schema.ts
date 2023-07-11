const timeline = {
    name: 'timeline',
    title: 'Timelines',
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
                            name: 'companies',
                            title: 'Companies',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        {
                                            name: 'company',
                                            title: 'Company Name',
                                            type: 'string'
                                        },
                                        {
                                            name: 'from',
                                            title: 'From date',
                                            type: 'date',
                                            options: {
                                                layout: 'half-width',
                                                dateFormat: 'MMMM YYYY',
                                                calenderTodayTable: 'Today'
                                            }
                                        },
                                        {
                                            name: 'till',
                                            title: 'Till date',
                                            type: 'date',
                                            options: {
                                                layout: 'half-width',
                                                dateFormat: 'MMMM YYYY',
                                                calenderTodayTable: 'Today'
                                            }
                                        },
                                        {
                                            name: 'description',
                                            title: 'Description',
                                            type: 'array',
                                            of: [{type: 'block'}]
                                        },
                                        {
                                            name: 'image',
                                            title: 'Company Logo',
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
    ],
    styles: [
        {
            name: 'half-width',
            title: 'Half Width',
            value: {
                width: '50%' // Set the width to 50%
            }
        }
    ]
}

export default timeline
