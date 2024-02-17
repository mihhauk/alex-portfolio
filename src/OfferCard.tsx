import clx from 'classnames';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';

export function OfferCard({
  title,
  photo,
  price,
  children,
  className,
}: {
  title: string;
  children: JSX.Element | string;
  photo: string;
  price: string;
  className?: string;
}) {
  return (
    <Card
      className={clx(
        'flex flex-col bg-slate-200  border-red-900 border-2',
        className
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col grow">
        <img className="w-full h-64 object-cover rounded-md" src={photo}></img>
        <div className="my-10">{children}</div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <span className="text-2xl font-bold align-self-end">{price}</span>
      </CardFooter>
    </Card>
  );
}
