import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-${compact ? 'shadow' : 'all'} duration-300 ${!compact && 'hover:-translate-y-1'}`}>
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full ${compact ? 'h-48' : 'h-56'} object-cover`}
        />
      </CardHeader>
      <CardContent className={compact ? 'p-4' : 'p-5'}>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">
            {product.category === 'dry' ? 'Сухой корм' : 'Влажный корм'}
          </Badge>
        </div>
        <CardTitle className={`${compact ? 'text-lg' : 'text-xl'} mb-2`}>{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
        <div className="flex items-center gap-1 mb-3">
          <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
          <span className="font-semibold">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviews}{!compact && ' отзывов'})</span>
        </div>
      </CardContent>
      <CardFooter className={`${compact ? 'p-4 pt-0' : 'p-5 pt-0'} flex items-center justify-between`}>
        <div className="text-2xl font-bold text-primary">{product.price} ₽</div>
        <Button size={compact ? 'sm' : 'default'}>
          <Icon name="ShoppingCart" size={compact ? 16 : 18} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
