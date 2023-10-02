# Svelte Vite Clasp GAS

NPM RUN ALL installieren, um gleichzeitig mehrere Skripte laufen zu lassen:

```
npm install npm-run-all --save-dev
```

Bitte NPM für Bash konfigurieren:

```
npm config set script-shell bash
```

In der Package.JSON eine Deployment ID vorgeben, damit immer die URL erhalten bleibt:

```
"push:gas": "cd gas && clasp push && clasp deploy --deploymentId AKfycbxwnVtEwyVxUJHShPBgdk2k4-r2QMSVUxJrywelHflgJBbHVhFvADE1F_Jy-3fly_aN1A && cd .."
```
