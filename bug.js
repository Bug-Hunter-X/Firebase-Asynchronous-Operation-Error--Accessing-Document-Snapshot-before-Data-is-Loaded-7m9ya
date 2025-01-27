The Firebase SDK may throw an error if you attempt to access a property of a document snapshot before the snapshot has fully loaded.  This is particularly common when using asynchronous operations such as `getDoc()` or `onSnapshot()`.  The error might not always be immediately obvious, leading to seemingly unpredictable behavior.

```javascript
// Problematic code
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // Error if data isn't loaded yet
});
```