import { Component } from '@angular/core';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

@Component({
  selector: 'app-insights',
  templateUrl: './insights.html',
  standalone: false
})
export class InsightsComponent {
  categories = [
    'All Articles',
    'AI & Automation',
    'Web Development',
    'eCommerce',
    'Marketing Strategy',
    'SEO',
    'Design & Branding',
    'Case Studies',
    'Industry News'
  ];

  selectedCategory = 'All Articles';

  featuredArticle: Article = {
    id: 'ai-voice-agents-transforming',
    title: 'How AI Voice Agents Are Transforming Customer Service',
    excerpt: 'Explore the revolutionary shift as businesses adopt AI voice technology to provide 24/7 support, reduce operational costs, and personalise customer interactions at scale.',
    category: 'AI & Automation',
    author: 'Mohsin G.',
    date: 'Jan 28, 2026',
    image: 'images/insights-hero.png',
    readTime: '8'
  };

  articles: Article[] = [
    {
      id: 'choosing-right-ecommerce-platform',
      title: 'Choosing the Right eCommerce Platform for Your Business',
      excerpt: 'A comprehensive comparison of Shopify, WooCommerce, and Custom solutions to help you make an informed decision for your growth.',
      category: 'eCommerce',
      author: 'Mohsin G.',
      date: 'Jan 25, 2026',
      image: 'images/ecommerce-hero.png',
      readTime: '12'
    },
    {
      id: 'ppc-vs-seo-investment',
      title: 'PPC vs SEO: Which Should You Invest In First?',
      excerpt: 'Understanding the balance between immediate results and long-term sustainability to maximise your marketing ROI.',
      category: 'Marketing Strategy',
      author: 'Mohsin G.',
      date: 'Jan 22, 2026',
      image: 'images/ppc-hero.png',
      readTime: '10'
    },
    {
      id: 'seo-in-2026-changes',
      title: "SEO in 2026: What's Changed and What Hasn't",
      excerpt: 'Analyze the latest search algorithm updates and why core principles of value and authority remain the ultimate ranking factors.',
      category: 'SEO',
      author: 'Mohsin G.',
      date: 'Jan 18, 2026',
      image: 'images/seo-hero.png',
      readTime: '9'
    },
    {
      id: 'roi-chatbot-implementation',
      title: 'The ROI of Chatbot Implementation: Real Numbers',
      excerpt: 'Breaking down the actual financial impact and efficiency gains businesses see after deploying intelligent support bots.',
      category: 'AI & Automation',
      author: 'Mohsin G.',
      date: 'Jan 15, 2026',
      image: 'images/consultancy-hero.png',
      readTime: '7'
    }
  ];

  filteredArticles = this.articles;

  setCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All Articles') {
      this.filteredArticles = this.articles;
    } else {
      this.filteredArticles = this.articles.filter(a => a.category === category);
    }
  }
}
