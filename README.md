# equus

Curried equality library.

# Setup

```
$ npm i equus
```

# Example

## Primitives

```js
import equus from 'equus';

const validator = Equus.fromValue(42);

validator.onTest(value => console.log('Mmm... donuts.'));
validator.onPass(value => console.log('Woo Hoo!'));
validator.onFail(error => console.log('D'oh!!!');

validator.eq(42);      // => true
validator.gt(9000);    // => false

validator.getHistory();   // => [{ value: 42, rule: 'eq', result: false }, { value: 9000, rule: 'gt', result false }]
validator.isValid(); 	  // => false

validator.clearFailing(); // => [{ value: 9000, rule: 'gt', result: false }]

validator.isValid(); 	  // => true

validator.clearPassing(); // => [{ value: 42, rule: 'eq', result: true}]
validator.getHistory();   // => []
```

## Objects

```js
const validator = Equus.fromObject({
      name: 'Homer Simpson',
      age: 42,
      address: '742 Evergreen Terrace',
      catchphrase(mood) {
      		    return 'Mmm... donuts!';
      }			
});

validator.is('age').eq(42);					// => true
validator.is('firstName').gt(0);				// => true
validator.is('catchphrase', 'happy').eq('Mmm... donuts!');	// => true
```

## Predefined validators

```js
const validator = Equus.makeRule([eq(5), gt(9000)]);

validator.validate(42); // => true
```

```js
const validator = Equus.makeRules({
      name: [gt(1), is],
      age: [eq(42)],
      address: [is]      
});

validator.validate({
	name: 'Bart Simpson',
	age: 10
}); 	// => false
```
# License

MIT
