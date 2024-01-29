    # FROM ghcr.io/puppeteer/puppeteer:21.5.2

    # ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    #     PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

    # WORKDIR /usr/src/app

    # COPY package*.json ./
    # RUN npm ci
    # COPY . .

    # # CMD [ "node", "demo.js" ]
    # Use the base image
FROM dorowu/ubuntu-desktop-lxde-vnc

# Expose the desired port
EXPOSE 80

# Specify the entry point command
CMD ["--http", "80"]
