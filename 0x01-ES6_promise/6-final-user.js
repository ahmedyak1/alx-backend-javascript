import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  /**
  * all Settled creates a Promise that is resolved with an array of results
  */
  return Promise
    // Call the signUpUser() and uploadPhoto() functio
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    // When the promises are all settled it should return an array with the
    // given structur
    .then((results) => (
      results.map((out) => ({
        status: out.status,
        value: out.status === 'fulfilled' ? out.value : String(out.reason),
      }))
    ));
}
