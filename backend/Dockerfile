FROM adoptopenjdk:11-jre-hotspot-bionic
ARG JAR_FILE=build/libs/backend-0.11.3.jar
COPY ${JAR_FILE} backend.jar
ENTRYPOINT ["java","-jar","/backend.jar"]
EXPOSE 8080