import * as React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Error } from 'components/Error/Error';
import { useSelector } from 'react-redux';
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { EmptyContactsList } from 'components/EmptyContactList/EmptyContactList';
import { ContactList } from 'components/ContactList/ContactList';
import { CssBaseline, Container, Box } from '@mui/material';
import contacts from 'photo/contacts.jpg';
import { boxContactsStyle, containerContactsStyle } from '../StylePages';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const phoneBook = useSelector(selectContactsList);

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={containerContactsStyle(contacts)}
    >
      <CssBaseline />
      <Box sx={boxContactsStyle}>
        <ContactForm />
        <Filter />
        {error ? <Error /> : <ContactList />}
        {phoneBook.length === 0 && !error && !isLoading && (
          <EmptyContactsList />
        )}
      </Box>
    </Container>
  );
};

export default ContactsPage;
