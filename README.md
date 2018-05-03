# exactlyOneSubviewCrash

Minimal replication of crash when running detox tests. 
Raised [here](https://github.com/wix/detox/issues/709)

To replicate:

```
$ yarn
$ yarn test
```

Note that a crash does not occur if either

* you swap out the `ScrollView` in the Main component for a `View` the test passes.
* you remove the `waitFor` check in the test.
