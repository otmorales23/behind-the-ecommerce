const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [Product]
    })
    res.json(categories);
  } catch (err) {
    res.json(err);
  }
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then((model) => res.json(model))
  .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((model) => res.json(model))
  .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
