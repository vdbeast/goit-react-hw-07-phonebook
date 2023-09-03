import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/api";
import { selectError, selectIsLoading } from "redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
      </div>
  );
};

export default App;
