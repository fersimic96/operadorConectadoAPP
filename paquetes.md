# Guía de Instalación y Paquetes - Operador Conectado APP

## 1. Requisitos Previos

Asegúrate de tener instalado:
- Node.js (versión 18 o superior)
- npm (viene con Node.js)
- Ruby (para iOS/CocoaPods)
- Xcode (para desarrollo iOS)
- Android Studio (para desarrollo Android)

## 2. Creación del Proyecto

### 2.1 Inicializar Proyecto React Native
```bash
npx @react-native-community/cli init operadorConectadoApp
```

## 3. Instalación de Dependencias

### 3.1 Dependencias Principales
```bash
cd frontend
npm install @azure/msal-react@3.0.7 @azure/msal-browser@4.8.0 react-native-msal@4.0.4
```

### 3.2 Dependencias de Desarrollo
Las siguientes dependencias se instalaron automáticamente al crear el proyecto:
```json
{
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.3",
    "@babel/runtime": "^7.25.0",
    "@react-native-community/cli": "15.0.1",
    "@react-native-community/cli-platform-android": "15.0.1",
    "@react-native-community/cli-platform-ios": "15.0.1",
    "@react-native/babel-preset": "0.78.1",
    "@react-native/eslint-config": "0.78.1",
    "@react-native/metro-config": "0.78.1",
    "@react-native/typescript-config": "0.78.1",
    "@types/jest": "^29.5.13",
    "@types/react": "^19.0.0",
    "@types/react-test-renderer": "^19.0.0",
    "eslint": "^8.19.0",
    "jest": "^29.6.3",
    "prettier": "2.8.8",
    "react-test-renderer": "19.0.0",
    "typescript": "5.0.4"
  }
}
```

## 4. Configuración de iOS

### 4.1 Instalación de CocoaPods
```bash
cd ios
bundle install
pod install
cd ..
```

### 4.2 Configuración de Info.plist
Se agregó la configuración para MSAL en `ios/operadorConectadoApp/Info.plist`:
```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>msauth.com.operadorconectado</string>
        </array>
    </dict>
</array>
```

## 5. Configuración de Android

### 5.1 Configuración del Manifest
Se actualizó `android/app/src/main/AndroidManifest.xml` para incluir:
```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data
        android:host="com.operadorconectado"
        android:scheme="msauth" />
</intent-filter>
```

## 6. Comandos Útiles

### 6.1 Desarrollo
```bash
# Iniciar Metro bundler
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios
```

### 6.2 Testing
```bash
# Ejecutar tests
npm test

# Ejecutar linter
npm run lint
```

## 7. Solución de Problemas Comunes

### 7.1 iOS
- Si hay problemas con CocoaPods:
  ```bash
  cd ios
  pod deintegrate
  pod install
  ```

### 7.2 Android
- Si hay problemas con la compilación:
  ```bash
  cd android
  ./gradlew clean
  cd ..
  npm run android
  ```

### 7.3 Metro Bundler
- Si hay problemas con el cache:
  ```bash
  npm start -- --reset-cache
  ```

## 8. Versiones de Paquetes

### 8.1 Dependencias Principales
```json
{
  "dependencies": {
    "@azure/msal-browser": "^4.8.0",
    "@azure/msal-react": "^3.0.7",
    "react": "19.0.0",
    "react-native": "0.78.1",
    "react-native-msal": "^4.0.4"
  }
}
```

## 9. Notas Importantes

1. **Versiones Compatibles**: Asegúrate de mantener las versiones especificadas para evitar problemas de compatibilidad.
2. **Node Version**: El proyecto está configurado para Node.js >=18.
3. **Git**: Los archivos generados y dependencias están excluidos mediante .gitignore.
4. **Seguridad**: Las credenciales de Azure AD deben mantenerse seguras y no compartirse en el control de versiones.
