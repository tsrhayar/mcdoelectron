const express = require("express");
const router = express.Router();

// Posts model
const Posts = require("../../models/Posts");

// Create
router.post("/", async (req, res) => {
  const newPost = new Posts(req.body);
  try {
    const post = await newPost.save();
    if (!post) throw Error("3andk khata2");

    res.status(200).json(post);
  } catch (error) {
    console.log(err);
  }
});

// Read All
router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error("No items");
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
});

// Read One
router.get("/:id", async (req, res) => {
    try {
      const posts = await Posts.findById(req.params.id);
      if (!posts) throw Error("No items");
      res.status(200).json(posts);
    } catch (err) {
      console.log(err);
    }
  });

//Update
router.put("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
      if (!post) throw Error("3andk Khata2  update");
      res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error("No post found!");
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
