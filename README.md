[![GitHub license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/codotronix/pcr/blob/master/LICENSE)
[![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/codotronix/pcr)
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/codotronix/pcr)

# PCR (PCRemote)
PCRemote, as the name suggests, is meant to be a Remote Controller for controlling PCs or actually any other client capable of running the nodejs.

## Menu
- [Components](https://github.com/codotronix/pcr#components)
- [Architecture](https://github.com/codotronix/pcr#architecture)

## Components
Here goes the 3 major components that comprises PCR. To understand how they are linked together, see the [Architecture](https://github.com/codotronix/pcr#architecture) section of this document

- **MC (Mobile Controller)** is being developed and can be found in the github repo of [PCR-MC](https://github.com/codotronix/pcr-mc). It is a frontend / UI application created with `ReactJS`

- **IS (Intermediate Server)**

- **TS (Target Stattion)**


## Architecture
There will be 2 architectures as follows

- **MC-IS-TS** - Here the MC (Mobile Controller) will talk to the IS (Intermediate Server) and then IS will pass the command to TS (Target Station)

- **MC-TSS** - Here the MC (Mobile Controller) will communicate with the server of TSS (Target Station w Server) and then in turn that server will pass the command to the actual target.

