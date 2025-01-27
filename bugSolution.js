The solution involves using `async`/`await` to ensure the data is loaded before accessing it.  This provides better error handling and code readability.

```javascript
// Corrected code using async/await
async function getMyData() {
  const docRef = db.collection('myCollection').doc('myDoc');
  const doc = await docRef.get();
  if (doc.exists()) {
    console.log(doc.data().myField); 
  } else {
    console.log('No such document!');
  }
}
getMyData();
```
Alternatively, you could achieve the same with `.then()` chaining, though async/await is often preferred for readability:

```javascript
//Corrected Code using Promise Chaining
db.collection('myCollection').doc('myDoc').get().then(doc => {
  if (doc.exists()) {
    console.log(doc.data().myField);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.log("Error getting document:", error);
});
```