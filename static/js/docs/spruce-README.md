# Hooks
Learn how to hook into the Spruce lifecycle.

Spruce goes through various steps during it's lifecycle on a website. Hooks can be used to execute code at certain points in Spruce's execution cycle.

## Spruce.starting()

This hook can be used to invoke a function before Spruce has fully initialised and before any global stores are being watched.

```
Spruce.starting(function () {
    console.log('Spruce is starting...')
})
```

## Spruce.started()

This hook can be used to invoke a function after Spruce has fully initialised and after any global stores are being watched.

```
Spruce.started(function () {
    console.log('I can access Proxy instances here...')
})
```

# Creating a store

Begin by creating a new store called toast.

```
Spruce.store('toast', {
​
})
```

This store needs to hold all of the toasts to be displayed, so add a new toasts property.

```
Spruce.store('toast', {
    toasts: [],
})
```

To make adding a new toast simple, define a new method called add(). This method should accept a single argument, message.

```
Spruce.store('toast', {
    toasts: [],
    add(message) {
        
    }
})
```

The new add(message) method needs to append the message to the toasts property. This can be done using the Array.push method.

```
Spruce.store('toast', {
    toasts: [],
    add(message) {
        this.toasts.push(message)
    }
})
```

Outputting toasts on the page

You can use Alpine to output the toasts on the page. The best way to do this is using Alpine's x-for directive.

```
<div x-data>
    <template x-for="toast in $store.toast.toasts">
        <div class="toast">
            <span x-text="toast"></span>
        </div>
    </template>
</div>
```

Removing toasts on click

To remove a toast when it has been clicked, you can add an event listener to the toast itself and modify the global store.

Begin by adding a new remove method to the toast store. This method should accept the index of the toast you want to remove.

```
Spruce.store('toast', {
    toasts: [],
    add(message) {
        this.toasts.push(message)
    },
    remove(index) {
        this.toasts.splice(index, 1)
    }
})
```

You will also need to pull the index into the x-for loop. Alpine uses the (item, index) syntax for this.

```
<div x-data>
    <template x-for="(toast, index) in $store.toast.toasts">
        <div @click="$store.toast.remove(index)" class="toast">
            <span x-text="toast"></span>
        </div>
    </template>
</div>
```

To improve the usability of this, you could wrap the toast in a `<button></button>` so that it is more semantically accurate. 
Styling the toast component

Now that the toasts are being output on the page, go ahead and style them accordingly.

The most common approach to this is having them float in one position on the page, normally in the bottom corner or at the very top.

# Persistence
Learn how to create persisted stores and keep track of state changes between page navigations.

Spruce provides an API for persisting stores between page navigations. This means that your global state can be updated on one page, saved to local storage and that updated data can then be used on another page.

This is really useful for retaining the state of particular components between page navigations.
Creating a persisted store

To create a persisted store, you need to pass a third argument to the Spruce.store() method. This argument should be a boolean (true or false). 

```
Spruce.store('colorScheme', 'light', true)
```

When this piece of state is mutated, it will be automatically persisted to local storage and fetched on the next page load.

```
<button x-data @click="$store.colorScheme = 'dark'">Use Dark Mode</button>
```

When this `<button></button>` is clicked, the value of `colorScheme` is set to 'dark' and will be set to that on the next page navigation too.

Some browsers disable access to local storage when in private browsing mode, meaning persisted stores do not work.
Adding methods to persisted stores

Persisted stores can have methods, just like regular stores. The methods are merged in to the persisted data object after retrieval.

```
Spruce.store('user', {
    name: 'Ryan Chandler',
    getFirstName() {
        return this.name.split(' ')[0]
    }
}, true)
```

After making a change to the store and navigating to a different page that also uses this store, you will still be able to call the `$store.user.getFirstName()` method.

Only top-level methods are merged into the persisted object. This means any nested methods will not be available on the persisted store.
Accepted data types

Persisted stores only support data types that are JSON serialisable.

## Using a custom driver

The persistence API provided by Spruce is driver-based. This means you can swap out the way persisted stores are handled with your own custom implementation.

To change the driver, use the `Spruce.persistUsing()` method.

```
Spruce.persistUsing(window.sessionStorage)
```

The example above swaps out the default localStorage driver with the sessionStorage one. Both of these objects implement a `getItem(key)` and `setItem(key, value)` method, meaning they are compatible.

If you wish to use a completely bespoke solution, you can provide your own object. This object must also implement the `getItem(key)` and `setItem(key, value)` methods. These methods will be called by Spruce when initialising persisted stores and saving changed data.

```
Spruce.persistUsing({
    getItem(key) {
        return db.get(key)
    },
    setItem(key, value) {
        db.set(key, value)
    }
})
```

Be sure to set / change the driver before creating or declaring any persisted stores. Spruce will not re-persist stores after their initial load, or when the driver is changed.

# Watchers
Learn how to watch for global state changes.

Alpine provides a handy `$watch` function that allows you to watch for state changes on a component. Spruce also offers a similar API that allows you to watch for state changes on any store.
Registering a watcher

