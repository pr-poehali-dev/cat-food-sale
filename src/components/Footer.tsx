import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Cat" size={28} className="text-primary" />
              <h3 className="text-xl font-bold">КотоМаркет</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Лучшие корма для вашего питомца с доставкой по всей России
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Сухие корма</li>
              <li>Влажные корма</li>
              <li>Корма для котят</li>
              <li>Диетические корма</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Возврат товара</li>
              <li>Блог</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+7 (800) 123-45-67</li>
              <li>info@kotomarket.ru</li>
              <li>Москва, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 КотоМаркет. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
