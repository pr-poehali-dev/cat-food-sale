import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ReviewCard from '@/components/ReviewCard';
import Footer from '@/components/Footer';

const products = [
  {
    id: 1,
    name: 'Премиум корм для кошек',
    category: 'dry',
    price: 1200,
    rating: 4.8,
    reviews: 156,
    image: 'https://cdn.poehali.dev/projects/56a97b7b-1988-4e62-913f-9c712879e2ed/files/9068ab87-58aa-47f2-8122-d2f8c74c6b60.jpg',
    description: 'Натуральный состав, с курицей и рисом'
  },
  {
    id: 2,
    name: 'Влажный корм Деликатес',
    category: 'wet',
    price: 89,
    rating: 4.9,
    reviews: 203,
    image: 'https://cdn.poehali.dev/projects/56a97b7b-1988-4e62-913f-9c712879e2ed/files/7fb624e9-740b-41a1-aa78-190b1a398196.jpg',
    description: 'С лососем и овощами, 85г'
  },
  {
    id: 3,
    name: 'Корм для котят',
    category: 'dry',
    price: 950,
    rating: 4.7,
    reviews: 128,
    image: 'https://cdn.poehali.dev/projects/56a97b7b-1988-4e62-913f-9c712879e2ed/files/9068ab87-58aa-47f2-8122-d2f8c74c6b60.jpg',
    description: 'Специальная формула для роста'
  },
  {
    id: 4,
    name: 'Диетический корм',
    category: 'wet',
    price: 95,
    rating: 4.6,
    reviews: 89,
    image: 'https://cdn.poehali.dev/projects/56a97b7b-1988-4e62-913f-9c712879e2ed/files/7fb624e9-740b-41a1-aa78-190b1a398196.jpg',
    description: 'Для чувствительного пищеварения'
  },
  {
    id: 5,
    name: 'Корм с говядиной',
    category: 'dry',
    price: 1350,
    rating: 4.9,
    reviews: 247,
    image: 'https://cdn.poehali.dev/projects/56a97b7b-1988-4e62-913f-9c712879e2ed/files/9068ab87-58aa-47f2-8122-d2f8c74c6b60.jpg',
    description: 'Богат протеином, 2кг'
  },
  {
    id: 6,
    name: 'Корм с рыбой',
    category: 'wet',
    price: 105,
    rating: 4.8,
    reviews: 178,
    image: 'https://cdn.poehali.dev/projects/56a97b7b-1988-4e62-913f-9c712879e2ed/files/7fb624e9-740b-41a1-aa78-190b1a398196.jpg',
    description: 'Тунец в желе, 100г'
  }
];

const reviews = [
  {
    id: 1,
    author: 'Анна М.',
    rating: 5,
    date: '15 ноября 2024',
    product: 'Премиум корм для кошек',
    text: 'Отличный корм! Мой кот ест с удовольствием, шерсть стала блестящей. Покупаю уже третий раз.',
    helpful: 24
  },
  {
    id: 2,
    author: 'Дмитрий К.',
    rating: 5,
    date: '10 ноября 2024',
    product: 'Влажный корм Деликатес',
    text: 'Кошке очень нравится! Состав хороший, цена адекватная. Рекомендую.',
    helpful: 18
  },
  {
    id: 3,
    author: 'Елена П.',
    rating: 4,
    date: '5 ноября 2024',
    product: 'Корм для котят',
    text: 'Котята едят с аппетитом. Единственный минус - упаковка не очень удобная.',
    helpful: 12
  }
];

const articles = [
  {
    id: 1,
    title: 'Как правильно выбрать корм для кошки',
    date: '20 ноября 2024',
    excerpt: 'Разбираемся в составе кормов и учимся читать этикетки. Что должно быть в хорошем корме?',
    category: 'Питание'
  },
  {
    id: 2,
    title: 'Переход на новый корм: пошаговая инструкция',
    date: '15 ноября 2024',
    excerpt: 'Как правильно перевести кошку на другой корм без стресса для питомца.',
    category: 'Советы'
  },
  {
    id: 3,
    title: 'Сухой или влажный корм: что лучше?',
    date: '10 ноября 2024',
    excerpt: 'Сравниваем преимущества и недостатки разных типов кормов.',
    category: 'Питание'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent to-secondary/10 p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Лучшее питание для вашего питомца
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Премиальные корма для кошек с доставкой по всей России. 
                    Натуральные ингредиенты, проверенное качество.
                  </p>
                  <div className="flex gap-4">
                    <Button size="lg" onClick={() => setActiveSection('catalog')}>
                      <Icon name="ShoppingBag" size={20} className="mr-2" />
                      Смотреть каталог
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => setActiveSection('articles')}>
                      Полезные статьи
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 md:h-96">
                  <img
                    src="https://cdn.poehali.dev/projects/56a97b7b-1988-4e62-913f-9c712879e2ed/files/d804d5e6-7adc-4fd0-a18e-a9d8d3af7de9.jpg"
                    alt="Happy cat"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Популярные товары</h2>
                <Button variant="link" onClick={() => setActiveSection('catalog')}>
                  Смотреть все
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(0, 3).map(product => (
                  <ProductCard key={product.id} product={product} compact />
                ))}
              </div>
            </section>

            <section className="bg-muted/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Почему выбирают нас?</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: 'Award', title: 'Премиум качество', text: 'Только проверенные бренды' },
                  { icon: 'Truck', title: 'Быстрая доставка', text: 'По всей России за 2-3 дня' },
                  { icon: 'Shield', title: 'Гарантия', text: '100% возврат если не подошло' },
                  { icon: 'Heart', title: 'Забота', text: 'Консультации по выбору корма' }
                ].map((feature, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon name={feature.icon} size={32} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeSection === 'catalog' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="text-3xl font-bold">Каталог товаров</h2>
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-auto">
                <TabsList>
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="dry">Сухие корма</TabsTrigger>
                  <TabsTrigger value="wet">Влажные корма</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {activeSection === 'articles' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Полезные статьи</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(article => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'reviews' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Отзывы покупателей</h2>
            <div className="grid gap-6">
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Оставьте свой отзыв</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Отзыв</label>
                  <Textarea placeholder="Поделитесь вашим мнением о корме" rows={4} />
                </div>
                <Button>
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить отзыв
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (800) 123-45-67</div>
                      <div className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@kotomarket.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Напишите нам</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea placeholder="Ваше сообщение" rows={5} />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
