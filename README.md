# mustadio
some helpers for browser automation

A fun side project inspired by http://the-internet.herokuapp.com to reproduce tricky automation scenarios devoid of any state.

## docker
Mustadio uses `nodemon` for hot reloading. Use docker with a volume mount for a hot reloading container:

```docker run -p 3000:3000 --rm -v `pwd`:/app yet-another-lucas/mustadio:latest```
