import { Link } from 'react-router-dom';

const NotFound = (props) => {
  console.log(props);
  const history = props.location.pathname;

  console.log(history);

  const styles = {
    border: '1px solid crimson',
    borderRadius: '1.5em',
    display: 'inline-block',
    padding: '1em',
  };
  return (
    <div>
      <h3>Page not found</h3>
      <p>Error 404</p>
      <Link to='/' style={styles}>
        GO BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
