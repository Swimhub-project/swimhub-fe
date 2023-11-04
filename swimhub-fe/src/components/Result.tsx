const keys = ['title', 'tags', 'body' ];

const Result = (props: any) => (
  <div>
    {keys.map((key) => (
      <span key={key}>
        {key.charAt(0).toUpperCase() + key.slice(1)}: {props[key]}
      </span>
    ))}
  </div>
);

export default Result;
