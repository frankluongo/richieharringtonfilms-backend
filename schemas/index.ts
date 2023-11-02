import block from './models/arrays/block'

import category from './models/documents/category'
import film from './models/documents/film'
import global from './models/documents/global'
import pageAbout from './models/documents/page.about'
import pageBts from './models/documents/page.bts'
import pageContact from './models/documents/page.contact'
import pageHome from './models/documents/page.home'
import pagePages from './models/documents/page'
import pageProjects from './models/documents/page.projects'
import pageReels from './models/documents/page.reels'

import contact from './models/objects/contact'
import gallery from './models/objects/gallery.photo'
import imageLink from './models/objects/image.link'
import link from './models/objects/link'
import photo from './models/objects/photo'
import video from './models/objects/video'
import videoGallery from './models/objects/gallery.video'
import videoTabs from './models/objects/video.tabs'

export const schemaTypes = [
  // Arrays:
  block,
  // Objects:
  contact,
  gallery,
  imageLink,
  link,
  photo,
  video,
  videoGallery,
  videoTabs,
  // Documents:
  category,
  film,
  global,
  pageAbout,
  pageBts,
  pageContact,
  pageHome,
  pagePages,
  pageProjects,
  pageReels,
]
