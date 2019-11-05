FROM python:2.7-alpine

WORKDIR /usr/src/app
ENV HTTP_PORT 8080
ENV SRC /usr/src/app/simplemonitor
ENV TZ=America/Los_Angeles

EXPOSE ${HTTP_PORT}

RUN apk add --update \
    bash \
    bind-tools \
    build-base \
    libffi-dev \
    openrc \
    openssl \
    openssl-dev \
    su-exec \
    sudo \
    tzdata \
    && rm -rf /var/cache/apk/*

ADD https://github.com/jamesoff/simplemonitor/tarball/master /tmp
RUN mkdir -p ${SRC} && \
    tar -xzf /tmp/master -C /tmp/ && \
    mv /tmp/jamesoff-simplemonitor-*/* ${SRC} && \
    rm -rf /tmp/

RUN pip install --no-cache-dir -r ${SRC}/requirements.txt
# Workaround to get logs and alerts in "local" time
# https://github.com/jamesoff/simplemonitor/issues/53
RUN grep -l utcnow ${SRC}/* -r | xargs sed -i 's/utcnow/now/g'
RUN mkdir -p /config/html && cp -prf ${SRC}/html/* /config/html/

COPY config/* /config/
COPY start.py ${SRC}
RUN chmod u+x ${SRC}/start.py
CMD ["python", "/usr/src/app/simplemonitor/start.py"]

