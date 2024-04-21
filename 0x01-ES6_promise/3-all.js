import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  // Call the upload photo function
  // promises together 
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((userResp) => {
      // If the user was successfully created, log the body, firstName, and lastName to the console
      console.log(`${userResp[0].body} ${userResp[1].firstName} ${userResp[1].lastName}`);
    })
    .catch(() => {
      // In the event of an error, log Signup system offline to the console
      console.log('Signup system offline');
    });
}
