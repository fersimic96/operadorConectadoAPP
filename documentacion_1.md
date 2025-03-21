# Documentación Operador Conectado APP

## 1. Estructura del Proyecto

```
operadorConectadoAPP/
├── frontend/
│   ├── src/
│   │   ├── auth/
│   │   │   ├── authConfig.js
│   │   │   └── AuthService.js
│   │   └── screens/
│   │       └── LoginScreen.js
│   ├── ios/
│   ├── android/
│   └── package.json
└── backend/
```

## 2. Configuración de Azure AD

### 2.1 Registro de la Aplicación
1. Acceder a [Azure Portal](https://portal.azure.com)
2. Navegar a Azure Active Directory > App registrations
3. Crear nuevo registro con los siguientes datos:
   - Nombre: Operador Conectado
   - Tipo de cuenta soportada: Single tenant
   - Plataforma: Mobile and desktop applications
   - URI de redirección: `msauth://com.operadorconectado/callback`

### 2.2 Credenciales Obtenidas
- **Application (Client) ID**: `b9e73a13-aa28-4cb4-af9b-d8afd9f36130`
- **Directory (Tenant) ID**: `f6ad868a-15ca-47ed-be84-0dbe602d2198`

## 3. Configuración del Frontend

### 3.1 Configuración de Autenticación (authConfig.js)
```javascript
export const msalConfig = {
    auth: {
        clientId: 'b9e73a13-aa28-4cb4-af9b-d8afd9f36130',
        authority: 'https://login.microsoftonline.com/f6ad868a-15ca-47ed-be84-0dbe602d2198',
        redirectUri: 'msauth://com.operadorconectado/callback',
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    }
};
```

### 3.2 Servicio de Autenticación (AuthService.js)
El servicio de autenticación proporciona las siguientes funcionalidades:
- **login()**: Inicia el proceso de autenticación con Azure AD
- **logout()**: Cierra la sesión del usuario
- **getAccessToken()**: Obtiene el token de acceso para las llamadas a la API

### 3.3 Pantalla de Login (LoginScreen.js)
Componente React Native que maneja:
- Botón de inicio de sesión con Microsoft
- Estados de carga
- Manejo de errores
- Interfaz de usuario moderna y responsive

## 4. Configuración de Plataformas

### 4.1 Android
Configuración en `android/app/src/main/AndroidManifest.xml`:
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

### 4.2 iOS
Configuración en `ios/operadorConectadoApp/Info.plist`:
```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>msauth.com.operadorconectado</string>
        </array>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLName</key>
        <string>com.operadorconectado</string>
    </dict>
</array>
```

## 5. Dependencias Principales

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

## 6. Flujo de Autenticación

1. El usuario presiona el botón "Login with Microsoft"
2. Se inicia el proceso de autenticación con Azure AD
3. El usuario ingresa sus credenciales en la ventana de Microsoft
4. Azure AD redirige de vuelta a la aplicación con el token
5. La aplicación valida el token y permite el acceso
6. Se almacena el token para futuras solicitudes

## 7. Próximos Pasos

1. Implementación del backend
2. Desarrollo de funcionalidades principales
3. Integración con APIs adicionales
4. Implementación de características de seguridad adicionales
5. Pruebas de integración

## 8. Comandos Útiles

### Instalación
```bash
cd frontend
npm install
```

### Ejecutar en Android
```bash
npm run android
```

### Ejecutar en iOS
```bash
cd ios
pod install
cd ..
npm run ios
```

## 9. Notas de Seguridad

- Los tokens se almacenan de forma segura
- Se implementa manejo de errores robusto
- Se utilizan scopes mínimos necesarios
- Se sigue el principio de mínimo privilegio
