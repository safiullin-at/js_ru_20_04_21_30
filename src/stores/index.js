import { articles } from '../fixtures'
import ArticleStore from '../stores/ArticleStore'

export const articleStore = new ArticleStore(articles)