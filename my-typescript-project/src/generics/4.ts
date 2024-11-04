type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
  
  console.log(initialValues);
}

createOrUpdateUser({ 
  email: 'user@gmail.com', 
  password: 'pass8574' 
});
