export default function Image(props) {
  return (
    <figure>
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
      </a>
    </figure>
  );
}
