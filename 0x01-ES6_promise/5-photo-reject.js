export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Reject the promise 
    reject(new Error(`${filename} cannot be processed`));
  });
}
