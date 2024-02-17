import clx from 'classnames';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

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
    <Card className={clx('bg-gray-300  border-slate-300', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <img className="w-full h-40 object-cover" src={photo}></img>
        <div className="my-10">{children}</div>
        <span className="text-xl bold ">{price}</span>
      </CardContent>
    </Card>
  );
}
