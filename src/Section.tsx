import clx from 'classnames';

export function Section({
  title,
  color,
  invert,
}: {
  title: string;
  color: string;
  invert?: boolean;
}) {
  return (
    <div id={title} className="h-screen">
      <div
        className={`h-48 w-full bg-gradient-to-b from-gray-950 to-1% ${color} to-99% to-gray-950`}
      ></div>

      <div
        // className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-900 from-90% to-yellow-900"
        className={clx(' grid grid-flow-col-dense grid-cols-2 grid-rows-1 ')}
      >
        <div className={clx(' text-slate-500', { 'col-start-2': invert })}>
          <h1
            className={clx('text-5xl py-10 flex', {
              'justify-end': !invert,
            })}
          >
            {title}
          </h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quidem, consequuntur doloribus natus nobis nihil praesentium et
            sapiente magnam facere adipisci odit tenetur nisi illo vero fugit
            recusandae, repellendus totam! Porro expedita repudiandae
            accusantium nihil similique. Soluta sequi adipisci commodi
            laudantium quidem nobis magni ipsa, atque, aperiam nulla numquam
            veniam libero. Non, velit! Facilis suscipit non ipsa aspernatur vero
            illo? Animi amet, incidunt illum inventore voluptatem esse
            cupiditate nulla et quas facere perferendis voluptas dolorum
            tenetur, officiis distinctio. Natus dolorem consectetur maxime iusto
            nobis voluptatem nam molestias culpa necessitatibus harum.
          </span>
        </div>
        <div
          className={`mx-20 pt-40 px-4 bg-gradient-to-b from-gray-950 from-5% ${color} to-95% to-gray-950`}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque
          eaque nam quos rem? Iste officiis aliquid expedita officia cupiditate
          eum adipisci, voluptas at dolorum, aspernatur blanditiis provident
          molestias ea.
        </div>
      </div>
    </div>
  );
}
