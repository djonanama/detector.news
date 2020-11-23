import PostModel from "../../../models/Post.mjs";
import TruthModel from "../../../models/Truth.mjs";

const percentTruth = async function(matchParam) {
  const trcnt = await PostModel.aggregate([
    {
      $lookup: {
        from: "Page",
        localField: "link_source_agent_page_id",
        foreignField: "page_id",
        as: "page"
      }
    },
    { $match: matchParam },
    {
      $group: {
        _id: "",
        total: {
          $sum: 1
        },
        "truth set": {
          $push: "$truth"
        }
      }
    },
    {
      $unwind: "$truth set"
    },
    {
      $group: {
        _id: {
          truth: "$truth set",
          total: "$total"
        },
        count: {
          $sum: 1
        }
      }
    },
    {
      $project: {
        _id: 0,
        truth_id: "$_id.truth",
        percentage: {
          $multiply: [
            {
              $trunc: [
                {
                  $divide: ["$count", "$_id.total"]
                },
                2
              ]
            },
            100.0
          ]
        }
      }
    }
  ]);

  const usersTruth = await TruthModel.find()
    .select("-_id -__v")
    .lean();

  for (var i = 0; i < usersTruth.length; i++) {
    let obj = trcnt.filter(d => {
      return d.truth_id == usersTruth[i].truth_id;
    })[0] || { percentage: 0 };
    usersTruth[i].percentage = obj.percentage;
  }
  return usersTruth;
};

export default percentTruth;
