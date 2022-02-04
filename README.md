# Fastest Node server to serve static assets

Just a quick Node benchmark to compare `fastify`, `express`, and `polka`
at serving static assets.
For `fastify` it's only testing `fastify-static`.
For `express` and `polka` it's try both `serve-static` and `sirv` each.

## Benchmark (1.7KB CSS)

```sh
hey -n 10000 -c 10 http://localhost:3000/images/add-deploy-key.png
```

### `fastify-static.js`

```sh
  Requests/sec:	3567.4125
```

### `express-serve-static.js`

```sh
  Requests/sec:	4569.7754
```

### `express-sirv.js`

```sh
  Requests/sec:	5564.6012
```

### `polka-serve-static.js`

```sh
  Requests/sec:	7626.6974
```

### `polka-sirv.js`

```sh
  Requests/sec:	8277.9442
```


## Benchmark (43KB PNG)

```sh
hey -n 10000 -c 10 http://localhost:3000/images/add-deploy-key.png
```

### `fastify-static.js`

```sh
  Requests/sec:	3019.3314
```

### `express-serve-static.js`

```sh
  Requests/sec:	4064.6835
```

### `express-sirv.js`

```sh
  Requests/sec:	4346.1989
```

### `polka-serve-static.js`

```sh
  Requests/sec:	7504.3410
```

### `polka-sirv.js`

```sh
  Requests/sec:	7228.8986
```

## Benchmark (1.7MB PNG)

```sh
hey -n 10000 -c 10 http://localhost:3000/images/intro-to-apps-flow.png
```

### `fastify-static.js`

```sh
  Requests/sec:	569.4197
```

### `express-serve-static.js`

```sh
  Requests/sec:	753.7076
```

### `express-sirv.js`

```sh
  Requests/sec:	887.2712
```

### `polka-serve-static.js`

```sh
  Requests/sec:	1023.1122
```

### `polka-sirv.js`

```sh
  Requests/sec:	1098.4654
```

## Conclusion

- `fastify`/`fastify-static` is worst.
- For `express` using `sirv` instead of `serve-static` is about 20% faster
- `polka` is always fastest independent
