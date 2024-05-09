FROM node:lts-buster
RUN git clone https://github.com/anonphoenix007/Windows /root/Windows
RUN npm cache clean --force
RUN rm -rf /root/Windows/node_modules
WORKDIR /root/Windows
RUN npm install
EXPOSE 8000
CMD ["node","index.js" ] 
