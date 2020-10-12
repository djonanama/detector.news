const axios = require('axios')
const WP = require('wpapi')
const evn = require('./env')
const TagModel = require('./Tag')
const CategoryModel = require('./Category')
const PageModel = require('./Page')
const PostModel = require('./Post')
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

function load_WP () {
  this.ob = {}
  this.wp = new WP({
    endpoint: evn.wpapi.host + evn.wpapi.port + '/wp-json',
    username: evn.wpapi.user,
    password: evn.wpapi.password,
  })
  // console.log(wp);
}
load_WP.prototype.DelPost = async function (post_id) {
  PostModel.deleteMany({ post_id: { $in: post_id } }, function (err) {
    if (err) console.log(err)
  })
}

load_WP.prototype.loadPostMedia = async function (postid) {
  const _self = this
  _self.postid = postid
  const getPost = await this.wp
    .posts()
    .id(this.postid)
    .auth()
    .then(function (data) {
      _self.parseDataLink(data)
      _self.ob.post = {
        post_id: data.id,
        date: new Date(data.date),
        modified: new Date(data.modified),
        title: data.title.rendered,
        fimg_url: data.fimg_url.replace(new RegExp(evn.wpapi.host + '/wp-content', 'g'), ''),
        content: data.content.rendered.replace(new RegExp(evn.wpapi.host + '/wp-content', 'g'), ''),
        link_source_agent_page_id: data.acf.author_of_the_statement.ID,
        link_source: data.acf.publication_link,
        geo_locate: data.acf.geo_locate,
        categories: data.categories,
        tags: data.tags,
        truth:data.acf.truth,
        date_of_statement:data.acf.date_of_statement,
        message:data.acf.message,

      }

      PostModel.update({ post_id: _self.ob.post.post_id }, _self.ob.post, { upsert: true, setDefaultsOnInsert: true },
        function (err, raw) {
          if (err) {
            console.log("update ERROR")
            console.log(err)
          }
        },
      )
    }).catch(function (err) {
      console.log("WP APi ERROR")
      console.log(err)
    })

  if (_self.ob.post.link_source_agent_page_id > 0) {
    await _self.loadPage([_self.ob.post.link_source_agent_page_id])
  }

  if (_self.ob.post.categories.length > 0) {
    await _self.loadCategories(_self.ob.post.categories)
  }

  if (_self.ob.post.tags.length > 0) {
    await _self.loadTags(_self.ob.post.tags)
  }
}
load_WP.prototype.DelPage = async function (pages_id) {
  PageModel.deleteMany({ page_id: { $in: pages_id } }, function (err) {
    if (err) console.log(err)
  })
  PostModel.updateMany({ link_source_agent_page_id: pages_id }, { $set: { link_source_agent_page_id: 0 } }, function (err) {
    if (err) console.log(err)
  })
}

load_WP.prototype.loadPage = async function (pages_id) {
  const _self = this
  for (const i in pages_id) {
    const getPage = await this.wp
    .pages()
    .id(pages_id[i])
    .auth()
    .then(function (data) {
      _self.parseDataLink(data)
      _self.ob.page = {
        page_id: data.id,
        date: new Date(data.date),
        modified: new Date(data.modified),
        title: data.title.rendered,
        fimg_url: data.fimg_url.replace(new RegExp(evn.wpapi.host + '/wp-content', 'g'), ''),
        content: data.content.rendered,
        type_s: data.acf.type,
      }
      PageModel.update({ page_id: _self.ob.page.page_id }, _self.ob.page, { upsert: true, setDefaultsOnInsert: true }, function (err) {
        if (err) {
          console.log(err)
        }
      })
    })
    .catch(function (err) {
      console.log(err)
    })
   }
}

load_WP.prototype.DelCategories = async function (Categories_id) {
  CategoryModel.deleteMany({ categor_id: { $in: Categories_id } }, function (err) {
    if (err) console.log(err)
  })
  PostModel.update({ categories: { $in: Categories_id } }, { $pullAll: { categories: Categories_id } }, function (err) {
    if (err) console.log(err)
  })
}

load_WP.prototype.loadCategories = async function (Categories_id) {
  const _self = this
  for (const categ_id in Categories_id) {
    const getCategory = await this.wp
    .categories()
    .id(Categories_id[categ_id])
    .auth()
    .then(function (data) {
      _self.ob.category = {
        categor_id: data.id,
        count_link: data.count,
        description: data.description,
        name: data.name,
        slug: data.slug,
        parent_id: data.parent,
      }
      CategoryModel.update({ categor_id: _self.ob.category.categor_id }, _self.ob.category, { upsert: true, setDefaultsOnInsert: true }, function (err) {
        if (err) {
          console.log(err)
        }
      })
    })
    .catch(function (err) {
      console.log(err)
    })
   }
}

load_WP.prototype.DelTags = async function (Tags_id) {
  TagModel.deleteMany({ tag_id: { $in: Tags_id } }, function (err) {
    if (err) console.log(err)
  })

  PostModel.update({ tags: { $in: Tags_id } }, { $pullAll: { tags: Tags_id } }, function (err) {
    if (err) console.log(err)
  })
}
load_WP.prototype.loadTags = async function (Tags_id) {
  const _self = this
  for (const tag_id in Tags_id) {
    const getCategory = await this.wp
    .tags()
    .id(Tags_id[tag_id])
    .auth()
    .then(function (data) {
      _self.ob.tag = {
        tag_id: data.id,
        count_link: data.count,
        description: data.description,
        name: data.name,
        slug: data.slug,
      }
      TagModel.update({ tag_id: _self.ob.tag.tag_id }, _self.ob.tag, { upsert: true, setDefaultsOnInsert: true }, function (err) {
        if (err) {
          console.log(err)
        }
      })
    })
    .catch(function (err) {
      console.log(err)
    })
   }
}

load_WP.prototype.parseDataLink = async function (data) {

  const _self = this
  const d = JSON.stringify(data)
  const mURL = d.match(
    /(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s'"\\])+/gim,
  )

  mURL
    .filter(
      (word) =>
        word.indexOf('gif') !== -1 ||
        word.indexOf('jpg') !== -1 ||
        word.indexOf('jpeg') !== -1 ||
        word.indexOf('tiff') !== -1 ||
        word.indexOf('png') !== -1,
    )
    .forEach((element) => {
      const el = Path.basename(element)
      const pathdata = element.substring(
        element.lastIndexOf('uploads') + 8,
        element.lastIndexOf(el),
      )
      const path = Path.join(__dirname, '../../upload_media', pathdata)
      const df = _self.downloadImage(element, path, el)
    })
}

load_WP.prototype.downloadImage = async function (url, path, name) {
  if (!Fs.existsSync(path)) {
    Fs.mkdirSync(path, { recursive: true })
  }

  const writer = Fs.createWriteStream(Path.join(path, name))

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream',
    auth: {
      username: evn.wpapi.user,
      password: evn.wpapi.password,
    },
  })

  response.data.pipe(writer)
  return new Promise((resolve, reject) => {
    writer.on('finish', () => {
      writer.close()
      return resolve
    })
    writer.on('error', reject)
  })
}

module.exports = load_WP
