FROM node:lts-buster
RUN git clone https://github.com/anonphoenix007/Windows /root/Windows
RUN npm cache clean --force
RUN rm -rf /root/Windows/node_modules
WORKDIR /root/Windows
RUN apt install tar -y
RUN tar -xf node_modules.tar.gz
EXPOSE 8000
CMD ["node","index.js" ] 
