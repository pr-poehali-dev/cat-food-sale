import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  product: string;
  text: string;
  helpful: number;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg">{review.author}</CardTitle>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {review.date} • {review.product}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground mb-4">{review.text}</p>
        <Button variant="ghost" size="sm">
          <Icon name="ThumbsUp" size={16} className="mr-2" />
          Полезно ({review.helpful})
        </Button>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
