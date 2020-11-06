const tr = {
  posts: (d, fn) => {
    return {
      post_id: d.id,
      date: new Date(d.date),
      modified: new Date(d.modified),
      title: d.title.rendered,
      fimg_url: fn(d.fimg_url),
      content: fn(d.content.rendered),
      link_source_agent_page_id: d.acf.author_of_the_statement.ID,
      link_source: d.acf.publication_link,
      geo_locate: d.acf.geo_locate,
      categories: d.categories,
      tags: d.tags,
      truth: parseInt(d.acf.truth),
      date_of_statement: d.acf.date_of_statement,
      message: d.acf.message,
      author: d.author
    };
  },
  pages: (d, fn) => {
    return {
      page_id: d.id,
      date: new Date(d.date),
      modified: new Date(d.modified),
      title: d.title.rendered,
      fimg_url: fn(d.fimg_url),
      content: d.content.rendered,
      type_s: d.acf.type
    };
  },
  categories: d => {
    return {
      categor_id: d.id,
      count_link: d.count,
      description: d.description,
      name: d.name,
      slug: d.slug,
      parent_id: d.parent
    };
  },
  tags: d => {
    return {
      tag_id: d.id,
      count_link: d.count,
      description: d.description,
      name: d.name,
      slug: d.slug
    };
  },
  users: (d, fn) => {
    return {
      author_id: d.id,
      description: d.description,
      mpp_avatar: {
        24: fn(d.mpp_avatar[24]),
        48: fn(d.mpp_avatar[48]),
        96: fn(d.mpp_avatar[96]),
        150: fn(d.mpp_avatar[150]),
        300: fn(d.mpp_avatar[300]),
        full: fn(d.mpp_avatar.full)
      },
      first_name: d.first_name,
      last_name: d.last_name
    };
  },
  truth: d => {
    return {
      truth_id: d.id,
      label: d.label
    };
  }
};

export default tr;
