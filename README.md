# Svelte Vite Clasp GAS

## Overview
This project integrates Svelte with Google Apps Script (GAS) using Vite and Clasp. It's designed to streamline the deployment process, maintaining a consistent URL through each deployment.

## Prerequisites
Node.js and npm installed
Google Apps Script project created

## Setup

1. Install npm-run-all: This utility allows you to run multiple npm scripts simultaneously.
```
npm install npm-run-all --save-dev
```

2. Configure NPM for Bash: This ensures compatibility with Bash scripting.

```
npm config set script-shell bash
```

3. Set Deployment ID in package.json: This step is crucial to keep the deployment URL consistent.
```
"push:gas": "cd gas && clasp push && clasp deploy --deploymentId [YOUR_DEPLOYMENT_ID] && cd .."
```
Replace [YOUR_DEPLOYMENT_ID] with your actual GAS deployment ID.

## Usage
Run the project locally for development, and use the provided npm scripts to push and deploy to GAS.
