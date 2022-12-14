**Moved: https://github.com/intrinsisch/intrinsisch/commit/5f11b867698cfe8111e79499e65d40a9e95cded3**

# blog

Automatically deployed by Netlify to [https://blog.intrinsisch.lvl8.io/](https://blog.intrinsisch.lvl8.io/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/88d86080-801f-4fc0-89bb-ade22944e629/deploy-status)](https://app.netlify.com/sites/candid-pegasus-bbf558/deploys)

## Prerequisites

* Node v16.17 or higher
* Yarn v1.22 or higher

### Run with Docker

To run the development environment in a container the `/.devcontainer/Dockerfile` can be used.

## Setup

```sh
$ yarn
```

## Pull framework changes

```sh
$ git submodule update --remote framework
```

## Development

```sh
$ yarn dev
```

## Build

```sh
$ yarn build
```
