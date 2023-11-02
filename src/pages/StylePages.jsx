export const paperMainStyle = photo => ({
  position: 'relative',
  backgroundColor: 'grey',
  color: '#fff',
  mb: 1,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundImage: `url(${photo})`,
  minHeight: 500,
});

export const boxMainStyle = {
  position: 'relative',
  p: { xs: 3, md: 2 },
  pr: { md: 0 },
};
export const containerContactsStyle = photo => ({
  position: 'relative',
  mb: 1,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundImage: `url(${photo})`,
});

export const boxContactsStyle = {
  mx: 'auto',
  borderRadius: 5,
  maxWidth: 500,
  px: 5,
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const boxFormStyle = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'white',
};

export const boxBottomFStyle = {
  display: 'flex',
  justifyContent: 'center',
  mb: 4,
  alignItems: 'center',
};

export const avatarStyle = {
  m: 1,
  color: '#1976d2',
  bgcolor: 'white',
};