To register a new "watcher", use the `Spruce.watch()` method.

```
Spruce.store('user', {
    name: 'Ryan Chandler',
    email: 'support@ryangjchandler.co.uk',
})
```
​
```
Spruce.watch('user.name', value => console.log(value))
```

The first argument is the "dot notation" of the property's path. In the example above, the watcher is being registered on the user store and looking at the name property, therefore the dot notation of this path is user.name.

The second argument is a callback function that will be invoked each time the property being watched is mutated. This callback receives the new value of the property, meaning you don't need to reach into the store to grab it.

Be careful when registering watchers that mutate other store properties. These mutations can create infinite loops.
Using `$watch`

In newer versions of Alpine, you can watch for changes on magic properties using $watch. This is useful if you only want to watch for state changes to a global store from a single component.

The watcher must be registered inside of the x-init directive on the component.

```
<div x-data x-init="$watch('$store.user.name', () => ...)">
    <!-- markup -->
</div>
```

The first argument to $watch must be a string. When watching a store, you must use the name of the property as accessed inside of other directives.

In the example above, the watcher is being registered on the user store, looking for changes of the name property.

Watchers registered using $watch will not be invoked when a global store is modified outside of the component where the watcher is being registered.

# Stores
Learn what a store is and how to create, modify and reset them.
What is a store?

A store is an object that holds global state. They are named objects, meaning different groups of global data can be accessed under a single name.

Stores are also reactive. Any changes made to a store will trigger a re-render on all Alpine components that are subscribed.

An Alpine component will be automatically subscribed to global state changes when it first accesses a piece of global state. There is no need to tell Spruce which components need to be re-rendered when state changes.
Creating a new store

You can create a store using the `Spruce.store()` method.

```
Spruce.store('user', {
    name: 'Ryan Chandler',
    email: 'support@ryangjchandler.co.uk',
})
```

The first argument is the name of the store. This should describe what data is being tracked inside of the store. The second argument is the state itself.

## Accepted data types

When defining a store, you will most likely be using an object or array to hold your data. However, Spruce also supports using scalar values such as string, int or boolean as the data type.

```
Spruce.store('name', 'Ryan Chandler')
```

The Spruce object is defined on the windowobject, therefore accessing it inside of a bundled file (or outside of the global scope) will require you to use `window.Spruce` instead.

Spruce also accepts a function as the second argument. This function should return the store's state, similar to function-based components in Alpine.

```
Spruce.store('user', function () {
    let user = window.User
    
    /* Do some stuff with `user` here */
    
    return {
        name: user.name,
        email: user.email,
    }
})
```

## Accessing a store from Alpine

To access a store from an Alpine component, Spruce provides a magic $store variable. This is an object that holds each store under a property.

For example, to access tthe user store above, you would use $store.user.name inside of your Alpine component.

```
<span x-data x-text="$store.user.name">
    <!-- outputs "Ryan Chandler" -->
</span>
```

Previous versions of Spruce required the user of an x-subscribe directive on the root element. Since 1.x, this is no longer needed. The $store variable is automatically available for use in your components.

If you are accessing the $store variable from inside a function on your component, you must use this.$store instead.

```
function componentData() {
    return {
        getName() {
            return this.$store.user.name;
        }
    }
}
```

## Accessing a store from JavaScript

If you would like to access a store inside of a JavaScript file or `<script></script>` tag, you can use the `Spruce.store()` method too. Pass the name of the store, omitting the second argument.

```
Spruce.store('user', {
    name: 'Ryan Chandler',
    email: 'support@ryangjchandler.co.uk',
})
​
const userStore = Spruce.store('user')
​
console.log(userStore.name)
```

This will return the underlying Proxy which can be used to access all of your state.

## Overwriting a store

If you wish to overwrite, or redefine, your store at runtime, you must use the `Spruce.reset()` method. This method will forcefully overwrite the current state.

```
Spruce.reset('user', {
    name: 'John Doe',
})
​
console.log(Spruce.store('user').name)  // "John Doe"
console.log(Spruce.store('user').email) // "undefined"
```

## Adding methods to stores

Much like data objects in Alpine, you can define methods on your Spruce stores. These methods can then be called on the store object.

```
Spruce.store('user', {
    name: 'Ryan Chandler',
    email: 'support@ryangjchandler.co.uk',
    getFirstName() {
        return this.name.split(' ')[0]
    }
})
​
const userStore = Spruce.store('user')
​
console.log(userStore.getFirstName()) // "Ryan"
```

The this context of a method is bound to the store object itself, so you can access all of the defined properties.
Getters and setters

Since Spruce generally uses "object literals" to hold state, you can also define getters and setters on those objects.

```
Spruce.store('user', {
    name: 'Ryan Chandler',
    email: 'support@ryangjchandler.co.uk',
    get firstName() {
        return this.name.split(' ')[0]
    }
})
​
const userStore = Spruce.store('user')
​
console.log(userStore.firstName) // "Ryan"
```