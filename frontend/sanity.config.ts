import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity'
import schemas from './sanity/schemas'

export const config = {
    projectId: 'vkmw8x26',
    dataset: 'production',
    title: 'Portfolio Website',
    apiVersion: '2023-07-07',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
}