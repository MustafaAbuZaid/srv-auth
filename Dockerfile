From node:10
RUN mkdir srv-auth
COPY . /srv-auth
WORKDIR srv-auth
 
RUN npm i
EXPOSE 3005
ENTRYPOINT  node --max-old-space-size=4096  bin/www 
 
