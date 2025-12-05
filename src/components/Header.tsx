import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'ShoppingBag' },
    { id: 'articles', label: 'Статьи', icon: 'BookOpen' },
    { id: 'reviews', label: 'Отзывы', icon: 'Star' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Cat" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">КотоМаркет</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === item.id 
                    ? 'text-primary font-semibold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </button>
            ))}
          </nav>
          <Button variant="default" size="sm">
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Корзина (0)
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
