import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { Greetings } from "./components/Greetings";
import { Book } from "./components/Book";

export const HelloWorldApp = ({ user, id, title, book }) => {
  return (
    <>
      <Title title={title} />
      <Greetings user={user} id={id} />
      <Book book={book} />
    </>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

HelloWorldApp.defaultProps = {
  title: "Hola mundo por defecto!",
  book: "Harry Potter I",
};
