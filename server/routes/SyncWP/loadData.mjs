import TagModel from "../../models/Tag.mjs";
import CategoryModel from "../../models/Category.mjs";
import PageModel from "../../models/Page.mjs";
import PostModel from "../../models/Post.mjs";
import AuthorModel from "../../models/Author.mjs";
import TruthModel from "../../models/Truth.mjs";
const fnError = function(e, r) {
  if (e) {
    console.log("loadData ERROR");
    console.log(e);
    console.log(r);
  }
};

const ld = {
  posts: {
    insUp: async d => {
      PostModel.updateMany(
        { post_id: d.post_id },
        d,
        { upsert: true, setDefaultsOnInsert: true },
        fnError
      );
    },
    del: async id => {
      PostModel.deleteMany({ post_id: { $in: id } }, fnError);
    }
  },
  pages: {
    insUp: async d => {
      PageModel.updateMany(
        { page_id: d.page_id },
        d,
        { upsert: true, setDefaultsOnInsert: true },
        fnError
      );
    },
    del: async id => {
      PageModel.deleteMany({ page_id: { $in: id } }, fnError);
      PostModel.updateMany(
        { link_source_agent_page_id: id },
        { $set: { link_source_agent_page_id: 0 } },
        fnError
      );
    }
  },
  categories: {
    insUp: async d => {
      CategoryModel.updateMany(
        { categor_id: d.categor_id },
        d,
        { upsert: true, setDefaultsOnInsert: true },
        fnError
      );
    },
    del: async id => {
      CategoryModel.deleteMany({ categor_id: { $in: id } }, fnError);
      PostModel.update(
        { categories: { $in: id } },
        { $pullAll: { categories: id } },
        fnError
      );
    }
  },
  tags: {
    insUp: async d => {
      TagModel.updateMany(
        { tag_id: d.tag_id },
        d,
        { upsert: true, setDefaultsOnInsert: true },
        fnError
      );
    },
    del: async id => {
      TagModel.deleteMany({ tag_id: { $in: id } }, fnError);
      PostModel.update(
        { tags: { $in: id } },
        { $pullAll: { tags: id } },
        fnError
      );
    }
  },
  users: {
    insUp: async d => {
      AuthorModel.updateMany(
        { author_id: d.author_id },
        d,
        { upsert: true, setDefaultsOnInsert: true },
        fnError
      );
    },
    del: async id => {
      AuthorModel.deleteMany({ tag_id: { $in: id } }, fnError);
      PostModel.updateMany(
        { author: { $in: id } },
        { $pullAll: { tags: id } },
        fnError
      );
    }
  },
  truth: {
    insUp: async d => {
      TruthModel.updateMany(
        { truth_id: d.truth_id },
        d,
        { upsert: true, setDefaultsOnInsert: true },
        fnError
      );
    },
    delinvert: async id => {
      TruthModel.deleteMany({ truth_id: { $nin: id } }, fnError);
    }
  }
};

export default ld;
