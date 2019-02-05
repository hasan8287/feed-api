REQUIRED
  . node 10

RUN SERVICE
  . create file .env (example in .env.example)
  . npm install
  . npm run dev

RUN TEST
  . create file .env (example in .env.example)
  . npm install
  . npm run test
