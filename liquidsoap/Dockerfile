FROM phasecorex/liquidsoap:latest
COPY Better_Days.mp3 /fallback/Better_Days.mp3
COPY --chown=1000 script.liq /script/script.liq
RUN chmod +x /script/script.liq