const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderBoardSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: {
      type: String,
      unique: true,
    },
    total_points: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

leaderBoardSchema.methods.getRank = function (username) {
  LeaderBoard.find()
    .sort("-total_points")
    .exec(function (err, doc) {
      if (err) {
        throw err;
      }

      doc.forEach((user, index) => {
        if (user.username.toLowerCase() === username.toLowerCase()) {
          return index + 1;
        }
      });
    });
};

const LeaderBoard = mongoose.model("LeaderBoard", leaderBoardSchema);

module.exports = LeaderBoard;
