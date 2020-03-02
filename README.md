# KittyHash [![Build Status](https://travis-ci.org/Nek0trkstr/KittyHash.svg?branch=master)](https://travis-ci.org/Nek0trkstr/KittyHash) [![codecov](https://codecov.io/gh/Nek0trkstr/KittyHash/branch/master/graph/badge.svg?token=bnGgfoRMcD)](https://codecov.io/gh/Nek0trkstr/KittyHash)

My attempt to create radio that will raise money for charity, via mining cryptocurrency on client side.
Kittyhash is fully containerized. 

## Getting Started

To run the radio locally: 
```
docker-compose up
```
> Issue wuth self-signed certificates on local environments.

### Application Components

* *LiquidSoap* - Stream source [LiquidSoap](https://www.liquidsoap.info/).
* *Icecast* - Streaming media server [Icecast](http://icecast.org/).
* *Create React App* - UI [Create React App](https://github.com/facebookincubator/create-react-app).

### Prerequisites

 * Node v11 >=
 * Docker

### Installing

From ui folder exec:

```
npm install
```

## Running the tests

Since Icecast and Liquidsoap is opensource projects the only unit tests implemented is for UI.
From ui project folder, run:

```
npm run test
```

### And coding style tests

Coding style is defined by airbnb, to verify code-style exec:

```
npm run lint
```

## Deployment

Project is hosten on [DigitalOcean](https://www.digitalocean.com/) kubernetes.
Helm package is still to be done, in meantime deployment is done via `kubectl`.
For instance to deploy ui:

```
kubectl apply -f ui/ui_deployment.yaml
```

## Built With

* [TravisCI](https://travis-ci.org/) - CI/CD Tool.
* [DockerHub](https://hub.docker.com/) - Docker Registry.

## Authors

* **Michael Shebeko** - *Initial work* - [Nek0trkstr](https://github.com/Nek0trkstr).

## Acknowledgments

* [PhasecoreX](https://github.com/PhasecoreX/) - for providing clean, minimized liquidsoap docker image.
* [infiniteproject](https://github.com/infiniteproject) - for providing, icecast docker image.
* [Renovate by WhiteSource](https://renovate.whitesourcesoftware.com/) - for keeping my dependencies updated.
