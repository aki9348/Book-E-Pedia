import Feed from "../model/feedback.model.js";

export const doubt = async (req, res) => {
  try {
    const { name, email, query } = req.body;
    const record = new Feed({
      name,
      email,
      query,
    });
    await record.save();
    res.status(201).json({
      message: "Your response recorded",
      Feed: {
        _id: record._id,
        name: record.name,
        email: record.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "server error " + err });
  }
};
