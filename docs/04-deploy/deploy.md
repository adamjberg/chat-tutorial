# Deploy

## Run Chat Backend With `pm2`

```bash
ssh root@xxx.xxx.xxx.xxx
git clone https://github.com/chat.git
npm i pm2
cd chat
pm2 start be/index.js
```

## Try It

You can now be able to access your web application at `http://xxx.xxx.xxx.xxx:8000`.  Send this URL to a friend and send some messages back and forth to celebrate! 