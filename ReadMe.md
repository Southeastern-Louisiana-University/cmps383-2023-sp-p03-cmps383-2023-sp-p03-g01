# How to run the app locally

## Prerequisites
- .Net Core 7
- Latest NodeJS LTS

## Steps

### Visual Studio / Visual Studio Code Method

1. Open the `.sln` file in Visual Studio
2. Run the app in debug mode (Should be the `SP23.P03.Web` project)
3. Open Visual Studio Code in the `SP23.P03.Web\ClientApp` folder
4. Open a terminal in VS Code
5. Run `npm i` and `npm start`
6. A Swagger window should have opened after step 2. Remove everything after the `localhost:7031`
7. You should see the Entrack App at this point

### Command Line Method
1. Open a terminal in the `SP23.P03.Web` folder
2. Run `dotnet run`
3. Open a terminal in the `SP23.P03.Web\ClientApp` folder
4. Run `npm i` and `npm start`
5. A Swagger window should have opened after step 2. Remove everything after the `localhost:7031`
6. You should see the Entrack App at this point

# How to run the mobile app locally

## Offical Guide
-https://docs.google.com/document/d/1J13rT8bdTZssYd0XsqQzaOxO3mkvjkyk7Fls7Aht2B8/edit#heading=h.zhci47x6xqq3

## Prequisites
-ngrok account
-ngrok 

## Steps

### Setup your token
1. Go to https://dashboard.ngrok.com/get-started/setup 
2. Open file explorer and locate your ngrok-v3-stable-windows-amd64 compressed file
3. Extract all the compressed file
4. Open command prompt
5. Go to your uncompressed ngrok(ngrok-v3-stable-windows-amd64) file directory
6. Type and run step second command in https://dashboard.ngrok.com/get-started/setup (ex: ngrok config add-authtoken _____(your unique code) ) 

### Configuration for ngrok

1. Open command prompt
2. Go to your uncompressed ngrok(ngrok-v3-stable-windows-amd64) file directory 
3. Type in "ngrok config check" in command prompt and run it
4. Copy the ngrok configuration file( ex: C:\Users\sceth\AppData\Local/ngrok/ngrok.yml)
5. Open in the file in VS Code
should look like:

version: "2"
authtoken: your unique code 
region: us

6.add this to the file:

tunnels:
  web:
    addr: https://localhost:7031
    proto: http
    schemes:
      - https
  expo:
    addr: http://localhost:19000
    proto: http
    schemes:
      - http
      
### Running Ngrok
1. Open command prompt
2. Go to your uncompressed ngrok(ngrok-v3-stable-windows-amd64) file directory 
3. type and run "ngrok start --all"
4. This is example of what should pop up
![image](https://user-images.githubusercontent.com/74465454/226641468-35fefd90-5934-4d2e-89de-c13416807605.png)


### Tunnel to expo
1. Copy url before (-> http://localhost:19000) 
2. Open your package.json in mobile app with VS Code
3. Change the EXPO_PACKAGER_PROXY_URL to :"EXPO_PACKAGER_PROXY_URL={your url} && expo start”
4. Cd commnad to your mobile app in your VS code terminal (ex: cd cmps383-2023-sp-p03-cmps383-2023-sp-p03-g01\SP23-P03-Mobile) 
5. Type and run "npm run start" in your terminal 
6. Scan your QR code with your phone in terminal(ios: scan with camera app / andriod download expo go and scan with that)
7. Now your app is open
