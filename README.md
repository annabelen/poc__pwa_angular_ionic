# poc__pwa_angular_ionic

PASOS A SEGUIR PARA INSTALAR
1. npm install-> instalar paquetes
2. ionic serve -> Lanzar la app ionic
3. ionic capacitor add ios
4. ionic capacitor add android

--CAPACITOR--
3. ng add @capacitor/angular -> instalar capacitor con angular
4. ng build --prod -> Connstruir la web app
5. npm i @capacitor/ios @capacitor/android  -> innstalar capacior android/ios
6. npx cap add android -> añadir android
7. npm cap add ios -> añadir ios

CONTRUIR
Cree un proyecto Ionic para una plataforma determinada
* ionic capacitor build 
* ionic capacitor build android
* ionic capacitor build ios

ABRIR
Abra el IDE para un proyecto de plataforma nativo dado. Abra el IDE para su proyecto nativo (Xcode para iOS, Android Studio para Android)
* ionic capacitor open 
* ionic capacitor open android
* ionic capacitor open ios

RUN
Ejecutar un proyecto Ionic en un dispositivo conectado
* ionic capacitor run 
* ionic capacitor run android
* ionic capacitor run ios


PWA
* Seguir los pasos de este link https://ionicframework.com/docs/angular/pwa
* ng add @angular/pwa -> instalar
* Una vez que se haya agregado este paquete, ejecútelo ionic build --prod y el www directorio estará listo para implementarse como una PWA.

FIREBASE
* Seguir los pasos de este link https://ionicframework.com/docs/angular/pwa
* npm install -g firebase-tools -> instalar firebase tools
* firebase login -> loguearte en firabase. 
  Credenciales: amartos@deloitte.es // Roquete_2222
* firebase init -> inicializar  firabase
* firebase deploy -> subir la app


COCOAPODS
* sudo gem install cocoapods -> instalar
* pod update -> problema con cocoapods
