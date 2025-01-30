The issue was resolved by completely deleting the node_modules folder and reinstalling the dependencies.  Additionally, updating the expo CLI and Expo SDK versions to their latest stable releases solved this problem. 

```bash
npm cache clean --force
npm install
expo upgrade
```

If the issue persists after these steps, carefully review the device's network configuration and ensure all necessary permissions are granted to the Expo Go app.