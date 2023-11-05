const keys = ['title', 'body', 'tags'];

const Result = (props: any) => (
  <div>
    {keys.map((key, index) => (
      <div key={key} className={`result-${key}`}>
        {key.charAt(0).toUpperCase() + key.slice(1)}: {props[key]}
        {index < keys.length - 1 && <br />}
      </div>
    ))}
  </div>
);

export default Result;
