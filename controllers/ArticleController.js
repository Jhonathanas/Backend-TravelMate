const Article = require('../models/Article.model');

// Get all articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find().populate('user_id').populate('pariwisata');
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get article by ID
exports.getArticleById = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id).populate('user_id').populate('pariwisata');
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new article
exports.createArticle = async (req, res) => {
    const { title, description, user_id, pariwisata } = req.body;

    const newArticle = new Article({
        title,
        description,
        user_id,
        pariwisata,
    });

    try {
        const savedArticle = await newArticle.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an article
exports.updateArticle = async (req, res) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('user_id').populate('pariwisata');
        
        if (!updatedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an article
exports.deleteArticle = async (req, res) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id);
        if (!deletedArticle) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
