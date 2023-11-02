import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

import {colorInput} from '@sanity/color-input'

import deskTool from './plugins/deskTool'

export default defineConfig({
  name: 'default',
  title: 'Richie Harrington Films',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [deskTool, visionTool(), colorInput(), media()],

  schema: {
    types: schemaTypes,
  },
})
